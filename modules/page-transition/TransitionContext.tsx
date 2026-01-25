"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContextType {
  isTransitioning: boolean;
  exitingTo: string | null;
  navigate: (href: string) => void;
  completeTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [exitingTo, setExitingTo] = useState<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      // Don't navigate if we're already on this page
      if (href === pathname) return;

      // Start exit animation
      setIsTransitioning(true);
      setExitingTo(href);
    },
    [pathname]
  );

  const completeTransition = useCallback(() => {
    if (exitingTo) {
      router.push(exitingTo);
      setExitingTo(null);
    }
    setIsTransitioning(false);
  }, [exitingTo, router]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        exitingTo,
        navigate,
        completeTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
}

