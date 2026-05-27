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
  "Visual Identity Design",
  "Logo Design",
  "Brand Direction",
  "Typography System",
  "Color System",
];

const brandPersonality = [
  "Premium",
  "Trustworthy",
  "Calm",
  "Mature",
  "Luxurious",
  "Spiritually rooted",
  "Modern yet traditional",
];

const coreAttributes = [
  "Premium & Luxury",
  "Trustworthy",
  "Minimal",
  "Calm",
  "Bold yet Controlled",
  "Consistent",
];

const strategyPillars = [
  "Calm visual balance to avoid visual overload",
  "Strong memorability through bold symbolic mark",
  "Premium contrast via gold and deep purple palette",
  "Emotionally resonant typography for mature audiences",
  "Traditional emotional familiarity with modern aesthetics",
  "Platform-consistent identity across digital touchpoints",
];

const primaryColors = [
  { name: "Dreamy Purple", hex: "#341F60" },
  { name: "Luxury Gold", hex: "#E8CF8D" },
];

const supportingColors = [
  { name: "Soft Beige", hex: "#FBF0D0" },
  { name: "Warm Gold", hex: "#B68423" },
  { name: "Muted Purple", hex: "#5D5797" },
  { name: "Deep Purple", hex: "#241637" },
];

const keyLearnings = [
  {
    title: "Emotional Familiarity",
    body: "Emotional familiarity improves trust. Audiences in spiritual categories connect deeper with identity systems that echo cultural references and visual comfort.",
  },
  {
    title: "Memorability First",
    body: "Memorability is essential in crowded digital markets. A refined but forgettable mark loses to a bolder, character-driven visual symbol every time.",
  },
  {
    title: "Premium × Traditional",
    body: "Premium branding can coexist with traditional symbolism. The tension between the two, when resolved well, creates a rare and distinctive identity space.",
  },
  {
    title: "Evolving Systems",
    body: "Strong visual systems evolve with the brand over time. The identity was designed with flexibility built in — not as a frozen artifact, but as a living system.",
  },
];

