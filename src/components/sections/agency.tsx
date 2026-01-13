import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const agencyMembers = PlaceHolderImages.filter(img => img.category === 'agency');
const founder1 = agencyMembers.find(m => m.id === 'profile-photo');
const founder2 = agencyMembers.find(m => m.id === 'profile-photo-2');

export default function Agency() {
  return (
    <section id="agency" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-widest mb-2">
          my agency
        </h3>
        <h2
          className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
          style={{
            WebkitTextStroke: "1px hsl(var(--foreground))",
            color: "transparent",
          }}
        >
          IGNITE HAUS
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
          Welcome to Ignite Haus, where creativity meets strategy. We are a passionate team dedicated to building impactful brands and crafting stunning visual experiences. From concept to execution, we ignite your vision.
        </p>

        <div className="mt-24">
            <Button asChild size="lg" style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))'
                }}
                className="hover:bg-accent"
            >
            <Link href="https://www.instagram.com/ignite.haus?igsh=Yjk3bmdvYzF5aXE0&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Visit Our Instagram
            </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
