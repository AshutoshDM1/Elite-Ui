"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative overflow-hidden cursor-pointer text-muted-foreground shadow-sm border-muted-foreground/20"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 180, opacity: 0 }}
                        transition={{ 
                            duration: 0.2, 
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                        }}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ scale: 0, rotate: 180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: -180, opacity: 0 }}
                        transition={{ 
                            duration: 0.2, 
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                        }}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    )
}
