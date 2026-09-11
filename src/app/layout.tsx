import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pools Ice | Es Kristal & Es Serut Berkualitas di Bali",
  description: "Pools Ice adalah produsen dan distributor es kristal dan es serut berkualitas di Bali. Melayani area Denpasar, Canggu, Seminyak, dan sekitarnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${outfit.variable} font-sans min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Dynamic Background Elements */}
          <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none hidden dark:block">
            {/* Glowing Orbs */}
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen" />
          </div>

          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
