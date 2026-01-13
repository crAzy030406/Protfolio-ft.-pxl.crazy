
"use client";

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactDetails() {
  return (
    <section id="contact-info" className="w-full pb-20 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12 lg:p-16"
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-8" variants={itemVariants}>
              Get In Touch
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <motion.div variants={itemVariants}>
                <a href="mailto:work.pxlcrazy@gmail.com" className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                  <span>work.pxlcrazy@gmail.com</span>
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a href="tel:+919064749810" className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-6 w-6" />
                  <span>+91 9064749810</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
