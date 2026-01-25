"use client";
import { useTransition } from "@/modules/page-transition/TransitionContext";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isTransitioning, completeTransition } = useTransition();

  useEffect(() => {
    if (isTransitioning) {
      const exitDuration = 1500; // match overlay exit duration
      const timer = setTimeout(() => {
        completeTransition();
      }, exitDuration);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, completeTransition]);

  return (
    <>
      {/* Exit overlay while leaving current page */}
      {isTransitioning && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: "0%",
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          style={{ zIndex: 100 }}
          className="fixed top-0 left-0 min-h-screen w-full bg-black flex items-center justify-center"
        >
        </motion.div>
      )}

      {/* Entry overlay when arriving on new page */}
      {!isTransitioning && (
        <motion.div
          key={`entry-${pathname}`}
          initial={{ y: "0%" }}
          animate={{
            y: "-100%",
            transition: {
              duration: 1,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed top-0 left-0 min-h-screen w-full bg-black z-50 pointer-events-none flex items-center justify-center"
        >
        </motion.div>
      )}

      {/* Page content fade */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isTransitioning ? 0 : 1,
          transition: {
            duration: 0.5,
            delay: isTransitioning ? 0 : 0.8,
          },
        }}
      >
        {children}
      </motion.div>
    </>
  );
}