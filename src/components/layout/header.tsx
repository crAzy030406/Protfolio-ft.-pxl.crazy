"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const isScrolled = currentScrollY > 10;
      setScrolled(isScrolled);
      
      const maxScroll = 300;
      const opacity = Math.min(currentScrollY / maxScroll, 0.9);
      setBgOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300"
      )}
      style={{
        backgroundColor: `hsla(var(--background), ${bgOpacity})`,
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <Button asChild variant="outline">
              <Link href="/contact">
                Let's Talk
              </Link>
            </Button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
