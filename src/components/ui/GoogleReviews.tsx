"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Darren Christopher",
    time: "7 bulan lalu",
    rating: 5,
    text: "Salah satu pabrik es kristal terbaik di Bali. Penanganan profesional, kualitas premium, dan pengiriman tepat waktu. Sangat direkomendasikan!",
    initial: "D",
    color: "bg-purple-600"
  },
  {
    name: "Janvier Setiawan",
    time: "8 bulan lalu",
    rating: 5,
    text: "Kualitas Es nya bagus sekali, bersih higienis dan pengiriman tepat waktu",
    initial: "J",
    color: "bg-blue-600"
  },
  {
    name: "Abel Ryan",
    time: "1 tahun lalu",
    rating: 5,
    text: "Pertama kali beli disini kualitas es nya bagus dan terjamin. Next pesan lagi ya min 👍",
    initial: "A",
    color: "bg-slate-600"
  },
  {
    name: "Gabriel Krishna 09",
    time: "2 tahun lalu",
    rating: 5,
    text: "Wahh esnya bagus sekali mantap sayaa sudah langganan 1 Tahun keren",
    initial: "G",
    color: "bg-emerald-600"
  },
  {
    name: "Stephanie Olivia",
    time: "2 tahun lalu",
    rating: 5,
    text: "Pabrik dan supplier ice kristal terpercaya di Bali 👍",
    initial: "S",
    color: "bg-rose-600"
  },
  {
    name: "ARIFIN ARDIANSYAH",
    time: "1 tahun lalu",
    rating: 5,
    text: "sprot kan ynk terbaik",
    initial: "A",
    color: "bg-indigo-600"
  },
];

// Duplicate the array to create a seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export function GoogleReviews() {
  return (
    <div 
      className="relative w-full overflow-hidden py-10"
      style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {duplicatedReviews.map((review, i) => (
          <div 
            key={`${review.name}-${i}`} 
            className="w-[350px] shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col"
          >
            {/* Header: Avatar + Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${review.color}`}>
                {review.initial}
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-medium">{review.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{review.time}</span>
                </div>
              </div>
            </div>
            
            {/* Review Text */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
              "{review.text}"
            </p>
            
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-1.5 opacity-70">
                {/* Simple Google G Logo SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[12px] font-medium text-slate-400">Reviews</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
