import { Github, Sun, Moon, ChevronLeft } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'

const ChatHeader = ({ count }) => {
    const { theme, setTheme } = useTheme();
    const params = useParams();
    const personaName = params.persona;
    const router = useRouter();

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-4 border-b bg-background/50 backdrop-blur-sm'>
            <div className='flex items-center gap-2'>
                <ChevronLeft className='h-6 w-6 cursor-pointer mr-2 hover:scale-105 transition-all' onClick={() => router.back()} />
                <Image src={personaName == "piyush" ? "https://avatars.githubusercontent.com/u/44976328?v=4" : "https://avatars.githubusercontent.com/u/11613311?v=4"}
                    alt={personaName} width={40} height={40} className='rounded-full' />
                <h1 className='text-lg font-medium'>{personaName?.charAt(0).toUpperCase() + personaName.slice(1)}</h1>
            </div>
            <div className='flex items-center gap-2'>
                <span className='opacity-70 mr-2'>{count}/10</span>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            onClick={() => window.open(`https://github.com/nehra416/Persona_AI`, "_blank")}
                        >
                            <Github className="h-6 w-6" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="mr-2">
                        <p>Github Profile</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            variant="ghost"
                        >
                            {
                                theme === "dark"
                                    ? <Sun className="h-6 w-6" />
                                    : <Moon className="h-6 w-6" />
                            }
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="mr-2">
                        <p>Toggle Theme</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default ChatHeader
