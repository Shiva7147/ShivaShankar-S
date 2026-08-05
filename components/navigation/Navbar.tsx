"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Command, Search } from "lucide-react";
import { profileData } from "@/data/profile";
import { CommandPalette } from "@/components/navigation/CommandPalette";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const desktopNavLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Notes", href: "/notes" },
    { name: "Contact", href: "/about#contact" }
  ];

  // STRICT USER REQUIREMENT FOR MOBILE NAV: ONLY Home, About, Projects.
  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[64px] transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F3EC]/95 backdrop-blur-md border-b border-[rgba(10,39,71,0.12)] shadow-xs"
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
            {desktopNavLinks.map((link) => {
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

          {/* Right Action Buttons — Command Palette Trigger & Resume */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cmd + K Trigger Button */}
            <button
              onClick={() => setCmdPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] text-xs font-mono text-[#5A738E] hover:text-[#0A2747] hover:border-[#B98945] transition-all shadow-2xs group"
              title="Open Command Palette (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#B98945]" />
              <span className="font-sans font-medium">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#F6F3EC] text-[10px] font-bold text-[#0A2747] border border-[rgba(10,39,71,0.1)] group-hover:border-[#B98945]/40">
                ⌘K
              </kbd>
            </button>

            <a
              href={profileData.resumePath}
              download="ShivaShankar_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#B98945]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Buttons (Cmd+K + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCmdPaletteOpen(true)}
              className="p-2 text-[#0A2747] hover:text-[#B98945] rounded-md transition-colors"
              title="Search / Command Palette"
            >
              <Search className="w-5 h-5 text-[#B98945]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0A2747] hover:text-[#B98945] focus:outline-none rounded-md transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0A2747]" /> : <Menu className="w-6 h-6 text-[#0A2747]" />}
            </button>
          </div>
        </div>

        {/* Dedicated Mobile Navigation Drawer (ONLY: Home, About, Projects) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[64px] bg-[#0A2747] z-40 flex flex-col justify-between p-8 text-white animate-in fade-in duration-200">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-[10px] text-[#B98945] uppercase tracking-widest font-semibold">
                  Navigation
                </p>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCmdPaletteOpen(true);
                  }}
                  className="px-3 py-1 rounded bg-[#12375F] border border-[rgba(255,255,255,0.12)] text-xs font-mono text-[#B98945] flex items-center gap-1.5"
                >
                  <Command className="w-3 h-3" />
                  <span>Cmd + K</span>
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {mobileNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-3xl font-bold transition-all flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.08)] ${
                        isActive ? "text-[#B98945] pl-2" : "text-[#FFFEFA] hover:text-[#B98945]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#B98945]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8B949E]">
                <span>SHIVA SHANKAR S</span>
                <span>AI ENGINEER</span>
              </div>
              <p className="text-xs font-mono text-[#B98945]">
                Bengaluru, India → Spain
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal Overlay */}
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
    </>
  );
}
