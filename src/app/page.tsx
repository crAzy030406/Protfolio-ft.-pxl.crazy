import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Agency from '@/components/sections/agency';
import Portfolio from '@/components/sections/portfolio';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Agency />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
