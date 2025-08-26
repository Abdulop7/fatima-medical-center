"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import {
  PhoneOutgoing,
  MailPlus,
  MapPinCheckInside,
} from "lucide-react";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // ✅ get current route
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    clearTimeout(closeTimer);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setActiveDropdown(null), 150);
    setCloseTimer(timer);
  };

  const toggleMobileDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const linkClass = (href) => {
    const isActive = pathname === href;
    return `
      transition-all relative after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full
      ${isActive ? "text-blue-600 font-semibold after:w-full" : scrolled ? "text-gray-800 hover:text-blue-700" : "text-gray-900 hover:text-blue-600"}
    `;
  };

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0 }}
            className="hidden lg:flex h-[15vh] items-center justify-around px-10 bg-white text-gray-800 shadow-sm border-b border-gray-100"
          >
            {/* ✅ Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Hospital Automanger"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* ✅ Info Section */}
            <div className="flex justify-center items-center gap-10 xl:text-base text-sm">
              {/* Emergency Number */}
              <div className="flex items-center gap-4">
                <div className=" flex items-center justify-center p-3 rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <PhoneOutgoing />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-600">
                    Emergency Number
                  </h2>
                  <span className="font-semibold text-blue-700">
                    061-2113291
                  </span>
                </div>
              </div>

              {/* Support Email */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <MailPlus />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-600">
                    Support Email
                  </h2>
                  <span className="font-semibold text-blue-700">
                    demo.faima@gmail.com
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                  <MapPinCheckInside />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-600">
                    Visit Us On
                  </h2>
                  <span className="font-semibold text-blue-700">
                    Khanewal Rd, Multan, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed md:p-6 p-4 w-full z-50 duration-500 transition-all ${scrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* ✅ Desktop Menu (hidden on mobile) */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-base">
            {/* ✅ Home */}
            <li>
              <Link
                href="/"
                className={`transition-all relative after:block after:h-[2px] after:w-0 after:bg-blue-600 ${linkClass("/")} after:transition-all hover:after:w-full ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                Home
              </Link>
            </li>

            {/* ✅ Departments Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("departments")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center ${linkClass("/departments")} transition-all ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                Departments <FiChevronDown className="ml-1" />
              </button>
              {activeDropdown === "departments" && (
                <div className="absolute left-0 top-full bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden animate-fadeIn border border-gray-100">
                  <div className="py-2">
                    <a
                      href="#cardiology"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Cardiology
                    </a>
                    <a
                      href="#neurology"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Neurology
                    </a>
                    <a
                      href="#orthopedics"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Orthopedics
                    </a>
                    <a
                      href="#pediatrics"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Pediatrics
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* ✅ Doctors */}
            <li>
              <Link
                href="/doctors"
                className={`transition-all relative ${linkClass("/doctors")} after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                Doctors
              </Link>
            </li>

            {/* ✅ Services Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center ${linkClass("/services")} transition-all ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                Services <FiChevronDown className="ml-1" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-0 top-full bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden animate-fadeIn border border-gray-100">
                  <div className="py-2">
                    <a
                      href="#emergency"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Emergency Care
                    </a>
                    <a
                      href="#surgery"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Surgery
                    </a>
                    <a
                      href="#diagnostics"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Diagnostics
                    </a>
                    <a
                      href="#rehab"
                      className="block px-5 py-2 hover:bg-blue-600 hover:text-white transition"
                    >
                      Rehabilitation
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* ✅ About Us */}
            <li>
              <Link
                href="/about"
                className={`transition-all relative ${linkClass("/about")} after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                About Us
              </Link>
            </li>

            {/* ✅ Contact */}
            <li>
              <Link
                href="/contact"
                className={`transition-all relative ${linkClass("/contact")} after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full ${scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ✅ Appointment Button (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/appointment"
              className="px-6 py-3 
               text-blue-600 rounded-2xl font-semibold 
               shadow-lg  transition-all duration-300 
               hover:scale-105 ring-2 hover:bg-blue-600 hover:text-white"
            >
              Emergency
            </Link>
          </div>


          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full" >
            <div>

              <Image src={logo} height={100} width={120} alt="Logo" />
            </div>

            {menuOpen ? (
              <FiX
                size={28}
                className="cursor-pointer text-blue-800"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                size={28}
                className="cursor-pointer text-blue-800"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* ✅ Mobile Fullscreen Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white/70 backdrop-blur-lg z-50 flex flex-col">
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image src={logo} height={100} width={120} alt="Logo" />
              <FiX
                size={28}
                className="cursor-pointer text-blue-800"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Menu Links */}
            <div className="p-6 flex flex-col gap-2 space-y-4 text-blue-800 font-medium overflow-y-auto">
              <Link className="" href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile Dropdown Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleMobileDropdown("services")}
                >
                  Services
                  <FiChevronDown
                    className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "services"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 flex flex-col space-y-2 mt-2 text-black">
                    <a href="#emergency">Emergency Care</a>
                    <a href="#surgery">Surgery</a>
                    <a href="#diagnostics">Diagnostics</a>
                    <a href="#rehab">Rehabilitation</a>
                  </div>
                </div>
              </div>

              {/* Mobile Dropdown Departments */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleMobileDropdown("departments")}
                >
                  Departments
                  <FiChevronDown
                    className={`transition-transform duration-300 ${activeDropdown === "departments" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "departments"
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 flex flex-col space-y-2 mt-2 text-black">
                    <a href="#cardiology">Cardiology</a>
                    <a href="#neurology">Neurology</a>
                    <a href="#orthopedics">Orthopedics</a>
                    <a href="#pediatrics">Pediatrics</a>
                  </div>
                </div>
              </div>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/doctors" onClick={() => setMenuOpen(false)}>
                Doctors
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              <div className="self-center items-center gap-3">
                <Link
                  href="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
               text-white rounded-2xl font-semibold 
               shadow-lg hover:shadow-xl transition-all duration-300 
               hover:scale-105 hover:from-blue-600 hover:to-indigo-700"
                >
                  Emergency
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
