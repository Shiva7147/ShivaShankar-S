"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Notes", href: "/notes" },
    { name: "Contact", href: "/about#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F3EC]/92 backdrop-blur-md border-b border-[rgba(10,39,71,0.12)] shadow-xs"
          : "bg-[#F6F3EC]/80 backdrop-blur-sm"
      }`}
    >
      <div className="wrap h-full flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="group flex items-center gap-2 text-decoration-none">
          <span className="font-sans font-bold text-lg text-[#0A2747] tracking-tight group-hover:text-[#B98945] transition-colors">
            SHIVA
          </span>
          <span className="text-[#5A738E] text-xs font-mono font-medium tracking-wider uppercase">
            / AI ENGINEER
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-sans font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#B98945] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B98945]"
                    : "text-[#12375F] hover:text-[#B98945] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B98945] hover:after:w-full after:transition-all after:duration-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button — Resume Download */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumePath}
            download="ShivaShankar_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs py-1.5 px-3.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#B98945]" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0A2747] hover:text-[#B98945] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-[#F6F3EC] z-40 flex flex-col p-6 overflow-y-auto border-t border-[rgba(10,39,71,0.12)]">
          <nav className="flex flex-col gap-6 my-auto text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-2xl font-bold text-[#0A2747] hover:text-[#B98945] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[rgba(10,39,71,0.12)] flex flex-col gap-3">
            <a
              href={profileData.resumePath}
              download="ShivaShankar_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 text-center justify-center"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <p className="text-center text-xs font-mono text-[#5A738E] mt-2">
              Bengaluru, India → Relocating to Spain
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
