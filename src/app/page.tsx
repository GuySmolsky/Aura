"use client";

import { motion } from "framer-motion";
import WatchSection from "@/components/WatchSection";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-color-true-black selection:bg-color-pulse-red/30">
        
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] mix-blend-overlay z-50"></div>
          
          <div className="z-10 text-center flex flex-col items-center max-w-4xl px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-color-titanium uppercase tracking-[0.4em] text-xs font-semibold mb-6"
            >
              Cupertino, California
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gradient mb-8"
            >
              AURA
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="text-2xl md:text-4xl font-light text-white/80 tracking-tight"
            >
              Time, <span className="italic text-white">Reimagined.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to Discover</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </section>

        {/* EXPLODED WATCH SEQUENCE */}
        <WatchSection />

        {/* FOOTER */}
        <footer className="h-[50vh] flex flex-col items-center justify-center border-t border-white/5 bg-color-true-black relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">AURA</h2>
          <p className="text-color-titanium/60 text-sm max-w-sm text-center">
            The most advanced biometric sensor ever placed in a wearable.
          </p>
          <div className="mt-12 text-xs text-white/20">
            © 2026 AURA Inc. All rights reserved.
          </div>
        </footer>

      </main>
    </LenisProvider>
  );
}
