"use client";

import { motion } from "framer-motion";
import { MapPin, Factory } from "lucide-react";

const locations = [
  { name: "Tanah Lot",   top: "12%", left: "18%", delay: 0 },     // atas-kiri
  { name: "Canggu",      top: "10%", left: "62%", delay: 0.5 },   // atas-tengah
  { name: "Kerobokan",   top: "28%", left: "80%", delay: 1.0 },   // kanan-atas
  { name: "Seminyak",    top: "58%", left: "72%", delay: 1.5 },   // kanan-bawah
  { name: "Jimbaran",    top: "82%", left: "52%", delay: 2.0 },   // bawah
  { name: "Uluwatu",     top: "80%", left: "20%", delay: 2.5 },   // bawah-kiri
  { name: "Denpasar",    top: "60%", left: "10%", delay: 3.0 },   // kiri-bawah
];

interface DeliveryMapProps {
  hoveredArea?: string | null;
  setHoveredArea?: (area: string | null) => void;
}

export function DeliveryMap({ hoveredArea, setHoveredArea }: DeliveryMapProps) {
  return (
    <div className="relative w-full h-[400px] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-inner group">
      {/* Abstract Map Background - Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40" />
      
      {/* Decorative gradient orb for the Factory */}
      <div className="absolute top-[35%] left-[25%] w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Connection Lines (SVG) with flowing animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {locations.map((loc, i) => (
          <g key={`line-${i}`}>
            <motion.line
              x1="25%" // Factory X
              y1="35%" // Factory Y
              x2={loc.left}
              y2={loc.top}
              stroke="currentColor"
              strokeWidth="2"
              className="text-cyan-500/20"
            />
            <motion.line
              x1="25%" // Factory X
              y1="35%" // Factory Y
              x2={loc.left}
              y2={loc.top}
              stroke="currentColor"
              strokeWidth="2"
              className="text-cyan-400"
              strokeDasharray="6 12"
              initial={{ opacity: 0, strokeDashoffset: 36 }}
              animate={{ opacity: [0, 1, 1, 0], strokeDashoffset: [36, 0, -36] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: loc.delay }}
            />
          </g>
        ))}
      </svg>

      {/* Hub Node (Factory in Denpasar) */}
      <motion.div
        className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ top: "35%", left: "25%" }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-cyan-400/40 rounded-full blur-md"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative bg-cyan-500 p-3 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] border-2 border-white dark:border-slate-900 text-white dark:text-slate-950">
            <Factory className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-2 px-3 py-1 bg-cyan-500 text-white dark:text-slate-950 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
          Pabrik (Denpasar)
        </div>
      </motion.div>

      {/* Destination Nodes */}
      {locations.map((loc) => (
        <motion.div
          key={loc.name}
          className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ top: loc.top, left: loc.left }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: loc.delay }}
        >
          <div 
            className="relative transition-transform duration-300"
            onMouseEnter={() => setHoveredArea?.(loc.name)}
            onMouseLeave={() => setHoveredArea?.(null)}
          >
            <div className={`relative p-2 rounded-full shadow-md border transition-colors cursor-default ${hoveredArea === loc.name ? 'bg-cyan-500 border-cyan-400 text-white dark:text-slate-900 scale-125' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-cyan-500 dark:text-cyan-400 hover:text-white dark:hover:text-white hover:border-cyan-400 hover:bg-cyan-500'}`}>
              <MapPin className="h-4 w-4" />
            </div>
          </div>
          <div className={`mt-1 px-2 py-0.5 backdrop-blur-sm rounded-md text-[10px] font-semibold shadow-sm border whitespace-nowrap transition-colors ${hoveredArea === loc.name ? 'bg-cyan-500 text-white dark:text-slate-900 border-cyan-400' : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>
            {loc.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
