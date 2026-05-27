"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RatingSection from "@/components/sections/rating-section";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Layers,
  Target,
  Palette,
  Type,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Compass,
  Code,
  Zap,
} from "lucide-react";

/* ─── Motion helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55 } },
};

/* ─── Reusable primitives ─── */
const SectionLabel = ({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) => (
  <p
    className={`text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-3 ${
      align === "left" ? "text-left" : "text-center"
    }`}
  >
    {children}
  </p>
);

const OutlineHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-4xl sm:text-5xl md:text-6xl font-black font-headline uppercase mb-8 text-center"
    style={{ WebkitTextStroke: "1px hsl(var(--foreground))", color: "transparent" }}
  >
    {children}
  </h2>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 ${className}`}
  >
    {children}
  </div>
);

const CardIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
    <Icon className="w-4 h-4 text-primary" />
  </div>
);

const CardHeading = ({
  title,
  icon: Icon,
}: {
  title: string;
  icon?: React.ElementType;
}) => (
  <div className="flex items-center gap-3.5 mb-6">
    {Icon && <CardIcon icon={Icon} />}
    <h3 className="text-sm font-bold font-headline uppercase tracking-wider text-foreground">
      {title}
    </h3>
  </div>
);

const Dot = () => (
  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
);

/* ─── Data ─── */
const services = [
  "Logo Design",
  "Visual Identity Design",
  "Brand Direction",
  "Typography System",
  "Color System",
];

const brandPersonality = [
  "Modern",
  "Technical",
  "Premium",
  "Loud",
  "Minimal",
  "Commercially Attractive",
];

const coreAttributes = [
  "Modern",
  "Technical",
  "Balanced",
  "Attractive",
  "Scalable",
  "Professional",
];

const strategyPillars = [
  "Clean geometry to establish technical precision",
  "Bold structure for strong visual presence",
  "Modern digital aesthetics for platform versatility",
  "Technical precision balanced with commercial attractiveness",
  "Neutral typography to support brand personality",
  "Platform-consistent identity across digital touchpoints",
];

const primaryColors = [
  { name: "Midnight Abyss", hex: "#151740" },
  { name: "Ethereal Glow", hex: "#FFF5E8" },
];

const supportingColors = [
  { name: "Cosmic Tide", hex: "#0F135C" },
  { name: "Deep Navy", hex: "#1A1D52" },
];

const keyLearnings = [
  {
    title: "Visual Simplicity",
    body: "Not every brand requires heavy symbolism. When the business model is clear and the audience is digitally literate, visual simplicity becomes a strategic asset — not a shortcut.",
  },
  {
    title: "Commercial Clarity",
    body: "Commercial clarity can outperform conceptual complexity. The logo's geometric CQ monogram communicates everything it needs to without requiring explanation or backstory.",
  },
  {
    title: "Scalability First",
    body: "Simplicity improves scalability across digital platforms. The identity was designed to look equally strong on a mobile favicon, a LinkedIn banner, or a full-scale presentation deck.",
  },
  {
    title: "Geometry = Memory",
    body: "Strong geometry enhances memorability. The interlocking C and Q forms create a distinctive mark that the eye can trace and recall — even at a glance.",
  },
];

/* numbered final identity images */
const finalImages = [
  { src: "/creatiq/1.jpg", alt: "Brand Application 1" },
  { src: "/creatiq/2.jpg", alt: "Brand Application 2" },
  { src: "/creatiq/5.jpg", alt: "Brand Application 5" },
  { src: "/creatiq/6.jpg", alt: "Brand Application 6" },
  { src: "/creatiq/7.jpg", alt: "Brand Application 7" },
  { src: "/creatiq/8.jpg", alt: "Brand Application 8" },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */
export default function CreatiqMediaCaseStudy() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        // Scoping the entire page to Creatiq's bold blue brand palette (#3794ff)
        ["--primary" as any]: "212 100% 61%", // Vivid blue aligned with #3794ff brand
        ["--ring" as any]: "212 100% 61%",
      }}
    >
      {/* Dynamic style override to theme the global floating background gradient balls to the Creatiq blue */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glowing-ball {
          background-color: hsl(212 100% 20% / 0.65) !important;
        }
      `}} />

      <Header />

      <main className="flex-grow">
        {/* ══════════════════════ HERO ══════════════════════ */}
        <section className="relative w-full pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden">
          {/* ambient glow */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary)/0.18) 0%, transparent 70%)",
            }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* back link */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center mb-12">
              <Link
                href="/#branding-reports"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Case Studies
              </Link>
            </motion.div>

            {/* Hero text section centered */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Case Study — Rebranding Project</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl xs:text-5xl sm:text-7xl md:text-[5.1rem] lg:text-[7vw] xl:text-9xl font-black font-headline uppercase leading-none mb-6 text-center whitespace-nowrap"
                style={{
                  WebkitTextStroke: "1px hsl(var(--foreground))",
                  color: "transparent",
                }}
              >
                Creatiq Media
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug max-w-3xl"
              >
                Designing a Modern Visual Identity for a Technology-Driven
                Creative Service Brand
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-3xl mx-auto"
              >
                Building a bold and scalable identity system for a digital
                service company focused on branding, web solutions, marketing,
                and AI integration.
              </motion.p>

              {/* Horizontal Metadata Strip */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 w-full"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">
                    Services Delivered
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {services.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="text-primary text-[10px] sm:text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(21,23,64,0.12)]"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">
                    Industry
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Technology & Creative Services
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">
                    Deliverables
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Brand Identity System / Logo / Color / Typography
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ UNDERSTANDING THE BRAND ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Step 01 — Understand the Brand</SectionLabel>
                <OutlineHeading>The Brand</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Before touching a single design tool, I needed to fully understand what Creatiq Media is,
                  who it speaks to, and where it wants to go. This phase shaped every decision that followed.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* What is Creatiq Media */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What is Creatiq Media?" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Creatiq Media is a technology-focused creative service company providing solutions
                      such as <strong className="text-foreground">advertising, web hosting, web design, branding,
                      AI integration, and digital marketing</strong>.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Although the company already had an existing logo, it lacked a strong and
                      recognizable visual presence that aligned with its evolving services and modern
                      positioning. The goal of the rebrand was to create a visual identity that felt
                      modern, technical, visually engaging, and commercially professional.
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Who it speaks to */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Who it speaks to" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The brand primarily targets digitally-savvy professionals and businesses looking
                      for <strong className="text-foreground">modern creative and technology services</strong> —
                      from branding to AI integration.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Startups", desc: "Emerging businesses building their digital identity" },
                        { label: "Multimedia Agencies", desc: "Creative studios seeking production partners" },
                        { label: "Digital Businesses", desc: "Companies scaling through web, AI, and marketing" },
                        { label: "Developers", desc: "Tech-forward professionals needing design support" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-start gap-3.5 py-2 border-b border-white/5 last:border-0">
                          <Dot />
                          <div>
                            <p className="text-xs font-semibold text-foreground">{row.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{row.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Brand context strip */}
              <motion.div variants={fadeUp}>
                <GlassCard>
                  <CardHeading title="Brand Context — At a Glance" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {[
                      { q: "Field", a: "Technology & Creative" },
                      { q: "Emotion Created", a: "Trust & Precision" },
                      { q: "Positioning", a: "Premium" },
                      { q: "Tone", a: "Modern & Bold" },
                      { q: "Identity Style", a: "Geometric × Minimal" },
                      { q: "Market Type", a: "B2B & Digital" },
                    ].map((item) => (
                      <div key={item.q} className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center hover:border-primary/20 transition-all duration-300">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{item.q}</p>
                        <p className="text-xs sm:text-sm font-bold text-primary leading-snug">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* Why it exists */}
              <motion.div variants={fadeUp} className="mt-8">
                <GlassCard>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <CardHeading title="Why it needed a rebrand" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Creatiq Media had an existing logo, but it lacked the visual strength and
                        consistency needed to match the company&apos;s expanding service portfolio.
                        As the company evolved into AI integration, digital marketing, and web solutions,
                        the identity needed to evolve with it — from a basic mark to a complete visual system.
                      </p>
                    </div>
                    <div>
                      <CardHeading title="What makes it different" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The brand&apos;s core differentiator is its{" "}
                        <strong className="text-foreground">technical precision meets commercial attractiveness</strong>.
                        In a category where most agencies lean into either corporate blandness or chaotic
                        creativity, Creatiq Media chose bold geometry, clean structure, and scalable
                        systems as its competitive foundation.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ PROJECT OVERVIEW ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <GlassCard>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                  {/* Left Overview Column */}
                  <div className="lg:col-span-2 space-y-5 text-left">
                    <SectionLabel align="left">Project Overview</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 uppercase">
                      Overview
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      Creatiq Media is a technology-focused creative service
                      company providing solutions such as advertising, web
                      hosting, web design, branding, AI integration, and digital
                      marketing. Although the company already had an existing logo,
                      it lacked a strong and recognizable visual presence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      The goal was to create a visual identity system that felt
                      modern, technical, visually engaging, and commercially
                      professional — one that could scale with the company&apos;s
                      growing service portfolio.
                    </p>
                  </div>

                  {/* Right Objectives Column */}
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1 lg:mt-6">
                      Core Objectives
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                      {[
                        { label: "Feel modern", desc: "Through clean geometry and bold visual structure" },
                        { label: "Look technical", desc: "Precision-driven mark that reflects tech-forward services" },
                        { label: "Stay memorable", desc: "Distinctive CQ monogram for instant brand recall" },
                        { label: "Be versatile", desc: "Scalable identity system across all digital platforms" },
                      ].map((obj) => (
                        <div
                          key={obj.label}
                          className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                            {obj.label}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {obj.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ AUDIENCE + PERSONALITY ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Target & Tone</SectionLabel>
                <OutlineHeading>Audience & Personality</OutlineHeading>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Target Audience */}
              <motion.div variants={fadeUp}>
                <GlassCard className="h-full">
                  <CardHeading title="Target Audience" icon={Target} />
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    Primarily professionals and businesses between the ages of{" "}
                    <strong className="text-foreground">22–45</strong> who are
                    actively building or scaling their digital presence through
                    modern creative and technology services.
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Age Group", value: "22 – 45 years" },
                      { label: "Segments", value: "Startups, Agencies, Digital Businesses" },
                      { label: "Geography", value: "India & Global (digital-first)" },
                      { label: "Device Context", value: "Desktop & mobile platforms" },
                      { label: "Decision Driver", value: "Visual credibility & professionalism" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 gap-4"
                      >
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {row.label}
                        </span>
                        <span className="text-xs text-foreground font-medium text-right max-w-[55%]">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* Brand Personality */}
              <motion.div variants={fadeUp}>
                <GlassCard className="h-full">
                  <CardHeading title="Brand Personality" icon={Layers} />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    The brand personality was crafted to sit at the intersection of
                    technical precision and modern commercial appeal — bold enough to
                    command attention, clean enough to earn trust.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brandPersonality.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs font-semibold text-primary bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors px-3 py-1.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-white/10 pt-4">
                    Each personality trait was mapped directly to a design decision —
                    from the weight of the typeface to the depth of the navy in the
                    color system.
                  </p>
                </GlassCard>
              </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ CHALLENGE ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>The Challenge</SectionLabel>
                <OutlineHeading>The Problem</OutlineHeading>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="The Conflict" />
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      One of the major challenges of this project was the absence
                      of a clearly defined visual direction from the client side.
                      The client prioritized visual appeal, strong presentation,
                      and professional aesthetics over heavy symbolic storytelling
                      or conceptual branding.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      This required the identity system to focus primarily on
                      memorability, simplicity, and visual impact.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The challenge was to create a logo that could appear modern
                      and technical, remain commercially versatile, and immediately
                      feel professional across digital platforms.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Core Design Attributes" icon={Compass} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Every design decision in this project was filtered through six
                      core attributes that defined what the Creatiq Media identity had to
                      feel like at every touchpoint.
                    </p>
                    <div className="space-y-3">
                      {coreAttributes.map((a) => (
                        <div
                          key={a}
                          className="flex items-center gap-3.5 text-sm py-2 border-b border-white/5 last:border-0"
                        >
                          <Dot />
                          <span className="text-foreground">{a}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-white/10 leading-relaxed">
                      These six attributes were treated as a design filter — not a
                      wishlist. Every element that failed to satisfy at least four of
                      them was discarded.
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ STRATEGIC DIRECTION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Strategic Direction</SectionLabel>
                <OutlineHeading>Strategy</OutlineHeading>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeUp} className="lg:col-span-2">
                  <GlassCard className="h-full">
                    <CardHeading title="Brand Strategy" />
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      Since the client&apos;s focus was centered around strong visual
                      appeal and professional presentation, the identity system was
                      intentionally designed to prioritize clean geometry, bold
                      structure, and modern digital aesthetics.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      The visual identity aimed to balance technical precision with
                      commercial attractiveness — creating a system that could
                      represent both the analytical rigor of technology services and
                      the creative energy of a design agency.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The visual language was designed to combine{" "}
                      <strong className="text-foreground">
                        technical minimalism
                      </strong>{" "}
                      with{" "}
                      <strong className="text-foreground">
                        commercial boldness
                      </strong>{" "}
                      — a deliberate tension that creates a distinctive brand space
                      within the creative services category.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Strategy Pillars" icon={Lightbulb} />
                    <ul className="space-y-4">
                      {strategyPillars.map((p) => (
                        <li key={p} className="flex items-start gap-3.5 text-sm group hover:text-primary transition-colors duration-200">
                          <Dot />
                          <span className="text-foreground group-hover:text-primary leading-snug transition-colors duration-200">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ PREVIOUS IDENTITY ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Before the Rebrand</SectionLabel>
                <OutlineHeading>Previous Identity</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Creatiq Media&apos;s existing identity was a flat, tech-style wordmark.
                  While it communicated a modern tone, it lacked the structural depth,
                  visual memorability, and scalability needed as the company expanded
                  into new service verticals.
                </p>
              </motion.div>

              {/* Old logo image — centered */}
              <div className="flex flex-row justify-center items-center mb-10">
                <motion.div variants={fadeUp} className="group">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 max-w-[360px] bg-white">
                    <Image
                      src="/creatiq/old.jpeg"
                      alt="Creatiq Media — Previous Logo (Old Wordmark)"
                      width={560}
                      height={420}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-center text-[10px] font-bold text-destructive/40 line-through decoration-destructive/30 mt-3 uppercase tracking-widest">
                    Previous Identity
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What it looked like" icon={Zap} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      The old logo was a horizontal wordmark using a custom tech-style typeface
                      with sharp, angular letterforms. It carried a futuristic tone but relied
                      entirely on typography — with no iconic symbol or monogram to serve as a
                      standalone brand mark.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The identity had no supporting color system, no typography hierarchy, and no
                      visual guidelines — making it difficult to apply consistently across digital
                      platforms, social media, and marketing materials.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Why it needed to change" icon={Lightbulb} />
                    <div className="space-y-3">
                      {[
                        { label: "No standalone mark", desc: "The wordmark couldn't function as a favicon, profile photo, or compact brand element" },
                        { label: "Limited scalability", desc: "The horizontal format didn't adapt well to vertical layouts or mobile interfaces" },
                        { label: "No visual system", desc: "No defined colors, typography hierarchy, or usage guidelines existed" },
                        { label: "Evolving services", desc: "The company's expansion into AI, web, and marketing demanded a more sophisticated identity" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-start gap-3.5 py-2 border-b border-white/5 last:border-0">
                          <Dot />
                          <div>
                            <p className="text-xs font-semibold text-foreground">{row.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{row.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ LOGO EXPLORATION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Logo Development</SectionLabel>
                <OutlineHeading>Logo Exploration</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  The initial visual direction explored the concept of &ldquo;Creatiq Queue&rdquo; —
                  combining the letters C and Q into a unified geometric mark that subtly
                  represents client flow, scalability, and the continuous management pipeline
                  handled by the company.
                </p>
              </motion.div>

              {/* Logo concept — 0.jpg */}
              <motion.div variants={fadeUp} className="mb-10">
                <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl border border-white/10 group">
                  <Image
                    src="/creatiq/0.jpg"
                    alt="Creatiq Media Logo Concept — Brand Split View"
                    width={1200}
                    height={680}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard className="border-primary/20 bg-primary/[0.01] hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(21,23,64,0.05)]">
                  <div className="flex items-start gap-4">
                    <CardIcon icon={Code} />
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm mb-2">
                        Key Insight — The CQ Monogram
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The symbol was developed by combining the letter C and the letter Q
                        into a unified geometric mark. The form subtly represented client flow,
                        scalability, and the continuous management pipeline handled by the company.
                        This allowed the logo to maintain simplicity, memorability, and technical
                        character — without becoming visually overcomplicated.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ FINAL VISUAL DIRECTION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Final Visual Direction</SectionLabel>
                <OutlineHeading>Final Identity</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  The final logo system successfully achieved a balance between
                  technical minimalism, visual boldness, and commercial flexibility.
                  Because of its simplicity and clarity, the concept was approved
                  during the first presentation round with only minimal refinements required.
                </p>
              </motion.div>

              {/* Grid of final visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {finalImages.map((img, i) => (
                  <motion.div key={img.src} variants={fadeUp} className="group">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={560}
                        height={420}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="text-xs text-primary/80 mt-2 text-center font-mono font-semibold tracking-wider group-hover:text-primary transition-colors duration-200">
                      {String(i).padStart(2, "0")}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <GlassCard>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    The combination of <strong className="text-foreground">midnight navy</strong>,{" "}
                    <strong className="text-foreground">ethereal beige</strong>, and bold
                    geometric structure helped establish a visual identity that felt
                    modern, technical, memorable, and commercially professional. The identity
                    was intentionally designed to feel scalable, perform well digitally,
                    and remain visually memorable across multiple applications.
                  </p>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ TYPOGRAPHY ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Typography System</SectionLabel>
                <OutlineHeading>Typography</OutlineHeading>
              </motion.div>

              {/* Typo image */}
              <motion.div variants={fadeUp} className="mb-10">
                <div className="max-w-2xl mx-auto overflow-hidden rounded-3xl border border-white/10 group">
                  <Image
                    src="/creatiq/typo.jpg"
                    alt="Creatiq Media Typography System"
                    width={780}
                    height={440}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              {/* Two breakdown cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Primary Typeface" icon={Type} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The typography system was intentionally kept neutral and modern to
                      support the brand&apos;s technical personality. The{" "}
                      <strong className="text-foreground">
                        Helvetica family
                      </strong>{" "}
                      was chosen as the primary typeface because of its clean geometry,
                      digital familiarity, and professional neutrality.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A bolder weight structure was used to improve visibility,
                      strengthen confidence, and support the modern technical aesthetic.
                      Unlike emotionally expressive typography systems, the focus here
                      was clarity and strong commercial presentation.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Typography Rationale" icon={Type} />
                    <div className="space-y-5">
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-all duration-300">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Primary — Helvetica
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Clean and structured appearance reinforces technology,
                          professionalism, and modernity. Used for headlines, the
                          brand wordmark, and primary communications.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-all duration-300">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Design Intent — Bold Weight
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          A bolder weight structure was specifically used to improve
                          visibility, strengthen confidence, and support the modern
                          technical aesthetic across all brand applications.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ COLOR SYSTEM ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Color System</SectionLabel>
                <OutlineHeading>Colors</OutlineHeading>
              </motion.div>

              {/* Color palette image */}
              <motion.div variants={fadeUp} className="mb-10">
                <div className="max-w-3xl mx-auto overflow-hidden rounded-3xl border border-white/10 group">
                  <Image
                    src="/creatiq/colors.jpg"
                    alt="Creatiq Media Color Palette"
                    width={1200}
                    height={680}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Primary colors */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Primary Colors" />
                    <div className="space-y-4">
                      {primaryColors.map((c) => (
                        <div key={c.hex} className="flex items-center gap-4 group">
                          <div
                            className="w-14 h-14 rounded-2xl border border-white/10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: c.hex }}
                          />
                          <div>
                            <p className="font-semibold text-foreground text-sm">
                              {c.name}
                            </p>
                            <p className="text-muted-foreground text-xs font-mono mt-0.5">
                              {c.hex}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-white/10 leading-relaxed">
                      The primary pair creates an immediate professional impression —
                      the deep navy anchors trust and technology while the soft beige delivers
                      visual contrast and balance.
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Supporting colors */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Supporting Colors" />
                    <div className="grid grid-cols-2 gap-4">
                      {supportingColors.map((c) => (
                        <div key={c.hex} className="flex flex-col gap-2 group text-left">
                          <div
                            className="w-full h-12 rounded-xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundColor: c.hex }}
                          />
                          <div>
                            <p className="font-medium text-foreground text-xs">
                              {c.name}
                            </p>
                            <p className="text-muted-foreground text-[10px] font-mono">
                              {c.hex}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-white/10 leading-relaxed">
                      Supporting tones were derived as tonal variations to maintain
                      system consistency while expanding flexibility across
                      applications.
                    </p>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Color psychology */}
              <motion.div variants={fadeUp}>
                <GlassCard className="border-primary/10 hover:border-primary/25 transition-all duration-300 shadow-[0_0_20px_rgba(21,23,64,0.05)]">
                  <CardHeading title="Color Psychology" icon={Palette} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        color: "#151740",
                        title: "Midnight Abyss",
                        body: "Communicates trust, technology, and professionalism. Deep enough to feel authoritative, modern enough to feel forward-thinking.",
                      },
                      {
                        color: "#FFF5E8",
                        title: "Ethereal Glow",
                        body: "A warm, soft contrast to the dominant navy. Creates balance, breathing room, and a more premium visual appearance across applications.",
                      },
                      {
                        color: "#0F135C",
                        title: "Cosmic Tide",
                        body: "A tonal bridge that adds depth to the palette. Used for subtle backgrounds and accent elements that maintain the brand's technical character.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="bg-white/5 rounded-2xl p-4 border border-white/5 text-left"
                      >
                        <div
                          className="w-8 h-8 rounded-xl mb-3 border border-white/10"
                          style={{ backgroundColor: item.color }}
                        />
                        <p className="font-semibold text-foreground text-sm mb-2">
                          {item.title}
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ FACE OF THE BRAND ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Logo Variants</SectionLabel>
                <OutlineHeading>Face of the Brand</OutlineHeading>
              </motion.div>

              <div className="flex flex-wrap justify-center items-center gap-10">
                {[
                  {
                    src: "/creatiq/logo dark.jpg",
                    label: "Dark Variant",
                    bg: "#151740",
                    isComplete: false,
                  },
                  {
                    src: "/creatiq/complete logo dark.jpg",
                    label: "Complete Logo — Dark",
                    bg: "#151740",
                    isComplete: true,
                  },
                  {
                    src: "/creatiq/logo light.jpg",
                    label: "Light Variant",
                    bg: "#FFF5E8",
                    isComplete: false,
                  },
                  {
                    src: "/creatiq/complete logo light.jpg",
                    label: "Complete Logo — Light",
                    bg: "#FFF5E8",
                    isComplete: true,
                  },
                ].map((v) => (
                  <motion.div key={v.label} variants={fadeUp} className="flex flex-col items-center gap-3 group/item">
                    <div
                      className="rounded-2xl overflow-hidden group border border-white/5 group-hover/item:border-primary/30 shadow-lg flex items-center justify-center transition-all duration-300 animate-none"
                      style={{
                        backgroundColor: v.bg,
                        padding: v.isComplete ? "16px" : "24px",
                        width: v.isComplete ? "280px" : "228px",
                        height: "228px",
                      }}
                    >
                      <Image
                        src={v.src}
                        alt={`Creatiq Media ${v.label}`}
                        width={v.isComplete ? 320 : 240}
                        height={180}
                        className="h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                        style={{ width: v.isComplete ? "240px" : "180px" }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground group-hover/item:text-primary uppercase tracking-widest mt-2 transition-colors duration-200">
                      {v.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ BRAND IMPACT ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-3xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={fadeUp} className="text-center flex flex-col items-center w-full">
                <SectionLabel>Brand Impact</SectionLabel>
                <OutlineHeading>Results & Impact</OutlineHeading>

                <div className="space-y-6 w-full text-left">
                  <GlassCard>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      The redesigned identity helped Creatiq Media establish a more
                      polished and modern visual presence. Key outcomes included
                      immediate client approval, improved professional perception,
                      stronger visual consistency, and a clearer digital identity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The new system gave the brand a more scalable and recognizable
                      foundation for future growth across digital platforms.
                    </p>
                  </GlassCard>

                  <GlassCard className="border-primary/20 bg-primary/[0.01] hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(21,23,64,0.05)]">
                    <CardHeading title="Key Outcome" icon={TrendingUp} />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The identity successfully translated the brand&apos;s core values of
                      technology, precision, and creative versatility into a{" "}
                      <strong className="text-foreground">
                        scalable modern visual system
                      </strong>{" "}
                      — one that can grow with the brand as it enters new verticals and
                      platforms.
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ DESIGNER'S REFLECTION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Closing Thoughts</SectionLabel>
                <OutlineHeading>Reflection</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  A candid look at what this project meant, how the results landed, and what it confirmed about the craft of brand design.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* The Result */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="The Result" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      The results were clean and effective. The identity was approved during the first
                      presentation round — a strong signal that the strategic direction was on point.
                      The new visual system immediately improved how the brand was perceived
                      across digital platforms and client-facing materials.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The CQ monogram became a recognizable mark that the brand could carry
                      confidently into any context — from social media profiles to full-scale
                      presentation decks.
                    </p>
                  </GlassCard>
                </motion.div>

                {/* What this project confirmed */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What this confirmed" />
                    <div className="space-y-4">
                      {[
                        {
                          label: "Simplicity is strategy",
                          body: "In commercially-driven categories, visual simplicity isn't laziness — it's a deliberate strategic decision that improves recall and scalability.",
                        },
                        {
                          label: "Geometry builds trust",
                          body: "The interlocking CQ mark doesn't need explanation. Strong geometry communicates precision, professionalism, and technical competence instantly.",
                        },
                        {
                          label: "Color is communication",
                          body: "Choosing bold navy and soft beige wasn't an aesthetic call — it was a trust mechanism. Blue signals reliability; beige signals approachability.",
                        },
                        {
                          label: "First-round approval is earned",
                          body: "Getting a concept approved in the first round doesn't happen by luck. It happens when strategy, research, and design intent are aligned before a single pixel is placed.",
                        },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3.5 py-2 border-b border-white/5 last:border-0">
                          <Dot />
                          <div className="text-left">
                            <p className="text-xs font-semibold text-foreground mb-1">{item.label}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Designer's note — closing quote strip */}
              <motion.div variants={fadeUp}>
                <div className="bg-white/5 border border-primary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden text-left shadow-[0_0_30px_rgba(21,23,64,0.06)] hover:border-primary/30 transition-all duration-300">
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 60% 80% at 0% 50%, #151740 0%, transparent 70%)",
                    }}
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Designer&apos;s Note</p>
                  <p className="text-foreground text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                    &ldquo;This project was a masterclass in restraint. The client didn&apos;t need a story —
                    they needed a system. A mark that could walk into a meeting and earn trust
                    before a word was spoken. That&apos;s what the CQ monogram delivers — precision
                    without pretension.&rdquo;
                  </p>
                  <p className="text-muted-foreground text-xs mt-5 uppercase tracking-widest">— pxl.crazy, Brand Designer</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ KEY LEARNINGS ══════════════════════ */}
        <section className="w-full py-16 md:py-32 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center">
                <SectionLabel>Key Lessons</SectionLabel>
                <OutlineHeading>Key Learnings</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                  This project reinforced the importance of balancing visual
                  simplicity, commercial appeal, and technical aesthetics.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {keyLearnings.map((item, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <GlassCard className="hover:border-primary/40 hover:shadow-[0_0_25px_rgba(21,23,64,0.16)] transition-all duration-300 h-full text-left">
                      <div className="text-3xl font-black font-headline text-primary/25 mb-4">
                        0{i + 1}
                      </div>
                      <p className="font-bold text-foreground text-sm mb-3">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.body}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="mt-16 text-center">
                <div className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12 max-w-xl mx-auto">
                  <div className="flex items-center justify-center mb-5">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-3">
                    Like what you see?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Let&apos;s build something bold and memorable together.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                  >
                    Start a Project
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ RATING SECTION ══════════════════════ */}
        <RatingSection pageId="creatiq" pageTitle="the Creatiq Media Rebranding Project" />
      </main>

      <Footer />
    </div>
  );
}
