"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { env } from "@/env";
import { Button } from "@/components/ui/button";
import { CustomUserButton } from "@/components/auth/user-button";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white py-3 text-gray-900 shadow-lg"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="group flex items-center space-x-3">
          <div
            className={` ${
              scrolled
                ? "bg-blue-600 text-white"
                : "bg-white bg-opacity-20 text-white backdrop-blur-sm group-hover:bg-opacity-30"
            }`}
          ></div>
          {scrolled ? (
            <Image src="/logo.png" alt="Logo" width={300} height={50} />
          ) : (
            <>
              <Image src="/ShortLogo.png" alt="Logo" width={110} height={50} />
              <p className="mt-4 text-5xl font-bold">IGG Technik</p>
            </>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          <Link
            href="#aktuelles"
            className={`rounded-md px-4 py-2 font-medium transition-all duration-200 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                : "text-white hover:bg-white hover:bg-opacity-10"
            }`}
          >
            Aktuelles
          </Link>
          <Link
            href="#veranstaltungen"
            className={`rounded-md px-4 py-2 font-medium transition-all duration-500 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                : "text-white hover:bg-white hover:bg-opacity-10"
            }`}
          >
            Veranstaltungen
          </Link>
          <Link
            href="#kontakt"
            className={`rounded-md px-4 py-2 font-medium transition-all duration-200 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                : "text-white hover:bg-white hover:bg-opacity-10"
            }`}
          >
            Kontakt
          </Link>
          <SignedOut>
            <Link
              href={env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
              className={`ml-2 rounded-lg px-5 py-2 font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg"
                  : "bg-white text-blue-900 shadow-md hover:bg-blue-50 hover:shadow-lg"
              }`}
            >
              Anmelden
            </Link>
          </SignedOut>
          <SignedIn>
            <CustomUserButton />
          </SignedIn>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`rounded-lg p-2 transition-colors duration-200 md:hidden ${
            scrolled
              ? "hover:bg-gray-100"
              : "hover:bg-white hover:bg-opacity-10"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white px-6 py-4 text-gray-900 shadow-xl md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              href="#aktuelles"
              className="rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aktuelles
            </Link>
            <Link
              href="#veranstaltungen"
              className="rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Veranstaltungen
            </Link>
            <Link
              href="#kontakt"
              className="rounded-lg px-4 py-3 font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <SignedOut>
              <Link href={env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>
                <Button>Anmelden</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <CustomUserButton />
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
