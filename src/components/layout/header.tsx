"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      const scrollY = window.scrollY;
      const maxScroll = 300; // The scroll distance over which the opacity will increase
      const opacity = Math.min(scrollY / maxScroll, 0.7); // Cap opacity at 0.7 (70%)
      setBgOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: `rgba(21, 21, 21, ${bgOpacity})`,
        borderBottom: scrolled ? '1px solid hsl(var(--border) / 0.4)' : '1px solid transparent',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-normal sm:inline-block font-headline tracking-widest">
              pxl.crazy
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild variant="outline">
              <Link href="/contact">
                Let's Talk
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
