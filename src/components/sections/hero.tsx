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
          <div className="z-10 flex flex-col items-center text-center md:items-start md:text-left lg:ml-[200px]">
            
            <div className="relative flex flex-col items-center md:items-start">
              <span className="md:hidden mb-2 text-xl font-light text-muted-foreground/70 opacity-70">
                I'm
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:gap-1">
                <h1 id="hero-title-1" className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold font-headline tracking-[0.3em] md:tracking-[0.3em]">
                  CRAZY
                </h1>
                <div className="hidden md:flex flex-col">
                   <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap opacity-70">
                      I'm
                   </h2>
                   <h1 id="hero-title-2" className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                     Visual disruptor
                   </h1>
                </div>
                 <h1 id="hero-title-2" className="md:hidden mt-4 text-lg sm:text-xl font-normal font-headline tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                  Visual disruptor
                </h1>
              </div>
            </div>

            <p className="mt-4 md:mt-9 text-muted-foreground md:text-lg lg:max-w-none">
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
