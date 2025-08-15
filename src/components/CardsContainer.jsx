"use client"

import React from 'react'
import TeacherCard from './TeacherCard'
import { motion } from 'framer-motion'
import Link from 'next/link'

const TEACHERS = [
    {
        id: 'hitesh',
        name: 'Hitesh Choudhary',
        role: 'Coding Mentor',
        tagline: 'Passionate about teaching programming with a focus on practical knowledge and real-world applications.',
        highlights: ['Web Development', 'Javascript', 'Python', 'DSA'],
        image: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
        id: 'piyush',
        name: 'Piyush Garg',
        role: 'Coding Mentor',
        tagline: 'Content creator, educator, and entrepreneur known for his expertise in the tech industry.',
        highlights: ['Software Engineer', 'System Design', 'DevOps', 'Docker'],
        image: 'https://avatars.githubusercontent.com/u/44976328?v=4',
    },
]

const CardsContainer = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2"
            >
                {
                    TEACHERS.map((t, i) => (
                        <TeacherCard key={t.id} teacher={t} index={i} />
                    ))
                }
            </motion.div>

            {/* More mentors coming soon */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 text-center md:mt-14"
            >
                <p className="text-sm text-muted-foreground">
                    More mentors coming soon. Want a custom persona?{' '}
                    <a href="https://www.linkedin.com/in/deepak-nehra/" target='_blank' className="underline underline-offset-4 hover:text-foreground">Contact us</a>.
                </p>
            </motion.div>
        </section>
    )
}

export default CardsContainer
