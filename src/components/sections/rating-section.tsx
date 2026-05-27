"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Send, CheckCircle2, User, Sparkles } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  date: string;
}

interface RatingSectionProps {
  pageId: "creatiq" | "taravoxx" | "home";
  pageTitle: string;
}

const defaultReviews: Record<RatingSectionProps["pageId"], Review[]> = {
  home: [
    {
      id: "h1",
      name: "Aravind P.",
      rating: 5,
      message: "This is one of the most premium developer-designer portfolios I've ever seen. The fluid animations, elegant micro-interactions, and typography are top notch!",
      date: "2026-05-20",
    },
    {
      id: "h2",
      name: "Sophia L.",
      rating: 5,
      message: "Incredible dark mode aesthetics. The case studies are extremely detailed, and the interactive elements make the portfolio feel alive.",
      date: "2026-05-24",
    },
  ],
  taravoxx: [
    {
      id: "t1",
      name: "Deepika S.",
      rating: 5,
      message: "The celestial theme is absolutely breathtaking. The visual restraint combined with the luxury palette perfectly fits a premium astrology brand.",
      date: "2026-05-21",
    },
    {
      id: "t2",
      name: "Marcus K.",
      rating: 4,
      message: "Extremely well thought out case study. The typography system section shows an incredible level of detail and rigorous strategic planning.",
      date: "2026-05-25",
    },
  ],
  creatiq: [
    {
      id: "c1",
      name: "Rohan M.",
      rating: 5,
      message: "Incredible rebranding work! The interlocking CQ monogram is genius and scales perfectly across all digital touchpoints. Love the brand styling.",
      date: "2026-05-23",
    },
    {
      id: "c2",
      name: "Elena R.",
      rating: 5,
      message: "Excellent design rationale and strategy. The 'Previous Identity' comparison makes it so clear why the change was necessary.",
      date: "2026-05-26",
    },
  ],
};

export default function RatingSection({ pageId, pageTitle }: RatingSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const storageKey = `portfolio-reviews-${pageId}`;

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem(storageKey);
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        setReviews(defaultReviews[pageId]);
      }
    } else {
      setReviews(defaultReviews[pageId]);
      localStorage.setItem(storageKey, JSON.stringify(defaultReviews[pageId]));
    }
  }, [pageId, storageKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!message.trim()) {
      setError("Please leave a proper message.");
      return;
    }
    if (message.trim().length < 8) {
      setError("Please leave a slightly more detailed review message.");
      return;
    }

    setError("");

    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe0_IfBBeaGxf_cz9_MEIHK6qbVlcDEalMhWzFQ1zCys6SCLA/formResponse";
      const formData = new URLSearchParams();
      
      // Star Rating Entry ID
      formData.append("entry.536049356", rating.toString());
      
      // Dedicated Name Entry ID
      formData.append("entry.1197238452", name.trim());
      
      // Message Entry ID - pure message text
      formData.append("entry.1201588472", message.trim());

      // Perform background cross-origin post (no-cors mode)
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      // Update local storage review list for fallback/cache
      const newReview: Review = {
        id: Date.now().toString(),
        name: name.trim(),
        rating,
        message: message.trim(),
        date: new Date().toISOString().split("T")[0],
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem(storageKey, JSON.stringify(updatedReviews));

      setName("");
      setMessage("");
      setRating(5);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4500);
    } catch (err) {
      setError("Failed to submit rating. Please check your connection and try again.");
    }
  };

  // Calculate dynamic stats
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";

  return (
    <section className="w-full py-20 border-t border-white/5 relative overflow-hidden">
      {/* Light background element themed to primary color */}
      <div 
        className="absolute w-72 h-72 rounded-full pointer-events-none opacity-20 filter blur-[100px] -z-10 transition-all duration-700"
        style={{
          backgroundColor: "hsl(var(--primary))",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center flex flex-col items-center mb-12">
          <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Interactive Feedback
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black font-headline uppercase mb-4 text-center"
            style={{ WebkitTextStroke: "1px hsl(var(--foreground))", color: "transparent" }}
          >
            Review & Rate
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            What are your thoughts on {pageTitle}? Rate the design system, strategy, and layout by leaving your rating and comments below.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <h3 className="text-lg font-bold font-headline uppercase tracking-wider mb-6 text-foreground flex items-center gap-2 justify-center">
            <Sparkles className="w-4 h-4 text-primary" /> Share Your Rating
          </h3>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wider text-foreground">
                  Feedback Received!
                </h4>
                <p className="text-xs text-muted-foreground max-w-xs leading-relaxed mx-auto">
                  Thank you! Your rating has been received and saved successfully.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Star selector */}
                <div className="space-y-2 flex flex-col items-center">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                    Select Rating
                  </label>
                  <div className="flex items-center gap-1.5 py-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isGold = hoverRating !== null ? star <= hoverRating : star <= rating;
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="focus:outline-none transition-transform active:scale-95 p-0.5"
                        >
                          <Star
                            className={`w-8 h-8 transition-all duration-200 ${
                              isGold
                                ? "text-primary fill-primary filter drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] scale-110"
                                : "text-white/20 hover:text-white/40"
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs font-bold text-primary font-mono ml-3 uppercase">
                      ({rating} Star{rating > 1 ? "s" : ""})
                    </span>
                  </div>
                </div>

                {/* Name input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-center sm:text-left"
                  />
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                    Your Review Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts about this project, the typography, visual systems, layouts..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none leading-relaxed text-center sm:text-left"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 font-semibold text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-bold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 group transition-all active:scale-98 text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                >
                  Submit Rating
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
