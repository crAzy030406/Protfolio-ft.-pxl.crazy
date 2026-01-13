
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImagesData from '@/app/lib/hero-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const HeroImages: ImagePlaceholder[] = heroImagesData.heroImages;

export default function Hero() {
  const profileImage1 = HeroImages.find(img => img.id === 'profile-photo');
  const profileImage2 = HeroImages.find(img => img.id === 'profile-photo-2');

  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          background: 'radial-gradient(circle at 50% 30%, hsl(var(--primary)) 0%, transparent 40%)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center text-center">
          <div className="z-10 flex flex-col items-center">
            
            <div className="relative flex flex-col items-center">
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
            </div>

            <p className="mt-4 md:mt-9 text-muted-foreground md:text-lg lg:max-w-none">
              I'm a passionate designer specializing in creating bold, engaging visuals that tell a story. From branding to digital content, I bring ideas to life with creativity and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              {profileImage1 && (
                <div className="relative w-72 h-[360px] md:w-80 md:h-[400px] justify-self-center md:justify-self-end">
                  <Image
                    src={profileImage1.imageUrl}
                    alt={profileImage1.description}
                    fill
                    className="rounded-3xl object-cover"
                    data-ai-hint={profileImage1.imageHint}
                  />
                </div>
              )}
              <div 
                className="relative w-72 h-[360px] md:w-80 md:h-[400px] justify-self-center md:justify-self-start"
              >
                <div className="absolute w-full h-full bg-transparent rounded-3xl flex items-center justify-center border border-white/20">
                    <div className="w-full h-full bg-black/10 backdrop-blur-md rounded-3xl flex flex-col justify-center items-center p-8 font-helvetica">
                    <div className="text-center">
                        <p className="text-sm text-white/70">Name</p>
                        <h3 className="text-2xl font-bold text-white mb-4">Ardhendu Halder</h3>
                        <p className="text-sm text-white/70">Age</p>
                        <h3 className="text-2xl font-bold text-white mb-4">19</h3>
                        <p className="text-sm text-white/70">Experience</p>
                        <h3 className="text-2xl font-bold text-white mb-4">5 Yrs. +</h3>
                        <p className="text-sm text-white/70">Based in</p>
                        <h3 className="text-2xl font-bold text-white">Kolkata</h3>
                    </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
