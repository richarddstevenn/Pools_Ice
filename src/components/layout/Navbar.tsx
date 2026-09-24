"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Produk", href: "#products" },
  { name: "Area Pengantaran", href: "#delivery" },
  { name: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.filter((link) => link.href !== "#");
      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      const currentSection = isAtPageBottom
        ? navLinks.find((link) => link.href === "#contact") ?? navLinks[0]
        : sections.reduce((activeLink, link) => {
            const section = document.querySelector(link.href);
            if (section && window.scrollY + 160 >= (section as HTMLElement).offsetTop) {
              return link;
            }
            return activeLink;
          }, navLinks[0]);

      setActiveSection(currentSection.href);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1b211e]/75 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-1 shrink-0">
          <Link href="/" className="flex items-center gap-2 group w-max">
            <div className="relative h-12 w-36 md:h-14 md:w-44 hover:scale-105 transition-transform duration-300">
              <Image src="/logo-clear.png" alt="Pools Ice Logo" fill className="object-contain object-left brightness-0 invert" sizes="(max-width: 768px) 144px, 176px" priority />
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer whitespace-nowrap ${activeSection === link.href ? "text-[#8bd7ff]" : "text-white hover:text-[#8bd7ff]"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions - Right */}
        <div className="hidden lg:flex flex-1 shrink-0 justify-end items-center gap-4">
          <Link href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20saya%20ingin%20order%20es" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[#8bd7ff] text-[#14202a] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">Order <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            className="text-white p-2 hover:text-[#c8f169] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-8 w-8 md:h-10 md:w-10" />
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#1b211e] px-6 py-6"
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="block relative h-14 w-44" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo-clear.png" alt="Pools Ice Logo" fill className="object-contain object-left brightness-0 invert" sizes="176px" priority />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/70 transition-colors hover:text-[#8bd7ff]"
                aria-label="Close menu"
              >
                <X className="h-8 w-8 md:h-10 md:w-10" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 md:gap-10 items-center mt-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className={`text-3xl md:text-5xl font-heading font-medium transition-colors cursor-pointer ${activeSection === link.href ? "text-[#8bd7ff]" : "text-white hover:text-[#8bd7ff]"}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full mt-8"
              >
                <Link 
                  href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20saya%20ingin%20order%20es" 
                  target="_blank"
                  className="flex items-center justify-center rounded-full w-full max-w-xs mx-auto font-bold px-6 py-4 bg-cyan-500 text-white dark:text-slate-950 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Sekarang
                </Link>
              </motion.div> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
