"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Activity } from "lucide-react";

export default function WatchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // A smooth spring on the scroll progress for a high-end feel
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100, mass: 0.5 });

  // Parallax Explosion distances
  const layer1Y = useTransform(smoothProgress, [0, 0.15, 0.5, 0.85, 1], [0, -180, -250, -180, 0]);
  const layer3Y = useTransform(smoothProgress, [0, 0.15, 0.5, 0.85, 1], [0, 180, 250, 180, 0]);

  // Rotations for 360 effect
  const rotateX = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [50, 20, 160, 50]);
  const rotateZ = useTransform(smoothProgress, [0, 0.5, 1], [-20, 0, 340]);

  // Spec Cards Fades
  const card1Opacity = useTransform(smoothProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const card2Opacity = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const card3Opacity = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);

  const [bpm, setBpm] = useState(72);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(Math.floor(Math.random() * (78 - 68 + 1)) + 68);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-transparent">
       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
         
         {/* Background Pulse */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] rounded-full bg-color-pulse-red/10 blur-[120px] pulse-glow pointer-events-none opacity-50 mix-blend-screen" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-midnight-blue)_0%,_var(--color-true-black)_80%)] -z-10" />

         <motion.div 
           style={{
             rotateX,
             rotateZ,
             transformStyle: "preserve-3d"
           }}
           className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center"
         >
           {/* INTERNALS */}
           <motion.img 
             src="/aura-internals.png"
             alt="Internals"
             className="absolute w-full h-full object-contain brightness-125"
             style={{ 
               y: layer3Y, 
               translateZ: layer3Y, // sync Z with Y for depth
               mixBlendMode: 'screen',
               filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.8))"
             }}
           />

           {/* CASING */}
           <motion.img 
             src="/aura-casing.png"
             alt="Casing"
             className="absolute w-full h-full object-contain brightness-110"
             style={{
                translateZ: 0,
                mixBlendMode: 'screen',
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.6))"
             }}
           />

           {/* GLASS */}
           <motion.img 
             src="/aura-glass.png"
             alt="Glass"
             className="absolute w-full h-full object-contain brightness-150"
             style={{ 
               y: layer1Y, 
               translateZ: layer1Y, // pushing towards camera negatively with Y
               mixBlendMode: 'screen',
             }}
           />
         </motion.div>

         {/* SPEC CARDS */}
         <motion.div style={{ opacity: card1Opacity }} className="absolute top-[15%] right-[5%] md:right-[15%] p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white max-w-[280px]">
           <h3 className="font-bold text-xl text-gradient mb-2 tracking-wide font-sans">Sapphire Crystal</h3>
           <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">Diamond-engineered scratch resistance with absolute optical clarity. The invisible shield.</p>
         </motion.div>

         <motion.div style={{ opacity: card2Opacity }} className="absolute content-center left-[5%] md:left-[10%] top-[45%] p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white max-w-[280px]">
           <h3 className="font-bold text-xl text-gradient mb-2 tracking-wide font-sans">Titanium Core</h3>
           <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">Aerospace-grade titanium enclosure. Meticulously crafted for maximum strength and extreme lightness.</p>
         </motion.div>

         <motion.div style={{ opacity: card3Opacity }} className="absolute bottom-[15%] right-[5%] md:right-[20%] p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white max-w-[300px]">
           <h3 className="font-bold text-xl text-gradient flex items-center gap-3 mb-2 font-sans">
             <Activity className="w-5 h-5 text-color-pulse-red animate-pulse" />
             Neural Sensor
           </h3>
           <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">The most advanced biometric sensor ever placed in a wearable, tracking micro-variations in blood flow.</p>
         </motion.div>
         
         <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 flex flex-col items-center">
           <span className="text-white/30 text-sm font-bold tracking-widest uppercase mb-1">Live BPM</span>
           <span className="text-4xl md:text-6xl font-black font-mono tracking-tighter text-color-pulse-red/80 pulse-glow">
             {bpm}
           </span>
         </div>

       </div>
    </div>
  );
}
