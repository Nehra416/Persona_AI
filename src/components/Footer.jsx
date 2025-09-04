import React from 'react'
import { Badge } from './ui/badge'

const Footer = () => {
    return (
        <footer className="mt-16 border-t">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} Persona AI</span>
                <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/deepak-nehra/" target='_blank' className="underline underline-offset-4 hover:text-foreground">
                        <Badge variant="secondary" className="rounded-full">Made By Deepak Nehra ⚡</Badge>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
