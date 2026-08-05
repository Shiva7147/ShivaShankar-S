"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  FileText,
  Github,
  Linkedin,
  Mail,
  Check,
  ArrowRight,
  Sparkles,
  Home,
  User,
  FolderGit2,
  BookOpen
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery("");
          setSelectedIndex(0);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const items = [
    // Pages
    { id: "page-home", title: "Home", category: "Pages", href: "/", icon: Home, subtitle: "Landing page & overview" },
    { id: "page-projects", title: "Projects", category: "Pages", href: "/projects", icon: FolderGit2, subtitle: "All 5 production AI systems" },
    { id: "page-about", title: "About", category: "Pages", href: "/about", icon: User, subtitle: "Background, IEEE research & leadership" },
    { id: "page-notes", title: "Notes", category: "Pages", href: "/notes", icon: BookOpen, subtitle: "Technical writings & notes" },

    // Case Studies
    ...projectsData.map((p) => ({
      id: `project-${p.slug}`,
      title: `${p.title} Case Study`,
      category: "Case Studies",
      href: `/projects/${p.slug}`,
      icon: Sparkles,
      subtitle: p.subtitle,
    })),

    // Quick Actions
    {
      id: "action-resume",
      title: "Download Resume (PDF)",
      category: "Actions",
      action: () => {
        window.open(profileData.resumePath, "_blank");
      },
      icon: FileText,
      subtitle: "Open & download latest resume",
    },
    {
      id: "action-email",
      title: "Copy Email Address",
      category: "Actions",
      action: () => {
        navigator.clipboard.writeText(profileData.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      },
      icon: copiedEmail ? Check : Mail,
      subtitle: copiedEmail ? "Copied s.shivashankar1304@gmail.com!" : profileData.email,
    },
    {
      id: "action-github",
      title: "GitHub Profile",
      category: "Actions",
      action: () => {
        window.open(profileData.github, "_blank");
      },
      icon: Github,
      subtitle: "github.com/Shiva7147",
    },
    {
      id: "action-linkedin",
      title: "LinkedIn Profile",
      category: "Actions",
      action: () => {
        window.open(profileData.linkedin, "_blank");
      },
      icon: Linkedin,
      subtitle: "linkedin.com/in/shiva-shankar-s1317",
    },
  ];

  const filteredItems = items.filter((item) => {
    const searchStr = `${item.title} ${item.category} ${item.subtitle}`.toLowerCase();
    return searchStr.includes(query.toLowerCase());
  });

  const handleSelect = useCallback(
    (item: (typeof items)[0]) => {
      if (item.href) {
        router.push(item.href);
        onClose();
      } else if (item.action) {
        item.action();
        if (item.id !== "action-email") {
          onClose();
        }
      }
    },
    [router, onClose]
  );

  useEffect(() => {
    const handleNavigation = (e: KeyboardEvent) => {
      if (!isOpen || filteredItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
      }
    };
    window.addEventListener("keydown", handleNavigation);
    return () => window.removeEventListener("keydown", handleNavigation);
  }, [isOpen, filteredItems, selectedIndex, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A2747]/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0A2747] text-[#FFFEFA] border border-[rgba(255,255,255,0.16)] rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[rgba(255,255,255,0.1)] bg-[#12375F]/60">
              <Search className="w-5 h-5 text-[#B98945] mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search (e.g. AthleteIQ, About, Resume)..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-[#FFFEFA] placeholder-[#8B949E] text-base focus:outline-none font-sans"
              />
              <button
                onClick={onClose}
                className="p-1.5 text-[#8B949E] hover:text-[#FFFEFA] rounded-md transition-colors ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-[#8B949E] font-mono text-sm">
                  No matching commands or case studies found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-[#12375F] text-[#FFFEFA] border border-[#B98945]/40 pl-4"
                          : "text-[#CBD5E1] hover:bg-[#12375F]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-[#B98945] text-white"
                              : "bg-[#0A2747] text-[#B98945] border border-[rgba(255,255,255,0.1)]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="font-sans font-bold text-sm text-[#FFFEFA] flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="font-mono text-[10px] text-[#B98945] px-1.5 py-0.5 rounded bg-[#B98945]/10 border border-[#B98945]/20 font-semibold">
                              {item.category}
                            </span>
                          </div>
                          <div className="text-xs text-[#8B949E] truncate mt-0.5">{item.subtitle}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#8B949E]">
                        {isSelected && <ArrowRight className="w-4 h-4 text-[#B98945]" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="px-4 py-2.5 bg-[#0A2747] border-t border-[rgba(255,255,255,0.1)] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[#12375F] text-xs font-bold text-[#FFFEFA] border border-[rgba(255,255,255,0.15)]">
                    ↑↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[#12375F] text-xs font-bold text-[#FFFEFA] border border-[rgba(255,255,255,0.15)]">
                    ↵
                  </kbd>{" "}
                  Select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-[#12375F] text-xs font-bold text-[#FFFEFA] border border-[rgba(255,255,255,0.15)]">
                  ESC
                </kbd>{" "}
                Close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
