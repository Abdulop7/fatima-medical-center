"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function PremiumHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl" />
      </div>

      {/* Content (Centered) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Premium Healthcare <br /> 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Designed for You
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Experience modern healthcare with expert doctors, advanced facilities, 
            and a patient-first approach — all under one trusted name.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Book Appointment
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition">
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* Right Image (Centered with floating icons) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="relative w-[320px] h-[380px] rounded-3xl overflow-hidden shadow-xl border border-blue-100">
            <Image
              src="/about/about-hero.jpg"
              alt="Premium Healthcare"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -left-8 bg-white/70 p-4 rounded-2xl backdrop-blur-md border border-blue-100 shadow-lg"
          >
            <Stethoscope className="w-8 h-8 text-blue-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 bg-white/70 p-4 rounded-2xl backdrop-blur-md border border-cyan-100 shadow-lg"
          >
            <HeartPulse className="w-8 h-8 text-cyan-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
