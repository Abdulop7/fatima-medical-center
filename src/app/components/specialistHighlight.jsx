"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const doctors = [
  { id: 1, name: "Dr. Ayesha Malik", specialty: "Cardiologist", image: "/doctors/1.png" },
  { id: 2, name: "Dr. Hassan Raza", specialty: "Neurologist", image: "/doctors/1.png" },
  { id: 3, name: "Dr. Sana Iqbal", specialty: "Pediatrician", image: "/doctors/1.png" },
  { id: 4, name: "Dr. Ali Khan", specialty: "Orthopedic Surgeon", image: "/doctors/1.png" },
  { id: 5, name: "Dr. Fatima Noor", specialty: "Dermatologist", image: "/doctors/1.png" },
  { id: 6, name: "Dr. Usman Tariq", specialty: "ENT Specialist", image: "/doctors/1.png" },
];

export default function DoctorsHighlight() {
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
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white to-blue-50" />

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
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-2xl text-lg text-gray-600 leading-relaxed"
          >
            Highly qualified doctors delivering world-class healthcare with compassion and expertise.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14 flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            disabled={prevDisabled}
            aria-label="Previous doctors"
            className={`hidden sm:flex items-center justify-center h-11 w-11 rounded-full backdrop-blur bg-white/90 ring-1 ring-blue-100 shadow-md transition enabled:hover:scale-105 ${
              prevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-6">
              {doctors.map((doc, idx) => (
                <motion.article
                  key={doc.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                  className="flex-[0_0_auto] min-w-[280px] sm:min-w-[320px] max-w-sm"
                >
                  <div className="group h-full rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-md hover:shadow-2xl transition-all duration-300">
                    <div className="h-1 rounded-t-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500" />
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="relative">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover shadow-lg border-4 border-white"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100/30 to-cyan-100/30"></div>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors">
                        {doc.specialty}
                      </p>
                      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
                        Book Appointment
                      </button>
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
            aria-label="Next doctors"
            className={`hidden sm:flex items-center justify-center h-11 w-11 rounded-full backdrop-blur bg-white/90 ring-1 ring-blue-100 shadow-md transition enabled:hover:scale-105 ${
              nextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>
        </div>

        {/* View all doctors */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 text-blue-600 hover:text-indigo-600 font-semibold text-lg"
          >
            View all doctors
            <span className="h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-16" />
          </Link>
        </div>
      </div>

      {/* Floating subtle accents */}
      <div className="pointer-events-none absolute -z-10 -top-20 -right-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-0 -left-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
    </section>
  );
}
