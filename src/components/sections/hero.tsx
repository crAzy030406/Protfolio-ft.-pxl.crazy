
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const profileImage1 = PlaceHolderImages.find(img => img.id === 'profile-photo');
  const profileImage2 = PlaceHolderImages.find(img => img.id === 'profile-photo-2');

  const handleFlip = () => setIsFlipped(prev => !prev);

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
                className="relative w-72 h-[360px] md:w-80 md:h-[400px] justify-self-center md:justify-self-start cursor-pointer"
                style={{ perspective: '1200px' }}
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
                onClick={handleFlip}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Front of the card */}
                  <div className="absolute w-full h-full bg-secondary rounded-3xl flex items-center justify-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    <div className="w-[95%] h-[95%] bg-noisy-background rounded-3xl flex flex-col justify-center items-center p-8 font-helvetica">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Name</p>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Ardhendu Halder</h3>
                        <p className="text-sm text-muted-foreground">Age</p>
                        <h3 className="text-2xl font-bold text-foreground mb-4">19</h3>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <h3 className="text-2xl font-bold text-foreground mb-4">5 Yrs. +</h3>
                        <p className="text-sm text-muted-foreground">Based in</p>
                        <h3 className="text-2xl font-bold text-foreground">Kolkata</h3>
                      </div>
                    </div>
                  </div>

                  {/* Back of the card */}
                  <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    {profileImage2 && (
                        <Image
                            src={profileImage2.imageUrl}
                            alt={profileImage2.description}
                            fill
                            className="rounded-3xl object-cover"
                            data-ai-hint={profileImage2.imageHint}
                        />
                    )}
                  </div>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
