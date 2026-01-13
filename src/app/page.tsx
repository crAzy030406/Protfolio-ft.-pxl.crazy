
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Agency from '@/components/sections/agency';
import Portfolio from '@/components/sections/portfolio';
import CTA from '@/components/sections/cta';
import { motion } from 'framer-motion';
import ContactDetails from '@/components/sections/contact-details';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MotionSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    className={className}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MotionSection><Hero /></MotionSection>
        <MotionSection><Skills /></MotionSection>
        <MotionSection><Agency /></MotionSection>
        
        {/* The "My Works" section is intentionally not animated as requested */}
        <Portfolio />

        <MotionSection><ContactDetails /></MotionSection>
        <MotionSection><CTA /></MotionSection>
      </main>
      <Footer />
    </div>
  );
}
