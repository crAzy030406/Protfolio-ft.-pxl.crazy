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

const portfolioImages = PlaceHolderImages.filter(img => img.category && img.category !== 'agency');

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const gamingImages = portfolioImages.filter((image) => image.category === 'gaming content');
  const otherImages = portfolioImages.filter((image) => image.category !== 'gaming content');
  
  const filteredImages = filter === "all"
    ? otherImages
    : filter === 'gaming content' 
      ? [] // Handled separately
      : otherImages.filter((image) => image.category === filter);

  const showGamingContent = filter === 'all' || filter === 'gaming content';

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

        {showGamingContent && (
            <motion.div layout className="flex flex-col sm:flex-row gap-8 mb-8">
                <AnimatePresence>
                    {gamingImages.map((image) => (
                    <motion.div
                        key={image.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1"
                    >
                        <Link href={image.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                            <Card className="overflow-hidden border-2 border-border/40 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden aspect-video">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-all duration-500 ease-in-out"
                                    data-ai-hint={image.imageHint}
                                />
                                </div>
                            </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        )}

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  'sm:col-span-2': image.aspectRatio === '23/10' || image.aspectRatio === '16/9',
                })}
              >
                <Link href={image.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="overflow-hidden border-2 border-border/40 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className={cn(
                          "relative overflow-hidden",
                          {
                            'aspect-video': image.aspectRatio === '16/9',
                            'aspect-[23/10]': image.aspectRatio === '23/10',
                            'aspect-square': image.category === 'logo',
                            'aspect-[4/5]': !image.aspectRatio && image.category !== 'logo',
                          }
                        )}>
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-all duration-500 ease-in-out"
                            data-ai-hint={image.imageHint}
                        />
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
