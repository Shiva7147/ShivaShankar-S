"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Award,
  Zap,
  Briefcase,
  Target,
  Sparkles,
  CheckCircle2,
  Flame
} from "lucide-react";

export function BeyondEngineering() {
  return (
    <section id="beyond-engineering" className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#F6F3EC]">
      <div className="wrap">
        {/* Full-width Introduction */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <div className="eyebrow block">BEYOND ENGINEERING</div>
            <h2 className="heading-h2 text-[#0A2747]">
              Leadership, competition, and building beyond the classroom.
            </h2>
            <p className="text-lead text-[#12375F] max-w-3xl leading-relaxed">
              While AI engineering is my primary focus, many of the skills I rely on today were developed long before I began building intelligent systems. Sport taught me discipline, teamwork, and resilience. Student leadership taught me responsibility and communication. Technical competitions taught me to solve unfamiliar problems under pressure. Independent client work taught me how to turn real business challenges into practical solutions.
            </p>
          </motion.div>
        </div>

        {/* 6 Editorial Content Cards Grid (Alternating Cream, White, & Dark Navy Surfaces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Sports Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -3 }}
            className="p-7 md:p-8 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] border-t-4 border-t-[#B98945] shadow-xs space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] border border-[#B98945]/30 flex items-center justify-center text-[#B98945]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#B98945]/10 text-[#B98945] rounded border border-[#B98945]/20">
                  LEADERSHIP
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-xl text-[#0A2747] mb-1">Sports Leadership</h3>
                <p className="font-mono text-xs text-[#B98945] font-semibold">Leadership through sport</p>
              </div>

              <p className="text-sm font-sans text-[#12375F] leading-relaxed">
                I currently serve as the <strong>Sports Representative for the MCA Department at St. Joseph&apos;s University</strong>. During undergraduate studies at Kristu Jayanti University, I was elected <strong>Sports Secretary</strong>, representing students and organizing major events. Earlier, I served as my <strong>School Sports Captain</strong> and captained my college football team.
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(10,39,71,0.08)] space-y-2">
              <p className="font-mono text-[10px] text-[#5A738E] font-bold uppercase tracking-wider">KEY ROLES</p>
              <ul className="space-y-1.5 text-xs text-[#0A2747]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B98945]" />
                  <span>Sports Representative, MCA – St. Joseph&apos;s University</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B98945]" />
                  <span>Former Undergraduate Sports Secretary</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B98945]" />
                  <span>Captain, Undergraduate College Football Team</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B98945]" />
                  <span>Former School Sports Captain</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Competitive Football */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            whileHover={{ y: -3 }}
            className="p-7 md:p-8 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] border-t-4 border-t-[#12375F] shadow-xs space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.14)] flex items-center justify-center text-[#12375F]">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#12375F]/10 text-[#12375F] rounded border border-[#12375F]/20">
                  COMPETITION
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-xl text-[#0A2747] mb-1">Competitive Football</h3>
                <p className="font-mono text-xs text-[#12375F] font-semibold">Competing as a team</p>
              </div>

              <p className="text-sm font-sans text-[#12375F] leading-relaxed">
                Football has been one of the biggest influences on how I approach leadership and teamwork. I represented <strong>Bangalore Yellows</strong> in the Bangalore football league and was part of the team&apos;s promotion from the <strong>C Division to the B Division</strong>. Playing in a competitive environment reinforced consistency, preparation, adaptability, and trust.
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(10,39,71,0.08)] flex items-center justify-between text-xs font-mono text-[#5A738E]">
              <span>Bangalore Football League</span>
              <span className="text-[#0A2747] font-bold">Manchester United Fan</span>
            </div>
          </motion.div>

          {/* Card 3: DARK NAVY FEATURE CARD — IEEE Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            whileHover={{ y: -3 }}
            className="md:col-span-2 p-7 md:p-8 rounded-xl bg-[#0A2747] text-[#FFFEFA] border border-[rgba(255,255,255,0.16)] border-l-4 border-l-[#B98945] shadow-md space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#12375F] border border-[#B98945]/40 flex items-center justify-center text-[#B98945]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[#FFFEFA]">IEEE Research Milestone</h3>
                  <p className="font-mono text-xs text-[#B98945] font-semibold">IEEE Industrial Electronics Society Generative AI Challenge</p>
                </div>
              </div>
              <span className="self-start sm:self-auto font-mono text-xs font-bold px-3 py-1 bg-[#B98945] text-white rounded">
                TOP 25 WORLDWIDE
              </span>
            </div>

            <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed">
              Our research paper, <strong>&ldquo;Surgical Amnesia: A Framework for Targeted Machine Unlearning and Copyright Compliance in Large Language Models,&rdquo;</strong> explored parameter-efficient machine unlearning using <strong>Llama 3.2 1B</strong> and <strong>LoRA</strong>, focusing on responsible AI, targeted knowledge removal, GDPR compliance, and the European AI Act.
            </p>

            <div className="p-4 rounded-lg bg-[#12375F] border border-[rgba(255,255,255,0.12)] text-xs text-[#CBD5E1] space-y-2">
              <div className="flex items-center gap-2 text-[#B98945] font-mono font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Global Finalist — Australia Conference Finals</span>
              </div>
              <p className="leading-relaxed">
                Selected among the Top 25 teams globally and invited to present at the conference finals in Australia. Reaching the final stage of an international IEEE challenge reinforced my commitment to trustworthy AI and machine learning reliability.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Hackathons & Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            whileHover={{ y: -3 }}
            className="p-7 md:p-8 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] border-t-4 border-t-[#B98945] shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] border border-[#B98945]/30 flex items-center justify-center text-[#B98945]">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#B98945]/10 text-[#B98945] rounded border border-[#B98945]/20">
                HACKATHONS
              </span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-xl text-[#0A2747] mb-1">Hackathons &amp; Technical Competitions</h3>
              <p className="font-mono text-xs text-[#B98945] font-semibold">Building under pressure</p>
            </div>

            <p className="text-sm font-sans text-[#12375F] leading-relaxed">
              I actively participate in hackathons and inter-collegiate technology competitions. Competing across institutions including <strong>Christ University</strong> and <strong>Kristu Jayanti University</strong> has sharpened my ability to solve practical challenges, collaborate with diverse teams, and execute under tight deadlines.
            </p>
          </motion.div>

          {/* Card 5: Campus Involvement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="p-7 md:p-8 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] border-t-4 border-t-[#12375F] shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.14)] flex items-center justify-center text-[#12375F]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#12375F]/10 text-[#12375F] rounded border border-[#12375F]/20">
                ORGANIZATION
              </span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-xl text-[#0A2747] mb-1">Campus Involvement</h3>
              <p className="font-mono text-xs text-[#12375F] font-semibold">Beyond academics</p>
            </div>

            <p className="text-sm font-sans text-[#12375F] leading-relaxed">
              Throughout college, I have contributed to organizing technical festivals, sports events, and inter-collegiate activities. Event coordination, planning, and student engagement taught me that successful outcomes depend as much on organization and communication as on technical ability.
            </p>
          </motion.div>

          {/* Card 6: Independent Client Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            whileHover={{ y: -3 }}
            className="md:col-span-2 p-7 md:p-8 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] border-t-4 border-t-[#B98945] shadow-xs space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[rgba(10,39,71,0.08)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F6F3EC] border border-[#B98945]/30 flex items-center justify-center text-[#B98945]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[#0A2747]">Independent Client Work</h3>
                  <p className="font-mono text-xs text-[#B98945] font-semibold">Building for real clients</p>
                </div>
              </div>
              <span className="self-start sm:self-auto font-mono text-xs font-bold px-3 py-1 bg-[#F6F3EC] text-[#0A2747] border border-[rgba(10,39,71,0.12)] rounded">
                REAL BUSINESS IMPACT
              </span>
            </div>

            <p className="text-sm font-sans text-[#12375F] leading-relaxed">
              Alongside academics, I work independently building websites, AI automation systems, and digital products for clients. Working directly with businesses taught me to understand requirements, iterate rapidly based on feedback, and deliver practical solutions rather than academic exercises.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {[
                "AI-powered business automation",
                "Website design & development",
                "Workflow automation",
                "AI agents & intelligent systems",
                "Full-stack product development",
                "Technical consulting"
              ].map((item) => (
                <div key={item} className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] text-xs font-mono font-medium text-[#0A2747] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B98945] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing Editorial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-8 md:p-10 rounded-xl bg-[#0A2747] text-[#FFFEFA] border-l-4 border-l-[#B98945] shadow-md space-y-4"
        >
          <div className="flex items-center gap-2 text-[#B98945]">
            <Target className="w-5 h-5" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">CORE PHILOSOPHY</span>
          </div>

          <p className="font-sans font-bold text-xl md:text-2xl text-[#FFFEFA] leading-snug">
            &ldquo;Understand the objective. Take ownership. Work well with others. Deliver meaningful results.&rdquo;
          </p>

          <p className="text-sm font-sans text-[#CBD5E1] max-w-3xl leading-relaxed">
            Whether I am leading a football team, representing students, contributing to research, competing in a hackathon, organizing an event, or building software for a client, I approach every challenge with the same mindset. Those experiences continue to shape how I build AI systems—reliable, practical, and designed for real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
