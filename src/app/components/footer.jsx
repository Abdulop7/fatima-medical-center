"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  MapPin,
  HeartPulse,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Floating Glow Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-blue-400/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <img
                src="/logo.png"
                alt="Hospital Automanger"
                className="h-30 w-auto object-contain brightness-0 invert"
              />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing world-class healthcare with compassion, innovation, and
            trust — for your family’s well-being.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/doctors" className="hover:text-blue-400 transition">
                Find a Doctor
              </a>
            </li>
            <li>
              <a href="/appointment" className="hover:text-blue-400 transition">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-lg font-semibold text-white mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <PhoneCall size={18} className="text-blue-400" />
              +92 300 1234567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              support@meditrust.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-400" />
              Lahore, Pakistan
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="text-lg font-semibold text-white mb-5">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for health tips & updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Fatima Medical Center. All Rights
          Reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-blue-400">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