/* numbered final identity images 0–9 */
const finalImages = [
  { src: "/taravoxx/0.jpg", alt: "Brand Application 0" },
  { src: "/taravoxx/1.jpg", alt: "Brand Application 1" },
  { src: "/taravoxx/2.jpg", alt: "Brand Application 2" },
  { src: "/taravoxx/3.jpg", alt: "Brand Application 3" },
  { src: "/taravoxx/4.jpg", alt: "Brand Application 4" },
  { src: "/taravoxx/5.jpg", alt: "Brand Application 5" },
  { src: "/taravoxx/6.jpg", alt: "Brand Application 6" },
  { src: "/taravoxx/8.jpg", alt: "Brand Application 8" },
  { src: "/taravoxx/9.jpg", alt: "Brand Application 9" },
];

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */
export default function TaraVoxxCaseStudy() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        // Scoping the entire page to the brand's luxurious #59247F dreamy purple theme
        ["--primary" as any]: "275 68% 65%", // Radiant luminous purple aligned with #59247F for optimal text contrast
        ["--ring" as any]: "275 68% 65%",
      }}
    >
      {/* Dynamic style override to theme the global floating background gradient balls to the exact #59247F purple */}
      <style dangerouslySetInnerHTML={{ __html: `
        .glowing-ball {
          background-color: hsl(275 56% 32% / 0.65) !important;
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
                <SectionLabel>Case Study — Brand Design</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-headline uppercase leading-none mb-6 text-center whitespace-nowrap"
                style={{
                  WebkitTextStroke: "1px hsl(var(--foreground))",
                  color: "transparent",
                }}
              >
                Tara Voxx
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug max-w-3xl"
              >
                Designing a Premium Visual Identity for a Modern Astrology
                Consultancy Brand
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-3xl mx-auto"
              >
                Creating a luxury-focused brand identity system for an emerging
                astrology consultancy positioned to compete with modern digital
                astrology platforms in India.
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
                        className="text-primary text-[10px] sm:text-xs bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(89,36,127,0.12)]"
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
                    Astrology Consultancy / Numerology / Vastu
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">
                    Platform
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Digital-first Brand
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
                  Before touching a single design tool, I needed to fully understand what Tara Voxx is,
                  who it speaks to, and where it wants to go. This phase shaped every decision that followed.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* What is Tara Voxx */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="What is Tara Voxx?" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Tara Voxx is a digitally-native astrology consultancy — think along the lines of
                      well-known Indian platforms like <strong className="text-foreground">AstroTalk</strong>, but
                      in its founding phase. It operates entirely online with no physical presence, yet runs
                      with a structured team actively scaling its presence across social media, primarily Instagram.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The brand sells consultancy services and operates across the full spectrum of astrological
                      disciplines — <strong className="text-foreground">vastu, numerology, and spiritual guidance</strong> —
                      positioning itself as a trusted authority in a space dominated by belief, emotion, and cultural connection.
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Who it speaks to */}
                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Who it speaks to" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The audience sits at a very specific emotional intersection — believers in astrology,
                      vastu, and numerology as a <strong className="text-foreground">science of life</strong>.
                      This includes creators, spiritually inclined individuals, and older demographics who
                      look to celestial systems for guidance rather than conventional logic.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Believers", desc: "People who follow astrology as a trusted science" },
                        { label: "Traditional audience", desc: "40+ demographic guided by faith and ritual" },
                        { label: "Spiritual seekers", desc: "Those navigating life decisions through vastu & numerology" },
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
                      { q: "Field", a: "Vastu & Numerology" },
                      { q: "Emotion Created", a: "Trust & Belief" },
                      { q: "Positioning", a: "Premium" },
                      { q: "Tone", a: "Mature & Calm" },
                      { q: "Identity Style", a: "Traditional × Modern" },
                      { q: "Market Type", a: "Niche-based" },
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
                      <CardHeading title="Why it exists" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Tara Voxx entered the market with a clear ambition — to mark their territory in an increasingly
                        competitive space dominated by established brands. They needed a visual identity that could hold its
                        ground against bigger names while building genuine trust from the ground up.
                      </p>
                    </div>
                    <div>
                      <CardHeading title="What makes it different" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The brand's core differentiator is its{" "}
                        <strong className="text-foreground">luxury and premium personality</strong>. In a category where
                        most brands lean into mysticism or visual noise, Tara Voxx chose restraint, refinement, and trust
                        as its competitive moat — making their clients feel secure, not just curious.
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
                      Tara Voxx is a digitally native astrology consultancy brand
                      offering services related to astrology consultation, vastu,
                      numerology, and spiritual guidance. The brand was in its early
                      growth stage and aimed to establish itself as a trustworthy and
                      premium alternative to rapidly growing astrology platforms in
                      India.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      The objective was to create a visual identity system that could
                      build trust, create strong recall, feel premium and mature, and
                      emotionally connect with its niche audience.
                    </p>
                  </div>

                  {/* Right Objectives Column */}
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1 lg:mt-6">
                      Core Objectives
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                      {[
                        { label: "Build trust", desc: "Through premium visual language and consistent identity" },
                        { label: "Strong recall", desc: "Via a bold symbolic mark with celestial inspiration" },
                        { label: "Feel premium", desc: "Luxury palette and refined typographic system" },
                        { label: "Emotional connect", desc: "Culturally familiar aesthetics for the target audience" },
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
                    Primarily users between the ages of{" "}
                    <strong className="text-foreground">16–55</strong> who strongly
                    resonate with astrology, spirituality, vastu, and traditional
                    belief systems.
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Age Group", value: "16 – 55 years" },
                      { label: "Belief System", value: "Astrology, Vastu, Numerology" },
                      { label: "Geography", value: "India (primarily urban & semi-urban)" },
                      { label: "Device Context", value: "Mobile-first, digital platforms" },
                      { label: "Decision Driver", value: "Trust, familiarity & authority" },
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
                    spiritual trust and modern premium aesthetics — familiar enough to
                    earn credibility, refined enough to stand apart.
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
                    from the weight of the typeface to the depth of the purple in the
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
                      Since the brand was in its initial phase, it lacked a
                      recognizable visual identity that could represent its positioning
                      in the astrology and spirituality market.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      The client requested a logo system inspired by planets, stars,
                      orbital motion, and celestial symbolism. The primary challenge
                      was balancing luxury aesthetics, spiritual symbolism, trust
                      perception, and visual simplicity simultaneously.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      As a designer with a minimal design approach, the challenge was
                      to avoid creating an identity that felt overly decorative or
                      visually crowded while still preserving the emotional expectations
                      of the target audience.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="Core Design Attributes" icon={Compass} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Every design decision in this project was filtered through six
                      core attributes that defined what the Tara Voxx identity had to
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
                      The identity needed to feel emotionally familiar to a diverse
                      audience while maintaining the sophistication of a modern premium
                      brand. Because the target audience primarily consisted of users
                      aged 16–55, overly vibrant colors and aggressive typography were
                      intentionally avoided.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      The strategy focused on calm visual balance, strong memorability,
                      premium contrast, and emotionally resonant typography.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The visual language was designed to combine{" "}
                      <strong className="text-foreground">
                        traditional emotional familiarity
                      </strong>{" "}
                      with{" "}
                      <strong className="text-foreground">
                        modern premium aesthetics
                      </strong>{" "}
                      — a deliberate tension that creates a distinctive brand space
                      within the category.
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

        {/* ══════════════════════ INITIAL EXPLORATION ══════════════════════ */}
        <section className="w-full py-16 md:py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center flex flex-col items-center">
                <SectionLabel>Design Exploration</SectionLabel>
                <OutlineHeading>Initial Exploration</OutlineHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
                  The first logo direction was built using minimal celestial
                  references, elegant typography, and restrained visual composition.
                  Although the identity appeared visually refined, it lacked strong
                  memorability and failed to create a lasting emotional impact.
                </p>
              </motion.div>

              {/* Two exploration images tightly side by side */}
              <div className="flex flex-row justify-center items-center gap-8 flex-wrap mb-10">
                {[
                  {
                    src: "/taravoxx/initial failed 1.jpg",
                    alt: "Initial Logo Direction 1 — rejected",
                    label: "Rejected",
                  },
                  {
                    src: "/taravoxx/initial failed 2.jpg",
                    alt: "Initial Logo Direction 2 — rejected",
                    label: "Rejected",
                  },
                ].map((img) => (
                  <motion.div
                    key={img.src}
                    variants={fadeUp}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 max-w-[240px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={560}
                        height={420}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="text-center text-[10px] font-bold text-destructive/40 line-through decoration-destructive/30 mt-3 uppercase tracking-widest">
                      {img.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp}>
                <GlassCard className="border-primary/20 bg-primary/[0.01] hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(89,36,127,0.05)]">
                  <div className="flex items-start gap-4">
                    <CardIcon icon={Lightbulb} />
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm mb-2">
                        Key Insight from this phase
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Minimal aesthetics alone were not enough for strong brand recall
                        in this category. The spiritual and belief-driven market demands
                        a visual anchor — a mark that carries weight and symbolic
                        meaning, not just visual restraint.
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
                  The identity was redesigned with a bolder and more recognizable
                  visual structure. A star-inspired visual symbol was developed to
                  create instant recall, stronger visibility, and a premium visual
                  presence.
                </p>
              </motion.div>

              {/* Grid of final visuals — natural ratio, moderate max-width */}
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
                    The combination of <strong className="text-foreground">dreamy purple</strong>,{" "}
                    <strong className="text-foreground">luxury gold</strong>, and sharp
                    celestial geometry helped establish a visual identity that felt
                    premium, spiritual, memorable, and trustworthy. As the brand
                    evolved, additional graphic elements and supporting visuals were
                    gradually introduced into the system to expand the identity
                    consistently across platforms.
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

              {/* Single typo.jpg — smaller, natural ratio, centered */}
              <motion.div variants={fadeUp} className="mb-10">
                <div className="max-w-2xl mx-auto overflow-hidden rounded-3xl border border-white/10 group">
                  <Image
                    src="/taravoxx/typo.jpg"
                    alt="Tara Voxx Typography System"
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
                    <CardHeading title="Hindi Typography" icon={Type} />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      The "Tara" wordmark was designed using the{" "}
                      <strong className="text-foreground">
                        AMS Handwriting typeface
                      </strong>{" "}
                      in Hindi styling to create emotional connection, cultural
                      familiarity, and a sense of spiritual authenticity.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      This helped the audience relate to the brand more intuitively —
                      the Hindi script acted as an immediate cultural signal that
                      positioned Tara Voxx as rooted rather than imported.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <GlassCard className="h-full">
                    <CardHeading title="English Typography" icon={Type} />
                    <div className="space-y-5">
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-all duration-300">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Primary — Futura
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Tall and structured appearance reinforces luxury,
                          sophistication, and modernity. Used for headlines and the
                          brand wordmark.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-all duration-300">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Secondary — Helvetica
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Used with thinner weights to maintain calmness, readability,
                          and informational clarity in body copy and supporting text.
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
                      The primary pair creates an immediate premium impression —
                      the deep purple anchors spiritual authority while gold delivers
                      luxury contrast.
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
                <GlassCard className="border-primary/10 hover:border-primary/25 transition-all duration-300 shadow-[0_0_20px_rgba(89,36,127,0.05)]">
                  <CardHeading title="Color Psychology" icon={Palette} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        color: "#341F60",
                        title: "Dreamy Purple",
                        body: "Communicates spirituality, luxury, and premium perception. Deep enough to feel authoritative, dreamy enough to feel mystical.",
                      },
                      {
                        color: "#E8CF8D",
                        title: "Luxury Gold",
                        body: "Introduced as a complementary contrast to purple, creating a visually rich yet balanced identity. Gold signals credibility and prosperity.",
                      },
                      {
                        color: "#FBF0D0",
                        title: "Soft Beige",
                        body: "A tonal bridge that softens the palette and provides breathing room across marketing materials and digital backgrounds.",
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
                    src: "/taravoxx/logo dark.jpg",
                    label: "Dark Variant",
                    bg: "#241637",
                    isPhoto: false,
                  },
                  {
                    src: "/taravoxx/pfp.jpg",
                    label: "Profile Photo",
                    bg: "#241637",
                    isPhoto: true,
                  },
                  {
                    src: "/taravoxx/logo light.jpg",
                    label: "Light Variant",
                    bg: "#E8CF8D",
                    isPhoto: false,
                  },
                ].map((v) => (
                  <motion.div key={v.label} variants={fadeUp} className="flex flex-col items-center gap-3 group/item">
                    <div
                      className="rounded-2xl overflow-hidden group border border-white/5 group-hover/item:border-primary/30 shadow-lg flex items-center justify-center transition-all duration-300 animate-none"
                      style={{
                        backgroundColor: v.bg,
                        padding: v.isPhoto ? "0px" : "24px",
                        width: "228px",
                        height: "228px",
                      }}
                    >
                      {v.isPhoto ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={v.src}
                            alt={`Tara Voxx ${v.label}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      ) : (
                        <Image
                          src={v.src}
                          alt={`Tara Voxx ${v.label}`}
                          width={240}
                          height={180}
                          className="h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                          style={{ width: "180px" }}
                        />
                      )}
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
                      The final identity significantly improved the brand's visual
                      recognition and trust perception. As the identity became more
                      consistent across platforms, audience appreciation increased,
                      trust perception strengthened, and client conversions improved
                      over time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      The bold visual direction helped Tara Voxx establish a more
                      memorable presence within the highly competitive astrology content
                      space.
                    </p>
                  </GlassCard>

                  <GlassCard className="border-primary/20 bg-primary/[0.01] hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(89,36,127,0.05)]">
                    <CardHeading title="Key Outcome" icon={TrendingUp} />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The identity successfully translated the brand's core values of
                      belief, trust, spirituality, and premium guidance into a{" "}
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
                      The results were beyond what was projected. The appreciation that came in — from the client team, from
                      their audience, and from the community around the brand — was immediate and sustained. Client conversion
                      rates climbed. Trust in the brand deepened. And the visual presence that Tara Voxx now commands in their
                      space is unmistakably their own.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The positive energy that surrounded the final identity felt almost poetic — perfectly aligned with
                      what the brand itself stands for:{" "}
                      <strong className="text-foreground">Tara Voxx. Belief. Faith. Vastu.</strong>
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
                          label: "Minimal design has limits",
                          body: "In belief-driven categories, restraint alone cannot create recall. The mark must carry symbolic weight, not just visual elegance.",
                        },
                        {
                          label: "Color is language",
                          body: "Choosing gold and dreamy purple wasn't an aesthetic call — it was a psychological one. Maximum contrast, culturally resonant, age-appropriate.",
                        },
                        {
                          label: "Script is culture",
                          body: "Using Hindi typography wasn't decoration. It was a trust mechanism — a cultural handshake between the brand and its audience.",
                        },
                        {
                          label: "First direction will fail",
                          body: "The initial logo looked good. It wasn't enough. The willingness to discard refined work and start over is what made the final outcome possible.",
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
                <div className="bg-white/5 border border-primary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden text-left shadow-[0_0_30px_rgba(89,36,127,0.06)] hover:border-primary/30 transition-all duration-300">
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 60% 80% at 0% 50%, #341F60 0%, transparent 70%)",
                    }}
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Designer's Note</p>
                  <p className="text-foreground text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                    &ldquo;This wasn't just a logo project. It was a trust-building exercise in visual form. The brand
                    needed to walk into a room of believers and immediately feel like it belonged — like it had
                    always been there. That's what we built.&rdquo;
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
                  This project demonstrated that effective branding in
                  spiritual and belief-driven industries requires more than
                  aesthetic minimalism.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {keyLearnings.map((item, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <GlassCard className="hover:border-primary/40 hover:shadow-[0_0_25px_rgba(89,36,127,0.16)] transition-all duration-300 h-full text-left">
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
                    Let's build something premium and memorable together.
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
        <RatingSection pageId="taravoxx" pageTitle="the Tara Voxx Brand Identity Project" />
      </main>

      <Footer />
    </div>
  );
}
