import { Badge } from "@/components/ui/badge";

const skills = [
  "Branding & Identity", "Poster Design", "Logo Design", "Social Media Graphics", "Typography", "T-shirt Design",
];

const software = [
  "Adobe Photoshop", "Adobe Illustrator",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
        <div className="container mx-auto">
            <div className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-semibold font-headline mb-4">Experience</h2>
                    <p className="text-muted-foreground leading-relaxed">
                    With over <strong className="font-semibold text-foreground">5 years</strong> in the graphic design industry, I've had the privilege of working with a diverse range of clients, from startups to established brands. My experience spans across creating compelling brand identities, designing engaging digital content, and producing print materials that leave a lasting impression. I thrive on collaborating with clients to transform their vision into impactful design solutions.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <div className="mb-8">
                    <h3 className="text-2xl font-semibold font-headline mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm font-light transition-all duration-300 ease-in-out hover:scale-110 bg-white/5 border-white/10 backdrop-blur-sm">{skill}</Badge>
                        ))}
                    </div>
                    </div>
                    <div>
                    <h3 className="text-2xl font-semibold font-headline mb-4">Software</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {software.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-sm font-light transition-all duration-300 ease-in-out hover:scale-110 bg-white/5 border-white/10 backdrop-blur-sm">{tool}</Badge>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
      </div>
    </section>
  );
}
