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
          className="text-5xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
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

        <div className="mt-20 space-y-24">
            {/* Founder 1 */}
            {founder1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                        <Image
                            src={founder1.imageUrl}
                            alt={founder1.description}
                            fill
                            className="object-cover rounded-2xl"
                            data-ai-hint={founder1.imageHint}
                        />
                    </div>
                    <div className="text-left">
                        <h4 className="text-xl font-bold text-muted-foreground uppercase tracking-widest mb-2">Founder</h4>
                        <p className="text-foreground leading-relaxed">
                            This is where a brief, compelling description of the first founder will go. It will highlight their skills, passion, and role within Ignite Haus, providing insight into the creative force driving the agency.
                        </p>
                    </div>
                </div>
            )}
            
            {/* Founder 2 */}
            {founder2 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="text-left md:order-1">
                         <h4 className="text-xl font-bold text-muted-foreground uppercase tracking-widest mb-2">Founder</h4>
                         <p className="text-foreground leading-relaxed">
                            A short and engaging description for the second founder will be placed here. This will showcase their expertise, contributions, and what makes them an integral part of the Ignite Haus team.
                         </p>
                    </div>
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:order-2">
                         <Image
                            src={founder2.imageUrl}
                            alt={founder2.description}
                            fill
                            className="object-cover rounded-2xl"
                            data-ai-hint={founder2.imageHint}
                         />
                    </div>
                 </div>
            )}

            {/* Manager */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto bg-card rounded-2xl flex items-center justify-center">
                    <HelpCircle className="w-24 h-24 text-muted-foreground" />
                </div>
                <div className="text-left">
                    <h4 className="text-xl font-bold text-muted-foreground uppercase tracking-widest mb-2">Manager</h4>
                    <p className="text-foreground leading-relaxed">
                        Unknown. This space is reserved for the mysterious manager of Ignite Haus, adding an element of intrigue to the team lineup. Who are they? Only time will tell.
                    </p>
                </div>
            </div>
        </div>

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
