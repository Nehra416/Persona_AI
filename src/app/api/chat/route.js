import 'dotenv/config';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { personaData } from '@/persona_data/data';

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export async function POST(req) {
    try {
        const { messages, teacher_name } = await req.json();
        const persona = personaData.find(persona => persona.id === teacher_name);
        if (!persona) {
            return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
        }
        const systemPrompt = {
            role: "system",
            content: persona.system_prompt
        };

        const fullMessages = [systemPrompt, ...messages];
        const response = await client.chat.completions.create({
            model: 'gemini-2.0-flash',
            messages: fullMessages,
            temperature: 0.7
        });

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
