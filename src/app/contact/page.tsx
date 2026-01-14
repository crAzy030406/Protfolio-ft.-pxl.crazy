
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="flex-grow container mx-auto px-4 py-16 sm:py-24 flex items-center justify-center"
      >
        <div className="w-full max-w-2xl">
            <motion.div className="text-center" variants={sectionVariants}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Have a project in mind or just want to say hi? Reach out to me directly via email or WhatsApp.
              </p>
            </motion.div>
            <motion.div 
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4" 
              variants={sectionVariants}
            >
                <Button asChild size="lg" className="w-full sm:w-auto" style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))'
                }}>
                    <a href="mailto:work.pxlcrazy@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Mail Me
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="https://wa.me/919064749810" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        Message on WhatsApp
                    </Link>
                </Button>
            </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
