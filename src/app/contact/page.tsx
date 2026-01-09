import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
            Contact Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
