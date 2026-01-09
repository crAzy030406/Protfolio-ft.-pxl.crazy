import Image from 'next/image';

export default function Hero() {

  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          background: 'radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 40%)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left">
            
            <div className="relative flex flex-col items-center md:items-start">
              <span className="md:hidden mb-2 text-xl font-light text-muted-foreground/70">
                I'm
              </span>
              <span
                className="hidden md:block mb-2 text-xl font-light text-muted-foreground/70 md:font-bold md:text-muted-foreground md:text-2xl md:absolute md:-left-4 md:top-10 md:-rotate-90 md:transform-origin-bottom-left md:mb-0"
              >
                I'm
              </span>
              <div className="flex flex-col md:ml-8 lg:ml-12">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-1">
                  <h1 id="hero-title-1" className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold font-headline tracking-[0.2em] md:tracking-widest">
                    CRAZY
                  </h1>
                  <h1 id="hero-title-2" className="mt-4 md:mt-0 text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal font-headline tracking-[0.2em] md:tracking-tighter text-muted-foreground whitespace-nowrap">
                    PSYCHO DESIGNER
                  </h1>
                </div>
              </div>
            </div>

            <p className="max-w-lg mt-4 md:mt-6 text-muted-foreground md:text-lg">
              I'm a passionate designer specializing in creating bold, engaging visuals that tell a story. From branding to digital content, I bring ideas to life with creativity and precision.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-[360px] md:w-80 md:h-[400px]">
                <Image
                  src="/profile1.png"
                  alt="Designer's profile photo"
                  fill
                  className="rounded-3xl object-cover"
                  data-ai-hint="man glasses"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
