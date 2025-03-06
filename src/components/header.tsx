"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { CustomUserButton as UserButton } from "./auth/user-button";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme/DarkModeToggle";
import { env } from "@/env";
import { useTheme } from "next-themes";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const { theme } = useTheme();

  // Define your Tailwind colors in RGB format
  const lightHeaderColor = "rgb(219, 234, 254)";
  const darkHeaderColor = "rgb(25, 28, 48)";

  // Choose the correct header color based on the theme
  const headerColor = theme === "dark" ? darkHeaderColor : lightHeaderColor;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.header
        className="fixed z-10 w-full border-b lg:h-auto"
        animate={{
          backgroundColor: isAtTop ? "transparent" : headerColor,
          borderColor: isAtTop ? "transparent" : headerColor,
          opacity: isAtTop ? 1 : 0.95,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:py-4">
          <Link href="/">
            <motion.div
              animate={{
                width: isAtTop ? 340 : 260,
                height: isAtTop ? 50 : 40,
                marginLeft: isAtTop ? 0 : 50,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={340}
                height={50}
                className="h-full w-full cursor-pointer object-contain"
                priority
              />
            </motion.div>
          </Link>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link href={env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>
                <Button>Anmelden</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </motion.header>
    </div>
  );
}
