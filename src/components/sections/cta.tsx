import { ContactForm } from "@/app/contact/contact-form";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground mb-8 md:mb-0">
                Let's create something amazing together. Fill out the form, and I'll get back to you to discuss your ideas.
              </p>
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
