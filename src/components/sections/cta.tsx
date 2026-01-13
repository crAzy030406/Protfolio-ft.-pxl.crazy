import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Have a project in mind?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            Let's create something amazing together. I'm available for freelance projects and collaborations.
            </p>
            <Button asChild size="lg" style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))'
                }}
                className="hover:bg-accent"
            >
            <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
