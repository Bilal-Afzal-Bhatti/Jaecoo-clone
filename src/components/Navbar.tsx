"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Layers } from "lucide-react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BookIcon from "@mui/icons-material/Book";
import ModalModel from "./modal_model";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        modalRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Models" },
    { name: "About Us" },
    { name: "News" },
    { name: "Services" },
    { name: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 flex-end left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/5 backdrop-blur-xl shadow-lg" : "bg-white/0 backdrop-blur-lg"
      }`}
    >
      <div className="flex h-16 sm:h-18 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-center lg:justify-start md:ml-34 md:mr-20">
          <Image
            src="/jaecoo_logo.jpg"
            alt="Jaecoo Logo"
            width={520}
            height={500}
            priority
            className="object-contain w-40 sm:w-32 md:w-86 lg:w-68"
          />
        </div>

        {/* Desktop Menu */}
     <div className="hidden lg:flex items-center flex-wrap gap-66 ml-auto">
          <ul className="flex gap-8 text-sm text-white  relative">
            {navItems.map((item, i) => (
              <li key={i} className="relative">
                {item.name === "Models" ? (
                  <>
                    <button
                      ref={buttonRef}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className="flex items-center gap-2 hover:text-blue-500 transition"
                    >
                      <Layers size={18} />
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown modal */}
                    {dropdownOpen && (
                      <div
                        ref={modalRef}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg"
                      >
                        <ModalModel />
                      </div>
                    )}
                  </>
                ) : (
                  <span className="cursor-pointer hover:text-blue-500">{item.name}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Right nav items */}
      <ul className="flex gap-6 items-center text-sm ">
            <li className="flex  gap-2 px-4 py-2 rounded-lg text-white hover:text-blue-200 transition cursor-pointer">
              <FmdGoodOutlinedIcon fontSize="small" />
              <span>Find a Dealer</span>
            </li>
            <li className="flex  gap-2 px-2 py-2 rounded-lg text-white hover:text-blue-200 transition cursor-pointer">
              <BookIcon fontSize="small" />
              <span>Book Now</span>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X color="#1f2937" /> : <Menu color="white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white backdrop-blur-lg px-6 py-6 space-y-6 shadow-xl">
          <ul className="space-y-4 font-semibold text-gray-800">
            {navItems.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <button className="border py-2 rounded-lg flex items-center justify-center gap-2">
              <FmdGoodOutlinedIcon fontSize="small" /> Find a Dealer
            </button>
            <button className="border py-2 rounded-lg flex items-center justify-center gap-2">
              <BookIcon fontSize="small" /> Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
