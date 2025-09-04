"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const TeacherCard = ({ teacher, index }) => {

    return (
        <div className='py-4 px-6'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
            >
                <Card className="group relative overflow-hidden rounded-2xl border-muted bg-card/60 backdrop-blur-md transition-colors">
                    <CardHeader className="relative z-10">
                        <div className="flex items-start justify-between">
                            <div className='flex items-center gap-4'>
                                <Image src={teacher.image} alt={teacher.name} width={100} height={100}
                                    className='rounded-full'
                                />
                                <div>
                                    <CardTitle className="text-xl md:text-2xl">{teacher.name}</CardTitle>
                                    <CardDescription className="mt-1 text-sm md:text-base">{teacher.role}</CardDescription>
                                </div>
                            </div>
                            <div className="md:flex hidden h-12 w-12 items-center justify-center rounded-xl border bg-background/60">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">{teacher.tagline}</p>
                    </CardHeader>

                    <CardContent className="relative z-10">
                        <ul className="mt-1 flex flex-wrap gap-2">
                            {
                                teacher.highlights.map((h) => (
                                    <li key={h}>
                                        <Badge variant="outline" className="rounded-full border-dashed">{h}</Badge>
                                    </li>
                                ))
                            }
                        </ul>
                    </CardContent>

                    <CardFooter className="relative z-10 flex items-center justify-between gap-3">
                        <Link href={`/chat/${teacher.id}`} className="w-full">
                            <Button className="group/button w-full rounded-xl" size="lg">
                                Start Chat
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
                            </Button>
                        </Link>
                    </CardFooter>

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/10 to-transparent" />
                </Card>
            </motion.div>
        </div>
    )
}

export default TeacherCard
