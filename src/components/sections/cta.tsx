
"use client";

import { ContactForm } from "@/app/contact/contact-form";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12 lg:p-16"
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div 
              className="text-center md:text-left"
              variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4" variants={itemVariants}>
                Have a project in mind?
              </motion.h2>
              <motion.p className="text-muted-foreground mb-8 md:mb-0" variants={itemVariants}>
                Let's create something amazing together. Fill out the form, and I'll get back to you to discuss your ideas.
              </motion.p>
            </motion.div>
            <motion.div className="w-full" variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
