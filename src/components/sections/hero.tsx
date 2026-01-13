
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImagesData from '@/app/lib/hero-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import DetailsCard from '@/components/shared/details-card';
import { User, Code } from 'lucide-react';

const HeroImages: ImagePlaceholder[] = heroImagesData.heroImages;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

export default function Hero() {
  const profileImage1 = HeroImages.find(img => img.id === 'profile-photo');
  
  const details = [
    { icon: User, label: "Name", value: "Ardhendu Halder" },
    { icon: User, label: "Age", value: "19" },
    { icon: Code, label: "Experience", value: "5 Yrs. +" },
    { icon: User, label: "Based in", value: "Kolkata" },
  ];

  return (
    <section id="about" className="relative w-full pt-40 pb-20 md:py-32 lg:py-40 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 opacity-15"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15, transition: { duration: 1.5, ease: "easeOut" } }}
        style={{
          background: 'radial-gradient(circle at 50% 30%, hsl(var(--primary)) 0%, transparent 40%)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="z-10 flex flex-col items-center"
            >
              <motion.div className="relative flex flex-col items-center" variants={itemVariants}>
                <div className="flex lg:flex-row lg:items-center lg:gap-1 flex-col">
                  <h2 className="lg:hidden text-lg sm:text-xl md:text-3xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap opacity-70">
                      I'm
                  </h2>
                  <h1 id="hero-title-1" className="text-5xl sm:text-6xl md:text-8xl leading-none font-bold font-headline tracking-[0.3em] lg:tracking-[0.3em]">
                    CRAZY
                  </h1>
                  <div className="hidden lg:flex flex-col lg:-mt-2">
                    <h2 className="text-lg sm:text-xl md:text-3xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap opacity-70">
                        I'm
                    </h2>
                    <h1 id="hero-title-2" className="text-lg sm:text-xl md:text-3xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                      Visual disruptor
                    </h1>
                  </div>
                  <h1 id="hero-title-2" className="lg:hidden mt-4 text-lg sm:text-xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                    Visual disruptor
                  </h1>
                </div>
              </motion.div>

              <motion.p className="mt-4 md:mt-9 text-muted-foreground md:text-lg lg:max-w-none" variants={itemVariants}>
                I'm a passionate designer specializing in creating bold, engaging visuals that tell a story. From branding to digital content, I bring ideas to life with creativity and precision.
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full max-w-4xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                {profileImage1 && (
                  <motion.div className="relative w-72 h-[360px] md:w-80 md:h-[400px] justify-self-center md:justify-self-end" variants={imageVariants}>
                    <Image
                      src={profileImage1.imageUrl}
                      alt={profileImage1.description}
                      fill
                      className="rounded-3xl object-cover"
                      data-ai-hint={profileImage1.imageHint}
                      priority
                    />
                  </motion.div>
                )}
                <motion.div 
                  className="relative w-72 h-[360px] md:w-80 md:h-[400px] justify-self-center md:justify-self-start"
                  variants={imageVariants}
                >
                  <DetailsCard details={details} />
                </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
