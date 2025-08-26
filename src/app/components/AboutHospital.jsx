"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, ShieldCheck, HeartPulse } from "lucide-react"

export default function AboutHospital() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* ✅ Abstract glowing shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ Left Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative overflow-hidden shadow-2xl rounded-3xl border border-white/10">
            <Image
              src="/doctor-patient.jpg"
              alt="Doctor with patient"
              width={520}
              height={520}
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ✅ Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left bg-slate-800/60 backdrop-blur-xl border border-slate-700 shadow-xl p-10 rounded-3xl relative z-10"
        >
          <p className="text-cyan-400 font-medium mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            We Provide{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Finest Patient Care
            </span>{" "}
            <br /> & World-Class Amenities
          </h2>
          <p className="mt-5 text-slate-300 text-base md:text-lg max-w-xl">
            Discover a world of healthcare where innovation meets compassion. At{" "}
            <span className="font-semibold text-cyan-400">Fatima Medical Center</span>, 
            your well-being is our mission, combining expertise with cutting-edge technology.
          </p>

          {/* ✅ Feature Points */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Comprehensive Care",
              "Patient-Centered Approach",
              "Cutting-Edge Technology",
              "Welcoming Environment",
              "Specialty Medicine",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 bg-slate-700/60 hover:bg-slate-600/60 transition rounded-xl px-4 py-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-slate-200 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ Trust & Emergency Info */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 bg-slate-700/70 backdrop-blur-md border border-slate-600 rounded-2xl shadow-sm">
              <ShieldCheck className="w-12 h-12 text-blue-400" />
              <div>
                <h4 className="text-lg font-semibold text-white">Professional & Trustworthy</h4>
                <p className="text-slate-300 text-sm">Our medical experts follow the highest global standards of care.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-700/70 backdrop-blur-md border border-slate-600 rounded-2xl shadow-sm">
              <HeartPulse className="w-12 h-12 text-cyan-400" />
              <div>
                <h4 className="text-lg font-semibold text-white">Compassionate Healing</h4>
                <p className="text-slate-300 text-sm">A reassuring presence and personalized care at every step.</p>
              </div>
            </div>
          </div>

          {/* ✅ CTA + Emergency */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/appointment"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Explore More →
            </a>

            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-sm">Emergency Number</p>
              <p className="text-xl font-bold text-cyan-400">+92 (061) 6224433</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
