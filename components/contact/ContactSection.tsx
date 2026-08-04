"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Mail, Linkedin, Github, FileText, MapPin } from "lucide-react";
import { ContactSvg } from "@/components/svg/ContactSvg";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FFFEFA] border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="eyebrow inline-flex">CONTACT</div>

          {/* Headline */}
          <h2 className="heading-h2 text-[#0A2747]">
            Let’s build AI systems that create real value.
          </h2>

          {/* Supporting Copy */}
          <p className="text-lead text-[#12375F] max-w-2xl mx-auto">
            I am open to conversations about AI Engineering, applied AI products, LLM applications, intelligent automation, remote collaboration, and opportunities in Spain.
          </p>

          {/* Location & Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] text-xs font-mono text-[#0A2747]">
            <MapPin className="w-3.5 h-3.5 text-[#B98945]" />
            <span>Bengaluru, India · Open to remote work and relocation to Spain</span>
          </div>

          {/* Cross Border Collaboration SVG */}
          <ContactSvg />

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="btn-primary text-base py-3 px-6"
            >
              <Mail className="w-4 h-4" />
              <span>Email Shiva</span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base py-3 px-6"
            >
              <Linkedin className="w-4 h-4 text-[#12375F]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base py-3 px-6"
            >
              <Github className="w-4 h-4 text-[#12375F]" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base py-3 px-6"
            >
              <FileText className="w-4 h-4 text-[#B98945]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
