import { Badge } from "@/components/ui/badge";

const skills = [
  "Branding & Identity", "UI/UX Design", "Poster Design", "Logo Design", "Social Media Graphics", "Typography", "T-shirt Design",
];

const software = [
  "Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign", "Adobe After Effects", "Blender",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Experience</h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years in the graphic design industry, I've had the privilege of working with a diverse range of clients, from startups to established brands. My experience spans across creating compelling brand identities, designing engaging digital content, and producing print materials that leave a lasting impression. I thrive on collaborating with clients to transform their vision into impactful design solutions.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-headline mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">Software</h3>
              <div className="flex flex-wrap gap-2">
                {software.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
