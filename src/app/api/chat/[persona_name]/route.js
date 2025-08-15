import 'dotenv/config';
import { OpenAI } from 'openai';
import { personaData } from '@/persona/personaData';

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export async function POST(req, { params }) {
    const { persona_name } = await params;
    const { messages } = await req.json();

    const persona = personaData.find(persona => persona.id === persona_name);
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

    return Response.json(response.choices[0].message);
}
