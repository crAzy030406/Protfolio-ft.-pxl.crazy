
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Header() {
  
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
          'bg-black/50 backdrop-blur-md border border-white/20 shadow-lg'
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
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="/#works" onClick={(e) => handleScrollClick(e, 'works')}>My Works</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="/#agency" onClick={(e) => handleScrollClick(e, 'agency')}>My Agency</a>
            </Button>
          </nav>
          <Button asChild variant="outline" className="hidden md:inline-flex border-white/20 bg-black/20 hover:bg-white/10">
            <Link href="/contact">
              Let's Talk
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/20 bg-black/20 hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 border-l-border/50 backdrop-blur-lg">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 text-lg font-medium mt-16">
                  <SheetClose asChild>
                    <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="/#works" onClick={(e) => {
                        const worksSection = document.getElementById('works');
                        if (worksSection) {
                            handleScrollClick(e, 'works')
                        } else {
                            window.location.href = '/#works';
                        }
                    }} className="text-foreground/80 hover:text-primary transition-colors">My Works</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="/#agency" onClick={(e) => {
                        const agencySection = document.getElementById('agency');
                        if (agencySection) {
                            handleScrollClick(e, 'agency')
                        } else {
                            window.location.href = '/#agency';
                        }
                    }} className="text-foreground/80 hover:text-primary transition-colors">My Agency</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Let's Talk</Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
