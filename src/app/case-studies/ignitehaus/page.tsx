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
  Zap,
  FlameKindling,
  Building2,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

/* ─── IGH Brand Colors ─── */
// Primary:   #ea2121 (ignite red)
// Secondary: #f29926 (amber orange)
// Dark:      #0e0e0e
// Light:     #e5e5e5

/* ─── Motion helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

/* ─── IGH-themed primitives ─── */
const SectionLabel = ({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) => (
  <p
    className={`text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 ${
      align === "left" ? "text-left" : "text-center"
    }`}
    style={{ color: "#ea2121" }}
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
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) => (
  <div
    className={`bg-black/20 backdrop-blur-md border rounded-3xl p-6 sm:p-8 md:p-10 ${className}`}
    style={{
      borderColor: accent ? "rgba(234,33,33,0.30)" : "rgba(255,255,255,0.08)",
      boxShadow: accent ? "0 0 24px rgba(234,33,33,0.08)" : undefined,
    }}
  >
    {children}
  </div>
);

const CardIcon = ({ icon: Icon, amber }: { icon: React.ElementType; amber?: boolean }) => (
  <div
    className="p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center"
    style={{
      background: amber ? "rgba(242,153,38,0.12)" : "rgba(234,33,33,0.12)",
      border: amber ? "1px solid rgba(242,153,38,0.25)" : "1px solid rgba(234,33,33,0.25)",
    }}
  >
    <Icon className="w-4 h-4" style={{ color: amber ? "#f29926" : "#ea2121" }} />
  </div>
);

const CardHeading = ({
  title,
  icon: Icon,
  amber,
}: {
  title: string;
  icon?: React.ElementType;
  amber?: boolean;
}) => (
  <div className="flex items-center gap-3.5 mb-6">
    {Icon && <CardIcon icon={Icon} amber={amber} />}
    <h3 className="text-sm font-bold font-headline uppercase tracking-wider text-foreground">
      {title}
    </h3>
  </div>
);

const Dot = ({ amber }: { amber?: boolean }) => (
  <span
    className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0"
    style={{ backgroundColor: amber ? "#f29926" : "#ea2121" }}
  />
);

/* ─── Tension Bar ─── */
const TensionBar = () => (
  <div className="flex items-center gap-4 py-6 px-6 rounded-2xl my-6" style={{ background: "rgba(234,33,33,0.06)", border: "1px solid rgba(234,33,33,0.15)" }}>
    <div className="flex-1 text-center">
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#f29926" }}>IGNITE</p>
      <p className="text-xs text-muted-foreground">Creative Energy · Wild Spark · New Beginnings</p>
    </div>
    <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-0.5" style={{ background: "linear-gradient(to right, #f29926, #ea2121)" }} />
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">TENSION</p>
      <div className="w-8 h-0.5" style={{ background: "linear-gradient(to left, #f29926, #ea2121)" }} />
    </div>
    <div className="flex-1 text-center">
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#ea2121" }}>HAUS</p>
      <p className="text-xs text-muted-foreground">Structure · Systems · Rock Solid Foundation</p>
    </div>
  </div>
);

/* ─── Data ─── */
const services = [
  "Brand Strategy",
  "Visual Identity",
  "Logo Design",
  "Typography System",
  "Color Direction",
];

const brandPersonality = [
  "Intelligent",
  "Modular",
  "Architectural",
  "Purposeful",
  "Dynamic",
  "Timeless",
];

const targetAudience = [
  { label: "Startups", desc: "Ambitious founders building from zero." },
  { label: "Creators", desc: "Content-first brands needing structured systems." },
  { label: "SaaS Builders", desc: "Product teams seeking clarity and trust." },
  { label: "Educators", desc: "Knowledge platforms needing structured identity." },
];

const strategyShift = [
  { from: "Single Logos", to: "Brand Systems" },
  { from: "One-off Websites", to: "Visual Growth Platforms" },
  { from: "Social Media Posts", to: "Creative Frameworks" },
  { from: '"Aesthetic Vibes"', to: "Clarity & Order" },
];

const visualPrinciples = [
  { title: "Intelligent, not corporate", desc: "Human, confident visual language rather than sterile formality." },
  { title: "Modular, not static", desc: "Every layout connects like building blocks in a shared grammar." },
  { title: "Dynamic, not trendy", desc: "Architectural layouts that age well over visual fads." },
];

const keyLearnings = [
  {
    title: "A Logo is Not a Brand",
    body: "The logo is just the welcome mat. The real brand is the visual system—how layouts align, how content scales, and how materials stack.",
    icon: Layers,
  },
  {
    title: "Embrace the Friction",
    body: "Contradictions make a brand unique. Balancing high creativity and deep structure forms a memorable brand superpower.",
    icon: Zap,
  },
  {
    title: "Start with Tension",
    body: "Define the core tension in the value proposition before designing aesthetics. That is where identity is born.",
    icon: Sparkles,
  },
  {
    title: "Build Systems, Not Stickers",
    body: "Ensure the visual language stretches naturally from digital interfaces to physical mockups without losing its voice.",
    icon: LayoutGrid,
  },
];

const round1Issues = [
  { label: "What Worked", desc: "Super clean, modern and scaled down to a tiny icon perfectly. Felt distinctive and system-oriented.", positive: true },
  { label: "What Failed", desc: "Communicated SaaS / crypto / tech-cold more than creative energy. Lost the human soul of Ignite.", positive: false },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */
export default function IgniteHausCaseStudy() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        // Override CSS vars to IGH's red brand palette
        ["--primary" as any]: "0 83% 52%",         // #ea2121 red
        ["--ring" as any]: "0 83% 52%",
      }}
    >
      {/* Retheme global ambient background balls to IGH red */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glowing-ball {
          background-color: hsl(0 83% 20% / 0.55) !important;
        }
      `}} />

      <Header />

      <main className="flex-grow">
        {/* ══════════════════════ HERO ══════════════════════ */}
        <section className="relative w-full pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden">
          {/* Dual ambient glows — red + amber */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 30% 0%, rgba(234,33,33,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 75% 5%, rgba(242,153,38,0.14) 0%, transparent 60%)",
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

            {/* Hero text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Case Study — Brand Identity Rebuild</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl xs:text-5xl sm:text-7xl md:text-[5.1rem] lg:text-[7vw] xl:text-9xl font-black font-headline uppercase leading-none mb-6 text-center whitespace-nowrap"
                style={{
                  WebkitTextStroke: "1px hsl(var(--foreground))",
                  color: "transparent",
                }}
              >
                Ignite Haus
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug max-w-3xl"
              >
                From Vibes to Systems: How I Rebuilt a Creative Agency
                Identity From the Ground Up
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-3xl mx-auto"
              >
                A complete strategic and visual overhaul of Ignite Haus — turning a
                generic creative agency into a purposeful brand that sits at the
                intersection of creative energy and structural systems.
              </motion.p>

              {/* Metadata strip */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 w-full"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(234,33,33,0.8)" }}>
                    Services Delivered
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {services.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full font-semibold transition-all duration-300"
                        style={{
                          color: "#ea2121",
                          background: "rgba(234,33,33,0.08)",
                          borderColor: "rgba(234,33,33,0.28)",
                        }}
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(234,33,33,0.8)" }}>
                    Industry
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Creative Agency & Design Studio
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(234,33,33,0.8)" }}>
                    Project Type
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Full Brand Identity Rebuild / Strategic Repositioning
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ UNDERSTANDING THE BRAND ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Step 01 — Understand the Brand</SectionLabel>
                <OutlineHeading>The Brand</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Before touching a single design tool, I needed to fully understand what Ignite Haus
                  is, who it speaks to, and where it wants to go. This phase shaped every decision that followed.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* What is IGH */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What is Ignite Haus?" icon={FlameKindling} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Ignite Haus launched as a full-service creative agency offering branding, design, content, and web solutions.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      While professional and modern, its initial identity lacked a distinct strategic position—looking like many standard agencies without standing for a core idea.
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Who it speaks to */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Who it speaks to" icon={Target} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The brand targets ambitious builders and leaders who need both high-energy imagination and clean systems.
                    </p>
                    <div className="space-y-3">
                      {targetAudience.map((row) => (
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
                      { q: "Field", a: "Creative Agency" },
                      { q: "Emotion Created", a: "Energy & Trust" },
                      { q: "Positioning", a: "Strategic Partner" },
                      { q: "Tone", a: "Bold & Intelligent" },
                      { q: "Identity Style", a: "Architectural & Dynamic" },
                      { q: "Market Type", a: "B2B & Creator" },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-2xl p-4 border text-center transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.05)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(234,33,33,0.25)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                        }}
                      >
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{item.q}</p>
                        <p className="text-xs sm:text-sm font-bold leading-snug" style={{ color: "#ea2121" }}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ THE ORIGINAL LOGO ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Before the Rebuild</SectionLabel>
                <OutlineHeading>Previous Identity</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  On the surface, the agency looked great — modern, professional, knew its way around design.
                  But underneath, there was a major identity crisis.
                </p>
              </motion.div>

              <div className="flex flex-row justify-center items-center mb-10">
                <motion.div variants={fadeUp} className="group">
                  <div
                    className="relative overflow-hidden rounded-3xl border max-w-[400px]"
                    style={{ borderColor: "rgba(255,255,255,0.10)", background: "#fff" }}
                  >
                    <Image
                      src="/igh/oldLogo.jpg"
                      alt="Ignite Haus — Previous Logo (Original Identity)"
                      width={560}
                      height={420}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p
                    className="text-center text-[10px] font-bold line-through mt-3 uppercase tracking-widest"
                    style={{ color: "rgba(234,33,33,0.4)", textDecorationColor: "rgba(234,33,33,0.30)" }}
                  >
                    Previous Identity — Replaced
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What the original communicated" icon={BookOpen} />
                    <div className="space-y-3 mb-5">
                      {["Modernity", "Creativity", "Digital services", "Professional execution"].map((t) => (
                        <div key={t} className="flex items-center gap-3.5 text-sm py-1.5 border-b border-white/5 last:border-0">
                          <Dot amber />
                          <span className="text-foreground">{t}</span>
                        </div>
                      ))}
                    </div>
                                        <p className="text-muted-foreground text-xs leading-relaxed pt-3 border-t border-white/10">
                      Visually adequate, but strategically generic. Swap the logo with any other agency and it would look the same.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What it failed to communicate" icon={Zap} />
                    <div className="space-y-3">
                                            {[
                        { label: "Why Ignite Haus exists", desc: "No clear purpose beyond generic design services." },
                        { label: "What differentiates it", desc: "Easily confused with standard creative studios." },
                        { label: "What unique value it brings", desc: "Lacked distinct emotional or strategic positioning." },
                        { label: "What it stands for", desc: "The identity failed to leverage the power of its own name." },
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

        {/* ══════════════════════ THE AHA MOMENT ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>The Strategic Discovery</SectionLabel>
                <OutlineHeading>The Aha Moment</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  I stopped looking at typography and colors and started looking at the name itself.
                  That's where the real brand was hiding.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard accent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <CardHeading title="Reading the Name" icon={Lightbulb} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                        <div
                          className="rounded-2xl p-5 border"
                          style={{ background: "rgba(242,153,38,0.08)", borderColor: "rgba(242,153,38,0.25)" }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <FlameKindling className="w-4 h-4" style={{ color: "#f29926" }} />
                            <p className="text-sm font-black uppercase tracking-wider" style={{ color: "#f29926" }}>IGNITE</p>
                          </div>
                          <ul className="space-y-1">
                            {["Ideas & Energy", "Momentum", "Transformation", "Creative chaos", "New beginnings"].map((t) => (
                              <li key={t} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#f29926" }} />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className="rounded-2xl p-5 border"
                          style={{ background: "rgba(234,33,33,0.08)", borderColor: "rgba(234,33,33,0.25)" }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="w-4 h-4" style={{ color: "#ea2121" }} />
                            <p className="text-sm font-black uppercase tracking-wider" style={{ color: "#ea2121" }}>HAUS</p>
                          </div>
                          <ul className="space-y-1">
                            {["Foundation", "Structure", "Systems", "Reliability", "Long-term thinking"].map((t) => (
                              <li key={t} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ea2121" }} />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <CardHeading title="The Key Discovery" icon={Sparkles} />
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        At first glance, the name felt like a contradiction: how can a brand be a wild, sparking flame and a solid house at the same time?
                      </p>
                      <TensionBar />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The power of the name comes from the tension between the two: pure creativity without structure is chaos, while pure structure without creativity is sterile. Ignite Haus bridges them, organizing creative energy into scalable business systems.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ STRATEGIC REPOSITIONING ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Step 02 — Shift the Strategy</SectionLabel>
                <OutlineHeading>Repositioning</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Once I understood the core philosophy, I had to shift what Ignite Haus positioned itself
                  to sell. Most agencies operate like a drive-thru. I wanted something different.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeUp} className="lg:col-span-2">
                  <GlassCard className="h-full">
                    <CardHeading title="From Assets to Infrastructure" icon={Compass} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      We shifted from selling isolated design assets to building visual infrastructure—systems and scalable creative frameworks that grow with clients.
                    </p>

                    {/* Shift table */}
                    <div className="space-y-3">
                      <div
                        className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest pb-2 border-b"
                        style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
                      >
                        <span>What Most Agencies Sell</span>
                        <span>What Ignite Haus Should Sell</span>
                      </div>
                      {strategyShift.map((row) => (
                        <div key={row.from} className="grid grid-cols-2 gap-4 items-center py-2 border-b border-white/5 last:border-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground line-through decoration-muted-foreground/30">{row.from}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ea2121" }} />
                            <span className="text-xs font-semibold text-foreground">{row.to}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="The Core Brand Idea" icon={Target} amber />
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      Repositioning the agency from a service vendor to a strategic partner:
                    </p>
                    <div
                      className="rounded-2xl p-5 mb-5"
                      style={{ background: "rgba(234,33,33,0.06)", border: "1px solid rgba(234,33,33,0.18)" }}
                    >
                      <p className="text-sm font-bold text-foreground leading-snug italic">
                        &ldquo;A design-led creative partner that transforms ideas into systems, experiences, and growth.&rdquo;
                      </p>
                    </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                      The emphasis shifts from delivering visual stickers to creating momentum and structure.
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ ROUND 1 — EXPLORATION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Step 03 — Design Sandbox</SectionLabel>
                <OutlineHeading>Round 1: The Exploration</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Ground rule before opening Figma: <strong className="text-foreground">No literal fire icons, no literal house outlines,
                  no lightbulbs.</strong> Illustrating the name is lazy. I wanted to embody the philosophy.
                </p>
              </motion.div>

              {/* Design Process — Text Descriptions */}
              <motion.div variants={fadeUp} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    {/* Brand Audit Notes */}
                  <GlassCard>
                    <CardHeading title="Brand Audit & Strategy" icon={BookOpen} />
                    <div className="space-y-4 text-left">
                      <div>
                        <p className="text-[10px] font-bold text-foreground mb-1.5 uppercase tracking-wider">Brand Purpose</p>
                        <div className="space-y-1 text-xs text-muted-foreground leading-relaxed">
                          <p><strong>Goal:</strong> Solve scaling & content production bottlenecks for busy founders.</p>
                          <p><strong>Value:</strong> Shifting from standard content creation to predictable content systems.</p>
                        </div>
                      </div>
                      <div className="border-t border-white/5 pt-3">
                        <p className="text-[10px] font-bold text-foreground mb-1.5 uppercase tracking-wider">Core Challenges</p>
                        <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                          <li className="flex items-center gap-1.5"><Dot /> <span>Weak positioning</span></li>
                          <li className="flex items-center gap-1.5"><Dot /> <span>Lack of early trust</span></li>
                          <li className="flex items-center gap-1.5"><Dot /> <span>Low identification</span></li>
                          <li className="flex items-center gap-1.5"><Dot /> <span>Inauthentic voice</span></li>
                        </ul>
                      </div>
                      <div className="border-t border-white/5 pt-3">
                        <p className="text-[10px] font-bold text-foreground mb-1.5 uppercase tracking-wider">Why Ignite Haus?</p>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li className="flex items-start gap-2"><Dot amber /> <span>Structured, automated planning systems.</span></li>
                          <li className="flex items-start gap-2"><Dot amber /> <span>Limited client intake for high-fidelity focus.</span></li>
                          <li className="flex items-start gap-2"><Dot amber /> <span>Repeatable, data-driven growth outputs.</span></li>
                        </ul>
                      </div>
                    </div>
                  </GlassCard>

                                    {/* Designer's Perspective */}
                  <GlassCard>
                    <CardHeading title="Designer's Perspective" icon={Compass} amber />
                    <div className="space-y-4 text-left">
                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Dot amber /> Trust</span>
                        <span className="flex items-center gap-1.5"><Dot amber /> Relief</span>
                        <span className="flex items-center gap-1.5"><Dot amber /> Clarity</span>
                        <span className="flex items-center gap-1.5"><Dot amber /> Flow</span>
                        <span className="flex items-center gap-1.5"><Dot amber /> Guide</span>
                        <span className="flex items-center gap-1.5"><Dot amber /> Pattern</span>
                      </div>
                      <div className="space-y-2 border-t border-white/5 pt-3 text-xs text-muted-foreground">
                        <p><strong>Recognition:</strong> Visual consistency for instant brain storage.</p>
                        <p><strong>Distinction:</strong> Striking layout details to stand out in a crowded market.</p>
                        <p><strong>Meaning:</strong> Grounding the mark in the agency&apos;s architectural tension.</p>
                      </div>
                      <div
                        className="rounded-xl p-3 text-center animate-pulse"
                        style={{ background: "rgba(242,153,38,0.06)", border: "1px solid rgba(242,153,38,0.12)" }}
                      >
                        <p className="text-[11px] text-muted-foreground italic">
                          &ldquo;Impactful logos focus on memory patterns, not symmetry.&rdquo;
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                                    {/* Design Approach */}
                  <GlassCard>
                    <CardHeading title="Design Approach" icon={Layers} />
                    <div className="space-y-3 text-left">
                      <div className="rounded-xl p-3 border" style={{ background: "rgba(234,33,33,0.04)", borderColor: "rgba(234,33,33,0.12)" }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#ea2121" }}>Approach 1: Symmetrical Trust</p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Focuses on repetition, order, and circles. Symmetry enables easy pattern-storage in the human brain, prioritizing trust and structure. (Blue/Green palette).
                        </p>
                      </div>
                      <div className="rounded-xl p-3 border" style={{ background: "rgba(242,153,38,0.04)", borderColor: "rgba(242,153,38,0.12)" }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#f29926" }}>Approach 2: Asymmetrical Impact</p>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Utilizes pattern interruption. The eye naturally registers unusual, non-uniform breaks in structure, driving higher visual memorability and boldness.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                                    {/* Symbol Exploration */}
                  <GlassCard>
                    <CardHeading title="Symbol Exploration" icon={Zap} amber />
                    <div className="space-y-3.5 text-left">
                      <div className="space-y-2.5 text-xs text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Dot />
                          <div>
                            <p className="font-semibold text-foreground">Growth:</p>
                            <p className="text-muted-foreground leading-relaxed">Exponential upward curves and rising visual trajectories.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Dot />
                          <div>
                            <p className="font-semibold text-foreground">Path:</p>
                            <p className="text-muted-foreground leading-relaxed">Flowing lines that guide the eye between anchors.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Dot />
                          <div>
                            <p className="font-semibold text-foreground">Nodes:</p>
                            <p className="text-muted-foreground leading-relaxed">Pillars along paths representing ideas moving through a system.</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground pt-2.5 border-t border-white/5 leading-relaxed">
                        This resulted in a geometric symbol with rounded tracks—clean, but ultimately too sterile for a creative identity.
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>

              {/* Logo result */}
              <motion.div variants={fadeUp} className="mb-8">
                <div className="max-w-2xl mx-auto group">
                  <div
                    className="relative overflow-hidden rounded-3xl border"
                    style={{ borderColor: "rgba(255,255,255,0.10)" }}
                  >
                    <Image
                      src="/igh/logo1L.jpg"
                      alt="Round 1 Final Logo — Ignite Haus (Light version)"
                      width={900}
                      height={900}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2">
                    First final logo direction — polished, but felt more like a tech company than a creative studio
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {round1Issues.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl p-5 border"
                        style={{
                          background: item.positive ? "rgba(242,153,38,0.05)" : "rgba(234,33,33,0.05)",
                          borderColor: item.positive ? "rgba(242,153,38,0.20)" : "rgba(234,33,33,0.20)",
                        }}
                      >
                        <p
                          className="text-xs font-bold uppercase tracking-wider mb-2"
                          style={{ color: item.positive ? "#f29926" : "#ea2121" }}
                        >
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-5 rounded-2xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Key Learning:</strong> The first symbol revealed an important insight —
                      the agency is not about connection alone. It&apos;s about connecting{" "}
                      <em>creativity and structure</em>. The symbol solved only half of the equation.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ ROUND 2 — REFINEMENT ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Step 04 — The Architect&apos;s Desk</SectionLabel>
                <OutlineHeading>Round 2: The Refinement</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  To find the right balance, I stripped away the tech-bro icon and focused on typography
                  and layout. I analyzed the market and created moodboards around minimal typography
                  paired with a remarkable mark.
                </p>
              </motion.div>

              {/* Moodboards */}
              <motion.div variants={fadeUp} className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-4">
                  {[1, 2].map((n) => (
                    <div
                      key={n}
                      className="group relative overflow-hidden rounded-2xl border"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <Image
                        src={`/igh/moodboard${n}.jpg`}
                        alt={`Moodboard category ${n}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Moodboard exploration — minimal typography with remarkable icon vs. pure typography-led direction
                </p>
              </motion.div>

              {/* Round 2 insight card */}
              <motion.div variants={fadeUp} className="mb-8">
                <GlassCard accent>
                  <CardHeading title="The Central Divider Concept" icon={Type} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        Rather than relying on a standalone icon, I wanted the typography to carry the
                        meaning. I separated <strong className="text-foreground">&ldquo;Ignite&rdquo;</strong> and{" "}
                        <strong className="text-foreground">&ldquo;Haus&rdquo;</strong> using a custom central
                        divider that was the negative space formed by the letter{" "}
                        <strong className="text-foreground">H</strong>.
                      </p>
                      <div
                        className="rounded-xl p-4 font-mono text-sm mb-4"
                        style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <p className="text-foreground mb-1">{"  I G N I T E  [ â€– ]  H A U S"}</p>
                        <p className="text-muted-foreground text-xs mt-2">{"                   ^"}</p>
                        <p className="text-muted-foreground text-xs">{"       Negative Space \"H\""}</p>
                        <p className="text-muted-foreground text-xs">{"       (Gateway / Pillars)"}</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The divider represents a <strong className="text-foreground">gateway</strong> or
                        structural pillars — the exact point where raw creative energy (Ignite) transitions
                        into a solid system (Haus).
                      </p>
                    </div>
                    <div className="space-y-4">
                                            {[
                        { title: "Architecture", body: "Adds clean, structural meaning directly to the letterforms." },
                        { title: "Foundation", body: "Evokes stability and systemic structure, aligning with 'Haus'." },
                        { title: "Intentionality", body: "Integrates the brand story directly into the logotype." },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl p-4 border"
                          style={{ background: "rgba(234,33,33,0.05)", borderColor: "rgba(234,33,33,0.15)" }}
                        >
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#ea2121" }}>{item.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Round 2 logo result */}
              <motion.div variants={fadeUp} className="mb-8">
                <div className="max-w-2xl mx-auto group">
                  <div
                    className="relative overflow-hidden rounded-3xl border"
                    style={{ borderColor: "rgba(255,255,255,0.10)", background: "#fff" }}
                  >
                    <Image
                      src="/igh/logo2L.png"
                      alt="Round 2 Final Logo — Ignite Haus Wordmark with H divider"
                      width={900}
                      height={450}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2">
                    Second direction — the central divider concept showing Ignite and Haus separated by the structural H mark
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <GlassCard accent>
                  <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#f29926" }}>The Final Direction</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This typographic approach became the chosen direction — the central H divider
                      carries genuine architectural meaning, the brand story is embedded directly into
                      the letterforms, and the identity system can scale across any medium while
                      maintaining its structured creative philosophy.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ COLOR SYSTEM ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Color System</SectionLabel>
                <OutlineHeading>Colors</OutlineHeading>
              </motion.div>

              {/* Color palette image */}
              <motion.div variants={fadeUp} className="mb-10">
                <div
                  className="max-w-3xl mx-auto overflow-hidden rounded-3xl border group"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <Image
                    src="/igh/colors.jpg"
                    alt="Ignite Haus Color Palette — #0e0e0e, #ea2121, #f29926, #e5e5e5"
                    width={1200}
                    height={680}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Color Palette" icon={Palette} />
                    <div className="space-y-4">
                      {[
                        { name: "Ignite Black", hex: "#0e0e0e", role: "Foundation, depth, authority", textColor: "#fff" },
                        { name: "Ignite Red", hex: "#ea2121", role: "Energy, passion, creative force — the spark", textColor: "#fff" },
                        { name: "Amber Glow", hex: "#f29926", role: "Warmth, transition, momentum between worlds", textColor: "#fff" },
                        { name: "Structural White", hex: "#e5e5e5", role: "Clarity, openness, the clean slate", textColor: "#000" },
                      ].map((color) => (
                        <div key={color.hex} className="flex items-center gap-4 group">
                          <div
                            className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-end pr-2 pb-1 transition-transform duration-300 group-hover:scale-110"
                            style={{ background: color.hex }}
                          >
                            <span className="text-[7px] font-mono opacity-60" style={{ color: color.textColor }}>
                              {color.hex}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground">{color.name}</p>
                            <p className="text-xs text-muted-foreground">{color.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Color Psychology" icon={Sparkles} amber />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The palette was designed to visually express the core brand tension —
                      the raw energy of Ignite against the dark solidity of Haus.
                    </p>
                    <div className="space-y-4">
                                            {[
                        {
                          color: "#ea2121",
                          title: "Red — The Ignite Side",
                          body: "Signals urgency, creative energy, and dynamic ideas firing.",
                        },
                        {
                          color: "#f29926",
                          title: "Amber — The Bridge",
                          body: "Bridges energy and structure—human, inviting, yet controlled.",
                        },
                        {
                          color: "#0e0e0e",
                          title: "Near-Black — The Haus Side",
                          body: "Anchors the brand. Evokes structural depth and solid foundation.",
                        },
                      ].map((item) => (
                        <div key={item.title} className="flex items-start gap-3.5">
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: item.color }}
                          />
                          <div>
                            <p className="text-xs font-bold text-foreground mb-1">{item.title}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
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

        {/* ══════════════════════ BRAND PERSONALITY + VISUAL PRINCIPLES ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Brand Voice & System</SectionLabel>
                <OutlineHeading>Personality & Principles</OutlineHeading>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Brand Personality" icon={Layers} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Every personality trait maps directly to a design decision — from the tension in
                      the typography to the structured geometry in the mark system.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brandPersonality.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs font-semibold px-3 py-1.5 transition-all duration-300"
                          style={{
                            color: "#ea2121",
                            background: "rgba(234,33,33,0.06)",
                            borderColor: "rgba(234,33,33,0.22)",
                          }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Visual Identity Principles" icon={LayoutGrid} amber />
                    <div className="space-y-4">
                      {visualPrinciples.map((p) => (
                        <div
                          key={p.title}
                          className="rounded-xl p-4 border transition-all duration-300"
                          style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}
                        >
                          <p className="text-xs font-bold text-foreground mb-1">{p.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Strategic opportunity card */}
              <motion.div variants={fadeUp}>
                <GlassCard accent>
                  <div className="text-center max-w-3xl mx-auto">
                    <CardHeading title="The Strategic Territory" icon={TrendingUp} />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                      <div
                        className="rounded-2xl px-6 py-3 text-center"
                        style={{ background: "rgba(242,153,38,0.10)", border: "1px solid rgba(242,153,38,0.25)" }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Not just</p>
                        <p className="text-sm font-bold" style={{ color: "#f29926" }}>Pure Creativity</p>
                      </div>
                      <div className="text-muted-foreground font-bold text-xl">+</div>
                      <div
                        className="rounded-2xl px-6 py-3 text-center"
                        style={{ background: "rgba(234,33,33,0.10)", border: "1px solid rgba(234,33,33,0.25)" }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Not just</p>
                        <p className="text-sm font-bold" style={{ color: "#ea2121" }}>Pure Structure</p>
                      </div>
                      <div className="text-muted-foreground font-bold text-xl">=</div>
                      <div
                        className="rounded-2xl px-6 py-3 text-center"
                        style={{ background: "linear-gradient(135deg, rgba(242,153,38,0.12), rgba(234,33,33,0.12))", border: "1px solid rgba(234,33,33,0.30)" }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Exactly</p>
                        <p className="text-sm font-bold text-foreground">Structured Creativity</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      This territory is highly relevant for startups, educational brands, creators, and digital businesses
                      — because they need both imagination and systems.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ KEY LEARNINGS ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Final Verdict</SectionLabel>
                <OutlineHeading>Key Learnings</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  Rebuilding a brand isn't about finding a logo that looks perfect on day one.
                  It's about building a visual playground where the brand can live.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {keyLearnings.map((item, i) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <GlassCard
                      className="h-full group transition-all duration-300"
                      accent={i === 0}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{
                            background: i % 2 === 0 ? "rgba(234,33,33,0.12)" : "rgba(242,153,38,0.12)",
                            border: i % 2 === 0 ? "1px solid rgba(234,33,33,0.25)" : "1px solid rgba(242,153,38,0.25)",
                          }}
                        >
                          <item.icon
                            className="w-4 h-4"
                            style={{ color: i % 2 === 0 ? "#ea2121" : "#f29926" }}
                          />
                        </div>
                        <h3 className="text-sm font-black font-headline uppercase tracking-wide text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>

              {/* Final brand statement */}
              <motion.div variants={fadeUp} className="max-w-3xl mx-auto w-full">
                <div
                  className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(234,33,33,0.10) 0%, rgba(242,153,38,0.08) 50%, rgba(234,33,33,0.06) 100%)",
                    border: "1px solid rgba(234,33,33,0.25)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(234,33,33,0.12) 0%, transparent 70%)", transform: "translate(-40%, -40%)" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(242,153,38,0.10) 0%, transparent 70%)", transform: "translate(40%, 40%)" }}
                  />

                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-6"
                    style={{ color: "#ea2121" }}
                  >
                    Final Brand Statement
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto relative z-10">
                    &ldquo;Ignite Haus exists at the intersection of creativity and structure, helping ambitious brands
                    transform ideas into meaningful systems, experiences, and growth. Through strategic thinking,
                    purposeful design, and scalable creative frameworks, Ignite Haus turns momentum into lasting impact.&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ RATING ══════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <RatingSection pageId="ignitehaus" pageTitle="this Ignite Haus Case Study" />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
