"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAgencyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const agencySection = document.getElementById('agency');
    if (agencySection) {
      agencySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300"
      )}
    >
      <div
        className={cn(
          "container flex h-16 items-center rounded-2xl transition-all duration-300",
          scrolled ? 'bg-card/80 border border-border/40 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        )}
      >
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-normal sm:inline-block font-headline tracking-widest text-lg">
              pxl.crazy
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost">
              <a href="#works" onClick={handleWorksClick}>My Works</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#agency" onClick={handleAgencyClick}>My Agency</a>
            </Button>
          </nav>
          <Button asChild variant="outline" className="bg-background/50">
            <Link href="/contact">
              Let's Talk
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
