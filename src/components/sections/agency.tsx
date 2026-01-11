import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Agency() {
  return (
    <section id="agency" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2
          className="text-5xl md:text-8xl font-black font-headline text-center mb-4 uppercase"
          style={{
            WebkitTextStroke: "1px hsl(var(--foreground))",
            color: "transparent",
          }}
        >
          My Agency
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
          Welcome to Ignite Haus, where creativity meets strategy. We are a passionate team dedicated to building impactful brands and crafting stunning visual experiences. From concept to execution, we ignite your vision.
        </p>
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
    </section>
  );
}
