"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Button asChild variant="outline" className="group overflow-hidden">
              <Link href="/contact">
                <motion.span
                  className="flex items-center justify-center"
                  initial={{ y: '0%' }}
                  animate={{ y: '0%' }}
                  whileHover={{ y: '-120%' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <Mail className="w-5 h-5 mr-2"/>
                  </span>
                </motion.span>
                <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: '120%' }}
                    animate={{ y: '120%' }}
                    whileHover={{ y: '0%' }}
                    transition={{ duration: 0.3 }}
                >
                </motion.span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
