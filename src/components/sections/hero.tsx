import Image from 'next/image';

export default function Hero() {

  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 z-10 text-center items-center md:text-left md:items-start">
            <div className="flex items-baseline">
              <span className="text-xl md:text-2xl font-headline font-bold text-muted-foreground" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                I'm
              </span>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                  <h1 id="hero-title-1" className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold font-headline tracking-tighter">
                    CRAZY
                  </h1>
                  <h1 id="hero-title-2" className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal font-headline tracking-[0.2em] md:tracking-tighter text-muted-foreground whitespace-nowrap">
                    PSYCHO DESIGNER
                  </h1>
                </div>
              </div>
            </div>
            <p className="max-w-lg text-muted-foreground md:text-lg mt-4">
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
