"use client";

import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MapPin, Truck, ShieldCheck, Snowflake, Star, Filter, Droplets, PackageCheck, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { DeliveryMap } from "@/components/ui/DeliveryMap";
import { GoogleReviews } from "@/components/ui/GoogleReviews";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const processSteps = [
  { title: "Filtrasi RO", desc: "Penyaringan air baku dengan mesin Reverse Osmosis untuk menghilangkan berbagai bakteri dan zat berbahaya lainnya." },
  { title: "Pembekuan", desc: "Proses pembekuan air yang sudah higienis pada suhu optimal mesin pabrik." },
  { title: "Es Jernih", desc: "Bongkahan kristal premium, higienis, bening, dan tidak mudah mencair." },
  { title: "Pengemasan", desc: "Packing & sealing otomatis menjaga es tetap higienis." },
  { title: "Distribusi", desc: "Armada kami siap antar ke seluruh area Bali." },
] as const;

/* Track line variants — inherit parent's whileInView so they animate simultaneously with step cards */
const trackHVariant = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.8, ease: "easeInOut" as const } },
};
const trackVVariant = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 1, ease: "easeInOut" as const } },
};

import { useState } from "react";

export default function Home() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const stepIcons = [Filter, Snowflake, Droplets, PackageCheck, Truck];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-sm md:text-base font-medium text-slate-200">Pabrik Es Terpercaya di Bali</span>
          </motion.div> */}

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto text-center"
          >
            <motion.span variants={fadeIn} className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
              Dingin, Bersih
            </motion.span>
            <motion.span variants={fadeIn} className="block drop-shadow-lg">
              Siap Antar.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            Solusi es kristal dan es serut premium untuk bisnis F&B Anda di daerah Bali. Kualitas yang bisa Anda andalkan setiap hari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20saya%20ingin%20order%20es"
              target="_blank"
              className="group relative flex items-center justify-center gap-3 rounded-full w-full sm:w-auto font-bold px-10 h-16 text-lg bg-cyan-500 text-white dark:text-slate-950 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              Order Sekarang
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-3 rounded-full w-full sm:w-auto font-semibold px-10 h-16 text-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300"
            >
              Lihat Produk
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tentang & Fitur Section (Bento Grid) */}
      <section id="about" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400 mb-6"
            >
              Tentang & Keunggulan
            </motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6"
            >
              Tentang Pools Ice
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Bento Box 1: Tentang Kami (Besar, rentang 2 kolom) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors duration-500 p-8 md:p-12 shadow-xl dark:shadow-2xl flex flex-col justify-center">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-100 dark:bg-blue-600/20 rounded-full blur-3xl group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors duration-500" />
              <h3 className="text-2xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight relative z-10">
                Bertahan dan Berkembang Sejak Masa Sulit
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg relative z-10">
                <p>
                  Pools Ice lahir pada tahun 2020, di tengah masa pandemi COVID-19. Ketika banyak bisnis F&B berjuang, kami hadir untuk memastikan pasokan es yang higienis, aman, dan berkualitas tetap terjaga.
                </p>
                <p>
                  Berlokasi di <strong>Jl. Setra Dalem No. 88X, Denpasar</strong>, pabrik kami menerapkan standar produksi es yang ketat untuk menjamin setiap bongkahan es aman untuk dikonsumsi.
                </p>
              </div>
            </motion.div>

            {/* Bento Box 2: Higienis */}
            <motion.div variants={fadeIn} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors duration-500 p-8 shadow-xl dark:shadow-2xl flex flex-col items-start">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/50 transition-all duration-300">
                <ShieldCheck className="h-8 w-8 text-cyan-500 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">100% Higienis & Aman</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Diproses menggunakan air bersih berkualitas yang difilter dengan standar tinggi, aman untuk segala jenis minuman.
              </p>
            </motion.div>

            {/* Bento Box 3: Pengiriman */}
            <motion.div variants={fadeIn} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors duration-500 p-8 shadow-xl dark:shadow-2xl flex flex-col items-start">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/50 transition-all duration-300">
                <Truck className="h-8 w-8 text-cyan-500 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">Pengiriman Tepat Waktu</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Armada kami siap mengantarkan pesanan Anda sesuai jadwal agar operasional bisnis Anda berjalan lancar tanpa hambatan.
              </p>
            </motion.div>

            {/* Bento Box 4: Harga (rentang 2 kolom) */}
            <motion.div variants={fadeIn} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors duration-500 p-8 md:p-12 shadow-xl dark:shadow-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Harga Sangat Bersaing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
                  Kualitas es premium tidak harus mahal. Kami menawarkan harga yang kompetitif, sangat cocok untuk kebutuhan rutin harian restoran, cafe, atau penyelenggaraan event besar.
                </p>
              </div>
              <div className="h-24 w-24 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-shrink-0 items-center justify-center group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/50 transition-all duration-300">
                <CheckCircle2 className="h-12 w-12 text-cyan-500 dark:text-cyan-400" />
              </div>
            </motion.div>
          </motion.div>

          {/* Proses Pengolahan (Step by step) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16 max-w-7xl mx-auto relative"
          >
            <div className="text-center mb-16 relative z-10">
              <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-4 inline-block pb-2">
                Proses Pengolahan Es
              </motion.h3>
              <motion.p variants={fadeIn} className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                Dari sumber mata air hingga sampai ke gelas Anda. Kami menerapkan standar tertinggi pada setiap tetesnya.
              </motion.p>
            </div>

            {/* ── SMALL (<md): single column + vertical track ── */}
            <div className="md:hidden relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1.5 bg-slate-800 rounded-full -z-10 overflow-hidden">
                <motion.div variants={trackVVariant}
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500/20 via-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
              </div>
              <div className="grid grid-cols-1 gap-8 relative z-10">
                {processSteps.map((step, i) => {
                  const Icon = stepIcons[i];
                  return (
                    <motion.div key={step.title} variants={fadeIn} className="flex flex-col items-center text-center relative group">
                      <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-lg dark:shadow-2xl group-hover:scale-110 group-hover:border-cyan-500 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-all duration-500 relative z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                        <Icon className="w-10 h-10 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                      </div>
                      <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl w-full max-w-[240px] group-hover:border-slate-300 dark:group-hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors duration-300">
                        <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{step.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── MEDIUM (md–lg): Row 1 (3 items) + Row 2 (2 items), each with own track ── */}
            <div className="hidden md:flex lg:hidden flex-col gap-8">
              {/* Row 1: steps 0,1,2 */}
              <div className="relative">
                <div className="absolute top-12 left-[16%] right-[16%] h-1.5 bg-slate-800 rounded-full -z-10 overflow-hidden">
                  <motion.div variants={trackHVariant}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                </div>
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  {processSteps.slice(0, 3).map((step, i) => {
                    const Icon = stepIcons[i];
                    return (
                      <motion.div key={step.title} variants={fadeIn} className="flex flex-col items-center text-center relative group">
                        <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-lg dark:shadow-2xl group-hover:scale-110 group-hover:border-cyan-500 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-all duration-500 relative z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                          <Icon className="w-10 h-10 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                        </div>
                        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl w-full max-w-[240px] group-hover:border-slate-300 dark:group-hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors duration-300">
                          <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{step.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {/* Row 2: steps 3,4 */}
              <div className="relative">
                <div className="absolute top-12 left-[16%] right-[50%] h-1.5 bg-slate-800 rounded-full -z-10 overflow-hidden">
                  <motion.div variants={trackHVariant}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                </div>
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  {processSteps.slice(3).map((step, i) => {
                    const Icon = stepIcons[i + 3];
                    return (
                      <motion.div key={step.title} variants={fadeIn} className="flex flex-col items-center text-center relative group">
                        <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-lg dark:shadow-2xl group-hover:scale-110 group-hover:border-cyan-500 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-all duration-500 relative z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                          <Icon className="w-10 h-10 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                        </div>
                        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl w-full max-w-[240px] group-hover:border-slate-300 dark:group-hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors duration-300">
                          <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{step.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── LARGE (lg+): single row of 5 + full-width horizontal track ── */}
            <div className="hidden lg:block relative">
              <div className="absolute top-12 left-[10%] right-[10%] h-1.5 bg-slate-800 rounded-full -z-10 overflow-hidden">
                <motion.div variants={trackHVariant}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
              </div>
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {processSteps.map((step, i) => {
                  const Icon = stepIcons[i];
                  return (
                    <motion.div key={step.title} variants={fadeIn} className="flex flex-col items-center text-center relative group">
                      <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-lg dark:shadow-2xl group-hover:scale-110 group-hover:border-cyan-500 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-all duration-500 relative z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                        <Icon className="w-10 h-10 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                      </div>
                      <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl w-full max-w-[240px] group-hover:border-slate-300 dark:group-hover:border-slate-700/80 shadow-sm dark:shadow-none transition-colors duration-300">
                        <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{step.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hasil Uji Lab Section */}
      <section id="lab-test" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6"
            >
              Teruji Klinis & Bersertifikat
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg"
            >
              Kualitas dan keamanan produk Pools Ice dibuktikan secara resmi melalui uji laboratorium yang ketat.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer"
              onClick={() => setSelectedImage("/tes1.jpeg")}
            >
              <div className="aspect-[3/4] relative flex items-center justify-center p-4">
                <Image src="/tes1.jpeg" alt="Hasil Uji Lab 1" fill className="object-contain p-2 md:p-6 group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer"
              onClick={() => setSelectedImage("/tes2.jpeg")}
            >
              <div className="aspect-[3/4] relative flex items-center justify-center p-4">
                <Image src="/tes2.jpeg" alt="Hasil Uji Lab 2" fill className="object-contain p-2 md:p-6 group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section id="products" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400 mb-6"
            >
              Produk Kami
            </motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4"
            >
              Pilihan Es Premium
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg"
            >
              Tersedia dalam berbagai ukuran untuk memenuhi segala kebutuhan bisnis Anda.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          >
            {/* Es Kristal */}
            <motion.div variants={fadeIn} className="h-full">
              <div className="h-full flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 group">
                <div className="h-72 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                  <Image src="/logo-clear.png" alt="Es Kristal Pools Ice" fill className="object-contain p-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-700 dark:brightness-0 dark:invert" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Es Kristal</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 text-lg leading-relaxed">
                    Bentuknya yang padat dan bening membuat minuman terlihat lebih menarik. Sangat cocok untuk kopi susu, mocktail, dan berbagai minuman dingin di cafe/resto.
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Varian Ukuran Tersedia:</h4>
                    <div className="flex flex-wrap gap-3">
                      {["5 kg", "10 kg", "20 kg"].map(size => (
                        <span key={size} className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:border-cyan-500/30 transition-colors">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20saya%20ingin%20order%20Es%20Kristal"
                    target="_blank"
                    className="flex items-center justify-center w-full h-14 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    Order via WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Es Serut */}
            <motion.div variants={fadeIn} className="h-full">
              <div className="h-full flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 group">
                <div className="h-72 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-600/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                  <Image src="/logo-clear.png" alt="Es Serut Pools Ice" fill className="object-contain p-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-700 dark:brightness-0 dark:invert" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Es Serut</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 text-lg leading-relaxed">
                    Teksturnya yang halus sangat ideal untuk es campur, es teler, pendingin seafood, dan aplikasi kuliner lainnya yang membutuhkan pendinginan cepat.
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Varian Ukuran Tersedia:</h4>
                    <div className="flex flex-wrap gap-3">
                      {["5 kg", "10 kg", "20 kg"].map(size => (
                        <span key={size} className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:border-teal-500/30 transition-colors">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20saya%20ingin%20order%20Es%20Serut"
                    target="_blank"
                    className="flex items-center justify-center w-full h-14 rounded-full font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    Order via WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Area Pengantaran Section */}
      <section id="delivery" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400 mb-6">
                Logistik & Distribusi
              </div> */}
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Cakupan Area Pengantaran
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                Kami memastikan es sampai di tempat Anda tepat waktu. Saat ini Pools Ice melayani pengantaran reguler untuk operasional F&B di wilayah Bali, meliputi:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                {["Denpasar", "Canggu", "Seminyak", "Kerobokan", "Tanah Lot", "Jimbaran", "Uluwatu"].map((area, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={area}
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl shadow-sm border transition-all cursor-default ${hoveredArea === area ? 'bg-cyan-50 dark:bg-cyan-500/20 border-cyan-400 scale-105' : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <MapPin className={`h-5 w-5 transition-transform ${hoveredArea === area ? 'text-cyan-600 dark:text-cyan-400 scale-110' : 'text-cyan-500 group-hover:scale-110'}`} />
                    <span className={`font-medium transition-colors ${hoveredArea === area ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>{area}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="https://wa.me/6287816777741?text=Halo%20Pools%20Ice,%20apakah%20bisa%20mengantar%20es%20ke%20lokasi%20saya?"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-8 h-14 text-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all duration-300"
              >
                Cek Rute Pengantaran Usaha Anda
                <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl transform scale-95" />
              <div className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-2 shadow-xl dark:shadow-2xl">
                <DeliveryMap hoveredArea={hoveredArea} setHoveredArea={setHoveredArea} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6"
            >
              Kepercayaan Pelanggan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Rating <span className="text-amber-500 dark:text-yellow-400 font-bold">5 Bintang</span> di Google Maps dari pelanggan setia Pools Ice.
            </motion.p>
          </div>

          <div className="flex justify-center mt-12">
            <div className="w-full max-w-[100vw] sm:max-w-6xl -mx-4 sm:mx-0">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section>
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[90vh] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-default flex items-center justify-center bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Using standard img allows the container to shrink-wrap perfectly to the image dimensions */}
              <img 
                src={selectedImage} 
                alt="Detail Hasil Uji Lab" 
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
