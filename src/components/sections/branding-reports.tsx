"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Case studies
const reportsData = [
  {
    id: 1,
    title: "Tara Voxx",
    description: "Premium visual identity design and celestial-inspired branding system for a modern astrology consultancy.",
    type: "Brand Design",
    icon: BookOpen,
    link: "/case-studies/tara-voxx",
  },
  {
    id: 2,
    title: "Creatiq Media",
    description: "Comprehensive rebranding, media production, and digital identity framework for a modern creative agency.",
    type: "Rebranding & Production",
    icon: FileText,
    link: "/case-studies/creatiq-media",
  },
];

export default function BrandingReports() {
  return (
    <section
      id="branding-reports"
      className="w-full py-20 md:py-32 bg-gradient-to-b from-transparent to-background/50"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h3
          className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Research & Strategy
        </motion.h3>

        <motion.h2
          className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
          style={{
            WebkitTextStroke: "1px hsl(var(--foreground))",
            color: "transparent",
          }}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground mb-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore comprehensive reports, design systems, and in-depth strategy guides built for modern branding visual architecture.
        </motion.p>

        {/* Reports Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reportsData.map((report) => {
            const IconComponent = report.icon;
            return (
              <Link
                key={report.id}
                href={report.link}
                className="bg-black/20 backdrop-blur-md border border-white/10 hover:border-primary/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_25px_rgba(132,199,41,0.15)]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full border border-white/10 text-muted-foreground">
                      {report.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {report.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {report.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                  <span>{report.link === '#' ? 'Coming Soon' : 'Read Case Study'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
