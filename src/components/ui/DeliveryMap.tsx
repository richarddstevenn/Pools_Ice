"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Clock3, Factory, MapPin, Truck } from "lucide-react";

const routes = [
  { name: "Denpasar", time: "15–30 min", status: "Ready", distance: "Hub utama", active: true },
  { name: "Canggu", time: "45–60 min", status: "On route", distance: "18 km" },
  { name: "Seminyak", time: "30–45 min", status: "Ready", distance: "11 km" },
  { name: "Jimbaran", time: "45–60 min", status: "Ready", distance: "16 km" },
  { name: "Uluwatu", time: "60–90 min", status: "Schedule", distance: "28 km" },
];

interface DeliveryMapProps {
  hoveredArea?: string | null;
  setHoveredArea?: (area: string | null) => void;
}

export function DeliveryMap({ hoveredArea, setHoveredArea }: DeliveryMapProps) {
  const selectedRoute = routes.find((route) => route.name === hoveredArea) ?? routes[0];

  return (
    <div className="relative min-h-[400px] overflow-hidden bg-[#f8fbfc] text-[#17242b]">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#dcecf4] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#e7f4fa] blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-[#d8e5ea] px-6 py-5 md:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4d91b2]">Delivery desk / 05</p>
          <h3 className="mt-2 font-heading text-2xl font-medium tracking-[-.04em]">Bali route board</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#b9deec] bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#3182a7]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#46b7df]" /> Live today
        </div>
      </div>

      <div className="relative grid gap-8 px-6 py-7 md:grid-cols-[.85fr_1.15fr] md:px-8">
        <div className="flex flex-col justify-between">
          <div className="rounded-xl border border-[#cfe2e9] bg-white p-5 shadow-[0_12px_30px_rgba(48,107,133,.08)]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9f1fb] text-[#2782aa]"><Factory className="h-5 w-5" /></div>
                <div><p className="text-xs font-bold">Pools Ice Hub</p><p className="mt-1 text-[11px] text-[#75909b]">Setra Dalem, Denpasar</p></div>
              </div>
              <Check className="h-4 w-4 text-[#38a6ce]" />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-[#e4eef1] pt-4 text-[11px] text-[#75909b]"><span>Orders today</span><strong className="text-sm text-[#17242b]">24 drops</strong></div>
          </div>
          <div className="mt-6 rounded-xl bg-[#17242b] p-5 text-white">
            <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8bd7ff]">Selected route</span><ArrowUpRight className="h-4 w-4 text-[#8bd7ff]" /></div>
            <p className="mt-4 font-heading text-3xl">{selectedRoute.name}</p>
            <div className="mt-5 flex items-center gap-5 text-xs text-white/55"><span className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5 text-[#8bd7ff]" /> {selectedRoute.time}</span><span>{selectedRoute.distance}</span></div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between"><p className="text-xs font-bold text-[#47636d]">Today&apos;s coverage</p><span className="text-[10px] text-[#8aa0a9]">7 areas served</span></div>
          <div className="space-y-2">
            {routes.map((route, index) => {
              const isSelected = hoveredArea === route.name || (!hoveredArea && index === 0);
              return <motion.button key={route.name} type="button" onMouseEnter={() => setHoveredArea?.(route.name)} onMouseLeave={() => setHoveredArea?.(null)} whileHover={{ x: 4 }} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${isSelected ? "border-[#8bd7ff] bg-[#e9f7fc] shadow-[0_8px_20px_rgba(62,159,198,.1)]" : "border-transparent bg-white/65 hover:border-[#d4e8ee]"}`}>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isSelected ? "bg-[#8bd7ff] text-[#17242b]" : "bg-[#edf4f6] text-[#83a0aa]"}`}><MapPin className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 flex-1"><strong className="block text-xs font-bold">{route.name}</strong><span className="mt-1 block text-[10px] text-[#8aa0a9]">{route.distance}</span></span>
                <span className="text-right"><span className={`block text-[10px] font-bold ${route.status === "On route" ? "text-[#2687ad]" : "text-[#76909a]"}`}>{route.status}</span><span className="mt-1 block text-[10px] text-[#9aabb1]">{route.time}</span></span>
              </motion.button>;
            })}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-[#d8e5ea] pt-4 text-[10px] text-[#8198a1]"><Truck className="h-4 w-4 text-[#4aacca]" /><span>Armada berangkat setiap pagi dari Denpasar</span></div>
        </div>
      </div>
    </div>
  );
}
