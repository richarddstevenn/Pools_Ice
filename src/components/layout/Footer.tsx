"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Pools%20Ice%20Denpasar%20Bali";

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-4 border-t border-slate-200 dark:border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* Brand & About */}
          <div>
            <div className="relative h-28 w-64 mb-2 hover:scale-105 transition-transform duration-300 -ml-4">
              <Image src="/logo-clear.png" alt="Pools Ice Logo" fill className="object-contain object-left dark:brightness-0 dark:invert" sizes="256px" />
            </div>
            <p className="mb-4 max-w-xs leading-relaxed text-slate-600 dark:text-slate-400 text-sm">
              Produsen dan distributor es kristal & es serut higienis terpercaya di Bali. Berdiri sejak 2020 untuk memenuhi kebutuhan F&B Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-heading font-semibold text-base mb-8">Menu</h3>
            <ul className="space-y-7">
              <li><a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer block">Tentang Kami</a></li>
              <li><a href="#products" onClick={(e) => handleScrollTo(e, "#products")} className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer block">Produk Kami</a></li>
              <li><a href="#delivery" onClick={(e) => handleScrollTo(e, "#delivery")} className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer block">Area Pengantaran</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-heading font-semibold text-base mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <MapPin className="h-4 w-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                </div>
                <div>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors block mb-0.5 mt-1">
                    Jl. Setra Dalem No. 88X, Denpasar, Bali
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Phone className="h-4 w-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                </div>
                <a href="https://wa.me/6287816777741" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                  0878-1677-7741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <InstagramIcon className="h-4 w-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                </div>
                <a href="https://instagram.com/pools.ice" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                  pools.ice
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 mt-1">
                  <Clock className="h-4 w-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
                </div>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">Buka Setiap Hari</p>
                  <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">07:00 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-4 flex flex-col justify-center items-center gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pools Ice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
