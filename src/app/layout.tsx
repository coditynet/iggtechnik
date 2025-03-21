import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Sonner />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
