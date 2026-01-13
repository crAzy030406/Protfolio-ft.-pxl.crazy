
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide header on scroll down, show on scroll up.
    // The `latest > 50` condition prevents it from hiding on small scrolls at the top.
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  })

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Let the default anchor behavior work
    }
  };

  const handleMobileScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
        handleScrollClick(e, sectionId);
    }
    // If on a different page, the default href will navigate.
    // The SheetClose wrapper will close the sheet.
  };
  
  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-150%", opacity: 0 },
  };

  return (
    <motion.header 
      className={cn(
        "fixed top-4 left-0 right-0 z-50 container"
      )}
      variants={headerVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div
        className={cn(
          "flex h-16 items-center px-4 rounded-2xl",
          'bg-black/50 backdrop-blur-md'
        )}
      >
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2" onClick={handleHomeClick}>
            <span className="font-normal sm:inline-block font-headline tracking-widest text-lg">
              pxl.crazy
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/" onClick={handleHomeClick}>Home</Link>
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
            <a href="/#contact" onClick={(e) => handleScrollClick(e, 'contact')}>
              Let's Talk
            </a>
          </Button>
          <div className="md:hidden">
            {isMounted && (
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
                        <Link href="/" onClick={handleHomeClick} className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <a href="/#works" onClick={(e) => handleMobileScrollClick(e, 'works')} className="text-foreground/80 hover:text-primary transition-colors">My Works</a>
                    </SheetClose>
                    <SheetClose asChild>
                        <a href="/#agency" onClick={(e) => handleMobileScrollClick(e, 'agency')} className="text-foreground/80 hover:text-primary transition-colors">My Agency</a>
                    </SheetClose>
                    <SheetClose asChild>
                        <a href="/#contact" onClick={(e) => handleMobileScrollClick(e, 'contact')} className="text-foreground/80 hover:text-primary transition-colors">Let's Talk</a>
                    </SheetClose>
                    </nav>
                </SheetContent>
                </Sheet>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
