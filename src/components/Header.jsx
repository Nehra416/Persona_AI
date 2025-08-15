"use client"

import { GraduationCapIcon, Sun, Moon, Github } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link';

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-4 border-b bg-background/50 backdrop-blur-sm'>
            <div className='flex items-center gap-2'>
                <GraduationCapIcon className='h-6 w-6' />
                <Link href={'/'}>
                    <h1 className='text-lg font-medium'>Persona AI</h1>
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            onClick={() => window.open("https://github.com/nehra416/Persona_AI", "_blank")}
                        >
                            <Github className="h-6 w-6" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="mr-2">
                        <p>Github</p>
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

export default Header
