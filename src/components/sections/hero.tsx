import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const profilePhoto = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 z-10">
            <div className="flex items-baseline">
              <span className="text-2xl font-headline font-bold text-muted-foreground" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                I'm
              </span>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-4">
                  <h1 id="hero-title-1" className="text-6xl md:text-8xl lg:text-[12rem] leading-none font-bold font-headline tracking-tighter text-left">
                    CRAZY
                  </h1>
                  <h1 id="hero-title-2" className="text-2xl md:text-3xl lg:text-4xl font-normal font-headline tracking-tighter text-muted-foreground whitespace-nowrap">
                    PSYCHO DESIGNER
                  </h1>
                </div>
              </div>
            </div>
            <p className="max-w-lg text-muted-foreground md:text-lg mt-4">
              I'm a passionate designer specializing in creating bold, engaging visuals that tell a story. From branding to digital content, I bring ideas to life with creativity and precision.
            </p>
            <div className="flex gap-4 mt-4">
            </div>
          </div>
          <div className="relative flex items-center justify-center">
             {profilePhoto && (
              <div className="relative w-72 h-[360px] md:w-96 md:h-[480px]">
                <Image
                  src={profilePhoto.imageUrl}
                  alt={profilePhoto.description}
                  fill
                  className="rounded-3xl object-cover relative z-10 border-4 border-background"
                  data-ai-hint={profilePhoto.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
