"use client"

import { useEffect } from "react"

const { useTheme } = require("next-themes")

export function InitThemeToLocalStorage() {
    const { theme, systemTheme } = useTheme()

    useEffect(() => {
        if (!localStorage.getItem('theme')) {

            const appliedTheme = theme === 'system' ? systemTheme : theme
            localStorage.setItem('theme', appliedTheme || 'dark')
        }
    }, [theme, systemTheme])

    return null
}