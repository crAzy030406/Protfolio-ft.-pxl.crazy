
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ContactForm } from './contact-form';
import { motion } from 'framer-motion';

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
        className="flex-grow container mx-auto px-4 py-16 sm:py-24"
      >
        <motion.div className="max-w-2xl mx-auto text-center" variants={sectionVariants}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
            Contact Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.div className="max-w-2xl mx-auto mt-16" variants={sectionVariants}>
          <ContactForm />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}
