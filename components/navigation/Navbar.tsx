"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  FileText,
  Command,
  Search,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight
} from "lucide-react";
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
    { name: "Contact", href: "/about#contact" }
  ];

  // SINGLE-PERSON PORTFOLIO: About, Projects, Contact
  const mobileNavLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/about#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: profileData.github, icon: Github },
    { name: "LinkedIn", href: profileData.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profileData.email}`, icon: Mail },
    { name: "Resume", href: profileData.resumePath, icon: FileText, download: true }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[64px] transition-all duration-300 ${
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
              download="Shiva_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#B98945]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Buttons (Search + Menu Drawer Toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCmdPaletteOpen(true)}
              className="p-2 text-[#0A2747] hover:text-[#B98945] rounded-md transition-colors"
              title="Search / Command Palette"
            >
              <Search className="w-5 h-5 text-[#B98945]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#0A2747] hover:text-[#B98945] focus:outline-none rounded-md transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-[#0A2747]" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN SOLID DARK NAVY MOBILE NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A2747] text-[#FFFEFA] flex flex-col justify-between p-6 md:p-8 animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between h-[50px] border-b border-[rgba(255,255,255,0.1)] pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-decoration-none"
            >
              <span className="font-sans font-bold text-lg text-[#FFFEFA] tracking-tight">
                SHIVA
              </span>
              <span className="text-[#B98945] text-xs font-mono font-medium tracking-wider uppercase">
                / AI ENGINEER
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FFFEFA] hover:text-[#B98945] focus:outline-none rounded-md transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7 text-[#FFFEFA]" />
            </button>
          </div>

          {/* Navigation Links: About, Projects, Contact */}
          <div className="my-auto py-6 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-mono text-[11px] text-[#B98945] uppercase tracking-widest font-bold">
                NAVIGATION
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCmdPaletteOpen(true);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#12375F] border border-[#B98945]/30 text-xs font-mono text-[#B98945] flex items-center gap-1.5"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Search / Cmd + K</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {mobileNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sans text-3xl font-bold transition-all flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)] ${
                      isActive ? "text-[#B98945] pl-2" : "text-[#FFFEFA] hover:text-[#B98945]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B98945]" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-[#8B949E]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CTA SOCIALS & CONNECT BUTTONS */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] space-y-4">
            <p className="font-mono text-[10px] text-[#B98945] uppercase tracking-widest font-bold">
              CONNECT &amp; SOCIALS
            </p>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.download ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    download={s.download ? "Shiva_Resume.pdf" : undefined}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#12375F] border border-[rgba(255,255,255,0.12)] text-xs font-mono text-[#FFFEFA] hover:border-[#B98945] hover:text-[#B98945] transition-all"
                  >
                    <Icon className="w-4 h-4 text-[#B98945] shrink-0" />
                    <span className="font-bold truncate">{s.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#8B949E] pt-2">
              <span>SHIVA SHANKAR S</span>
              <span>Bengaluru, India → Spain</span>
            </div>
          </div>
        </div>
      )}

      {/* Command Palette Modal Overlay */}
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
    </>
  );
}
