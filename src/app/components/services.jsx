"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  TestTube2,
  Ambulance,
  Syringe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { id: "cardiology", title: "Cardiology", desc: "Advanced heart diagnostics, interventional procedures & compassionate care.", icon: <HeartPulse className="w-7 h-7" /> },
  { id: "internal-medicine", title: "Internal Medicine", desc: "Holistic, evidence-based care for long-term wellness and prevention.", icon: <Stethoscope className="w-7 h-7" /> },
  { id: "emergency", title: "Emergency Care", desc: "Round-the-clock response, stabilization, and critical interventions.", icon: <Ambulance className="w-7 h-7" /> },
  { id: "neurology", title: "Neurology", desc: "Comprehensive stroke, epilepsy & neurodiagnostics programs.", icon: <Brain className="w-7 h-7" /> },
  { id: "orthopedics", title: "Orthopedics", desc: "Sports injuries, fractures & advanced joint replacement surgeries.", icon: <Bone className="w-7 h-7" /> },
  { id: "pediatrics", title: "Pediatrics", desc: "Complete child-centered healthcare from newborns to adolescents.", icon: <Baby className="w-7 h-7" /> },
  { id: "diagnostics", title: "Diagnostics", desc: "Imaging, lab testing & rapid reporting powered by technology.", icon: <TestTube2 className="w-7 h-7" /> },
  { id: "critical-care", title: "Critical Care", desc: "ICU monitoring, life support & multi-disciplinary expertise.", icon: <Activity className="w-7 h-7" /> },
  { id: "anesthesia", title: "Anesthesia", desc: "Personalized anesthesia & pain management for safe operations.", icon: <Syringe className="w-7 h-7" /> },
];

export default function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="w-full overflow-x-hidden relative py-20">
      {/* Gradient background (subtle blue theme) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-blue-50" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Our Departments & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed"
          >
            Trusted care backed by expertise, compassion, and innovation — designed for your health and well-being.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14 flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            disabled={prevDisabled}
            aria-label="Previous services"
            className={`hidden sm:flex items-center justify-center h-11 w-11 rounded-full backdrop-blur bg-white/90 ring-1 ring-blue-100 shadow-md transition enabled:hover:scale-105 ${
              prevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-6">
              {SERVICES.map((s, idx) => (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                  className="flex-[0_0_auto] min-w-[280px] sm:min-w-[320px] max-w-sm"
                >
                  <div className="group h-full rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                    {/* Top Accent Bar */}
                    <div className="h-1 rounded-t-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500" />

                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center justify-center rounded-xl p-3 bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                          {s.icon}
                        </div>
                        <motion.div
                          className="h-2 w-10 rounded-full bg-blue-100"
                          whileHover={{ width: 44 }}
                          transition={{ type: "spring", stiffness: 200, damping: 14 }}
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {s.desc}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <Link
                          href={`#${s.id}`}
                          className="text-sm font-semibold text-blue-600 hover:text-indigo-600 transition-colors"
                        >
                          Learn more →
                        </Link>
                        <div className="text-xs font-medium text-gray-400">
                          #{String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            disabled={nextDisabled}
            aria-label="Next services"
            className={`hidden sm:flex items-center justify-center h-11 w-11 rounded-full backdrop-blur bg-white/90 ring-1 ring-blue-100 shadow-md transition enabled:hover:scale-105 ${
              nextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>
        </div>

        {/* View all */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-blue-600 hover:text-indigo-600 font-semibold text-lg"
          >
            View all services
            <span className="h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-16" />
          </Link>
        </div>
      </div>

      {/* Floating blue glow accents */}
      <div className="pointer-events-none absolute -z-10 -top-20 -right-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-0 -left-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
    </section>
  );
}
