"use client"

import Image from "next/image"
import { Calendar, PhoneCall, ShieldCheck, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-x-hidden w-full pb-12 pt-35 md:pt-30 lg:pt-35">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-stretch gap-12 w-full relative z-10">
        
        {/* ✅ Right Image (On top for mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center md:justify-end h-full order-first md:order-last"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:h-full aspect-[2/3] rounded-3xl  drop-shadow-2xl mx-auto">
            <Image
              src="/hospital-hero.jpg"
              alt="Hospital surgery"
              fill
              className="rounded-2xl object-cover rounded-br-[100px] rounded-tl-[100px]"
              priority
            />

            {/* Glassmorphism Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute top-4 left-4 sm:-top-6 sm:-left-20 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-lg border border-white/30 
                         bg-white/40 backdrop-blur-md"
            >
              <p className="text-lg sm:text-xl font-bold text-blue-700">10k+</p>
              <p className="text-xs sm:text-sm text-gray-800">Cured Patients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute top-20 right-4 sm:top-8 sm:-right-20 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-lg border border-white/30 
                         bg-white/40 backdrop-blur-md"
            >
              <p className="text-lg sm:text-xl font-bold text-blue-700">40+</p>
              <p className="text-xs sm:text-sm text-gray-800">Licensed Doctors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:-left-20 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-lg border border-white/30 
                         bg-white/40 backdrop-blur-md"
            >
              <p className="text-lg sm:text-xl font-bold text-blue-700">7+</p>
              <p className="text-xs sm:text-sm text-gray-800">Active Locations</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ✅ Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
            Excellence in Healthcare
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Pakistan’s{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Trusted Hospital
            </span>
            <br />
            for{" "}
            <span className="underline decoration-blue-500">
              Health Treatments
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            World-class doctors, advanced medical technology, and compassionate care — all under one roof for your family’s well-being.
          </p>

          {/* ✅ CTAs */}
          <div className="mt-6 sm:mt-8 flex justify-center flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="/appointment"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 sm:px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg w-full sm:w-auto justify-center"
            >
              <Calendar size={20} /> Make Appointment
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 px-6 sm:px-7 py-3 border-2 border-blue-600 text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition w-full sm:w-auto justify-center"
            >
              <PhoneCall size={20} /> Emergency: 0300 1234567
            </a>
          </div>

          {/* ✅ Trust Badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="text-blue-600" size={18}/> ISO Certified</div>
            <div className="flex items-center gap-2"><Award className="text-blue-600" size={18}/> Nationally Awarded</div>
            <div className="flex items-center gap-2"><Users className="text-blue-600" size={18}/> Patient-Centered Care</div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Futuristic Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-50 via-white to-white"></div>
      <div className="absolute -top-20 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
    </section>
  )
}
