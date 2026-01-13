import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-6 md:py-8 bg-black/20 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Design Showcase. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter" className="group">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>
          <Link href="#" aria-label="GitHub" className="group">
            <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="group">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
