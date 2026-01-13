
"use client";

import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If on homepage, smooth scroll. Otherwise, Next Link will handle navigation.
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.footer 
      className="border-t border-white/20 bg-black/20 backdrop-blur-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <span className="font-headline tracking-widest text-xl">
                pxl.crazy
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Creative GFX designer crafting minimal and professional visuals.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/pxl.crazy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
              <Link href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
              <Link href="https://github.com/crAzy030406" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group">
                <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/pxlcrazy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" onClick={handleHomeClick} className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link></li>
              <li><a href="/#works" onClick={(e) => handleScrollClick(e, 'works')} className="text-muted-foreground hover:text-primary transition-colors">My Works</a></li>
              <li><a href="/#agency" onClick={(e) => handleScrollClick(e, 'agency')} className="text-muted-foreground hover:text-primary transition-colors">My Agency</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact & Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA (Optional) */}
           <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground">
                Have a project in mind? Let's talk.
            </p>
          </div>

        </div>
        
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} pxl.crazy | All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
