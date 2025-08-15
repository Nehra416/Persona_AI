'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';
import { useTheme } from 'next-themes';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import TypingIndicator from '@/components/TypingIndicator';
import { useParams } from 'next/navigation';

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef(null);
    const { theme } = useTheme();
    const [personaName, setPersonaName] = useState('');

    const params = useParams();

    useEffect(() => {
        if (params?.persona_name) {
            setPersonaName(params.persona_name);
        }
    }, [params]);

    const displayedMessages = isLoading
        ? [...messages, { role: 'assistant', content: 'typing-indicator' }]
        : messages;

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [displayedMessages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        setIsLoading(true);
        const newMessage = { role: 'user', content: input, time: new Date() };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setInput('');

        try {
            const response = await axios.post(`/api/chat/${personaName}`, { messages: updatedMessages });
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'assistant', content: response.data.content, time: new Date() },
            ]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className={`flex flex-col h-screen pt-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            {/* Messages */}
            <main className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
                <AnimatePresence initial={false}>
                    {displayedMessages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.content === 'typing-indicator' ? (
                                <TypingIndicator theme={theme} />
                            ) : (
                                <div
                                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'
                                        }`}
                                    style={{ maxWidth: '75%' }}
                                >
                                    {/* Message */}
                                    <div className={`px-4 py-2 rounded-xl shadow-md break-words ${msg.role === 'user'
                                        ? 'bg-[#06B6D4] dark:bg-[#4682B4] text-white'
                                        : theme === 'dark'
                                            ? 'bg-gray-800 text-gray-200'
                                            : 'bg-gray-200 text-gray-900'
                                        }`}
                                    >
                                        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>

                                    {/* Time */}
                                    <div
                                        className={`text-xs opacity-70 mt-1 w-full ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                                    >
                                        {formatTime(msg.time)}
                                    </div>
                                </div>

                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div ref={bottomRef} />
            </main>

            {/* Input Area */}
            <div className="p-4 border-t">
                <div
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 ${theme === 'dark'
                        ? 'bg-gray-800 text-gray-200 border border-gray-700'
                        : 'bg-gray-200 text-gray-900'
                        }`}
                >
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className={`flex-1 bg-transparent outline-none text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={handleSendMessage}
                        className={`p-2 rounded-md hover:scale-105 transition-all ${theme === 'dark' ? 'bg-[#4682B4]' : 'bg-[#06B6D4]'}`}
                    >
                        {isLoading ? (
                            <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                        ) : (
                            <SendHorizonal className="w-4 h-4 text-white" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
