"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
  "all",
  "brand designs",
  "logo",
  "social media poster",
  "branding posters",
  "gaming content",
  "movie poster",
  "tshirt designs",
];

const portfolioImages = PlaceHolderImages.filter(img => img.category);

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? portfolioImages 
    : portfolioImages.filter((image) => image.category === filter);

  return (
    <section id="works" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black font-headline text-center mb-4 uppercase" style={{ WebkitTextStroke: '1px hsl(var(--foreground))', color: 'transparent' }}>
          My Works
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Here's a selection of my work. Use the filters to navigate through different categories.
        </p>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize transition-colors"
              style={filter === category ? {
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                borderColor: 'hsl(var(--primary))'
              } : {}}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={cn({
                    'sm:col-span-2 lg:col-span-3': image.id === 'brand-design-1',
                })}
              >
                <Link href={image.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300">
                    <CardContent className="p-0">
                        <div className={cn(
                            "relative overflow-hidden",
                            image.id === 'brand-design-1' ? "aspect-video" : "aspect-[3/4]"
                            )}>
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                            data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white p-4">
                                <h3 className="font-bold text-lg">{image.description}</h3>
                                <p className="text-sm capitalize">{image.category}</p>
                            </div>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                </Link>
              </motion.div>
            ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
