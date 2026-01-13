
"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const agencyMembers = PlaceHolderImages.filter(img => img.category === 'agency');
const founder1 = agencyMembers.find(m => m.id === 'profile-photo');
const founder2 = agencyMembers.find(m => m.id === 'profile-photo-2');

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Agency() {
  return (
    <section id="agency" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h3 
          className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2"
          variants={textVariants}
        >
          my agency
        </motion.h3>
        <motion.h2
          className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
          style={{
            WebkitTextStroke: "1px hsl(var(--foreground))",
            color: "transparent",
          }}
          variants={textVariants}
        >
          IGNITE HAUS
        </motion.h2>
        <motion.p className="max-w-2xl mx-auto text-muted-foreground mb-12" variants={textVariants}>
          Welcome to Ignite Haus, where creativity meets strategy. We are a passionate team dedicated to building impactful brands and crafting stunning visual experiences. From concept to execution, we ignite your vision.
        </motion.p>

        <motion.div className="mt-24" variants={textVariants}>
            <Button asChild size="lg" style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))'
                }}
                className="hover:bg-accent"
            >
            <Link href="https://www.instagram.com/ignite.haus?igsh=Yjk3bmdvYzF5aXE0&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Visit Our Instagram
            </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
