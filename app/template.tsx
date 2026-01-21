"use client";
import Logo from "@/common/Logo/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence
            key={pathname}
            initial={false}
            mode="wait">
            <motion.div
                key={pathname}
                exit={{ opacity: 0, transition: { delay: 4, duration: .5 } }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: ["0%", "100%"], transition: { duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } }}
                    exit={{ y: "-100%" }}
                    className="fixed top-0 min-h-screen w-full bg-black z-50 flex items-center justify-center"
                >
                    <Logo className="size-10 invert brightness-0 animate-spin" />
                </motion.div>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}