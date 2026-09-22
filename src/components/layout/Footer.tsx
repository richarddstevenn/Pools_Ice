"use client";

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
    <footer id="contact" className="border-t border-white/10 bg-[#1b211e] py-10 text-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-2 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Brand & About */}
          <div>
            <div className="relative -ml-3 mb-1 h-14 w-44 transition-transform duration-300 hover:scale-105">
              <Image src="/logo-clear.png" alt="Pools Ice Logo" fill className="object-contain object-left brightness-0 invert" sizes="224px" />
            </div>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/60">
              Ice supply untuk dapur, bar, dan hospitality yang tidak boleh kehabisan standar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-white">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="block text-sm text-white/60 transition-colors hover:text-[#8bd7ff]">Tentang Kami</a></li>
              <li><a href="#products" onClick={(e) => handleScrollTo(e, "#products")} className="block text-sm text-white/60 transition-colors hover:text-[#8bd7ff]">Produk Kami</a></li>
              <li><a href="#delivery" onClick={(e) => handleScrollTo(e, "#delivery")} className="block text-sm text-white/60 transition-colors hover:text-[#8bd7ff]">Area Pengantaran</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 font-heading text-base font-semibold text-white">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#8bd7ff]" />
                <div>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 mb-0.5 block text-sm text-white/60 transition-colors hover:text-[#8bd7ff]">
                    Jl. Setra Dalem No. 88X, Denpasar, Bali
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#8bd7ff]" />
                <a href="https://wa.me/6287816777741" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 transition-colors hover:text-[#8bd7ff]">
                  0878-1677-7741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="h-4 w-4 shrink-0 text-[#8bd7ff]" />
                <a href="https://instagram.com/pools.ice" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 transition-colors hover:text-[#8bd7ff]">
                  pools.ice
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-[#8bd7ff]" />
                <div>
                  <p className="text-sm font-medium text-white/60">Buka Setiap Hari</p>
                  <p className="text-sm font-medium text-white/60">07:00 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-white/35">
          <p>&copy; {new Date().getFullYear()} Pools Ice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
