"use client"
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import Footer from "@/components/common/footer";

const ProfileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <div className="w-80 bg-background shadow-lg border border-border/60 rounded-[25px] p-2" >
            <div className="h-52 rounded-[22px] overflow-hidden shadow-xl relative  " >
                <Image src="/images/component1/avatar.png" alt="Profile Drawer" width={1000} height={1000} quality={100} className="h-full object-cover" />
                {/* Progressive blur overlay with backdrop blur */}
                <ProgressiveBlur
                    className='pointer-events-none absolute bottom-0 left-0 h-[25%] w-full'
                    blurIntensity={0.5}
                />
                <div className="absolute bottom-0 left-0 p-3 w-full flex justify-between" >
                    <div>
                        <h3 className="text-sm font-medium text-white">John Doe</h3>
                        <p className="text-[10px] text-white/90 font-medium">Design Engineer</p>
                    </div>

                    <button className="cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-300 text-[11px] px-4 backdrop-blur-lg font-medium text-white rounded-full border border-border/30">Github</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center " >

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden w-full">
                    <div className="mt-4 px-4 py-5 bg-muted/70 rounded-2xl w-full">
                        <h3 className="text-xs font-medium text-foreground mb-3">The Thought process behind Adella AI.</h3>
                        <motion.div
                            initial="hidden"
                            animate={isOpen ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.2,
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="flex flex-wrap gap-2">
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="px-3 py-1 bg-foreground/10 text-[10px] font-medium text-muted-foreground rounded-full border border-border/30">
                                Adella Technologies
                            </motion.span>
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="px-3 py-1 bg-foreground/10 text-[10px] font-medium text-muted-foreground rounded-full border border-border/30">
                                4 Weeks
                            </motion.span>
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="px-3 py-1 bg-foreground/10 text-[10px] font-medium text-muted-foreground rounded-full border border-border/30">
                                Framer
                            </motion.span>
                        </motion.div>
                        <motion.p
                            initial={isOpen ? "visible" : "hidden"}
                            animate={isOpen ? "visible" : "hidden"}
                            exit={isOpen ? "visible" : "hidden"}
                            variants={paragraphVariants}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            className="text-xs text-muted-foreground mt-2 text-[11px]">&quot;Design is not just what it looks like and feels like. Design is how it works.&quot; — Steve Jobs. Adella is a modern productivity platform designed to help teams align goals, automate tasks, and visualize growth in real time. I built a cohesive design system focused on clarity, motion, and emotional connection. The goal was to create a digital workspace that feels human and structured yet alive.</motion.p>
                    </div>
                </motion.div>

                <button onClick={handleOpen} className="cursor-pointer group/btn flex items-center gap-1 mt-3" >
                    <ChevronDown className={`size-5 group-hover/btn:translate-x-0 translate-x-5 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className="group-hover/btn:opacity-100 opacity-0 transition-all duration-300 text-xs text-muted-foreground" >{isOpen ? 'Hide' : 'View'}</span>
                </button>

            </div>
        </div>
    )
}

const ProfileDrawerPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="min-h-screen flex justify-center items-center relative" >
                <ProfileDrawer />
            </div>
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>
            <Footer />
        </div>
    )
}

export default ProfileDrawerPage;
