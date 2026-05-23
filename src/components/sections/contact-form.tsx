"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Build form data targeting exact Google Form entry IDs
      const body = new URLSearchParams();
      body.append("entry.448413238", formData.name.trim());
      body.append("entry.2015511955", formData.phone.trim());
      body.append("entry.1495950871", formData.email.trim());
      body.append("entry.1736196229", formData.message.trim());

      // POST to Google Forms via no-cors mode
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdW-7pFTsJsyUrCUmx8BQvysiiWrPeUffdr4LswDO7M288HhA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        }
      );

      // Submission always resolves in no-cors, so we assume success if no error thrown
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <section id="contact-form-section" className="w-full py-20 md:py-32 bg-gradient-to-b from-transparent to-background/30">
      <div className="container mx-auto px-4 md:px-6">


        <motion.div
          className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold font-headline mb-4 uppercase text-foreground">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Thank you for reaching out. Your response has been recorded directly to the Google Form database. I will get back to you shortly.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2 text-center">
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="your full name"
                      className={cn(
                        "w-full bg-background/30 border border-white/10 focus:border-primary/60 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-center placeholder:text-center placeholder:text-muted-foreground/40 placeholder:text-xs",
                        errors.name && "border-destructive/60 focus:border-destructive/80"
                      )}
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1 font-semibold">{errors.name}</p>
                    )}
                  </div>

                  {/* Contact Number Input */}
                  <div className="space-y-2 text-center">
                    <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="your contact number"
                      className={cn(
                        "w-full bg-background/30 border border-white/10 focus:border-primary/60 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-center placeholder:text-center placeholder:text-muted-foreground/40 placeholder:text-xs",
                        errors.phone && "border-destructive/60 focus:border-destructive/80"
                      )}
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2 text-center">
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your email address"
                    className={cn(
                      "w-full bg-background/30 border border-white/10 focus:border-primary/60 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-center placeholder:text-center placeholder:text-muted-foreground/40 placeholder:text-xs",
                      errors.email && "border-destructive/60 focus:border-destructive/80"
                    )}
                    required
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2 text-center">
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="your inquiry or message..."
                    rows={5}
                    className={cn(
                      "w-full bg-background/30 border border-white/10 focus:border-primary/60 rounded-xl px-4 py-3 outline-none transition-all duration-300 text-center placeholder:text-center placeholder:text-muted-foreground/40 placeholder:text-xs resize-none",
                      errors.message && "border-destructive/60 focus:border-destructive/80"
                    )}
                    required
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1 font-semibold">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    style={{
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    className="hover:bg-accent shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-destructive text-center font-bold mt-4">
                    Something went wrong. Please check your network and try again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
