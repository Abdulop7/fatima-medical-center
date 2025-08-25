"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    text: "The care and professionalism I received were truly world-class. I felt valued and cared for every step of the way.",
    image: "/people/1.png",
  },
  {
    id: 2,
    name: "Ali Khan",
    role: "Patient",
    text: "Booking my appointment was quick and hassle-free. The doctors are knowledgeable and very friendly.",
    image: "/people/2.png",
  },
  {
    id: 3,
    name: "Maria Gomez",
    role: "Patient",
    text: "The staff made me feel comfortable and ensured I understood every detail of my treatment plan.",
    image: "/people/3.png",
  },
  {
    id: 4,
    name: "Dr. James Lee",
    role: "Neurologist",
    text: "The facilities are modern, and the team goes above and beyond to ensure patient satisfaction.",
    image: "/people/4.png",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
          Patient Voices
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Patients Say
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Real experiences from patients and healthcare specialists who trusted us.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx) => {
              const isActive = idx === selectedIndex;

              return (
                <motion.div
                  key={t.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_65%] px-6"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.9,
                    y: isActive ? 0 : 30,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`relative rounded-3xl shadow-xl p-10 sm:p-12 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-white to-blue-50 border border-blue-200"
                        : "bg-white/70 backdrop-blur-md border border-gray-200"
                    }`}
                  >
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/20" />
                    <p className="text-gray-800 mb-8 italic text-xl sm:text-2xl leading-relaxed font-light tracking-wide">
                      “{t.text}”
                    </p>
                    <div className="flex items-center gap-5">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* ✅ Matching gradient + glow accents */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-50 via-white to-white"></div>
      <div className="absolute -top-20 -right-28 w-80 sm:w-96 h-80 sm:h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-28 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
