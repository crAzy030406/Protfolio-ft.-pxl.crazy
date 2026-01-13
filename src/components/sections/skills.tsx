
"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import RatingChart from "@/components/charts/rating-chart";
import ProjectsChart from "@/components/charts/projects-chart";
import { motion } from 'framer-motion';

const skills = [
  "Branding & Identity", "Poster Design", "Logo Design", "Social Media Graphics", "Typography", "T-shirt Design",
];

const software = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom", "Alight Motion",
];

const skillRatings = [
    { name: "Brand Identity", rating: 80 },
    { name: "Poster Design", rating: 100 },
    { name: "Logo Design", rating: 80 },
    { name: "Social Media Graphics", rating: 100 },
    { name: "Typography", rating: 100 },
    { name: "T-shirt Design", rating: 80 },
];

const softwareRatings = [
    { name: "Adobe Photoshop", rating: 90 },
    { name: "Adobe Illustrator", rating: 80 },
    { name: "Adobe Lightroom", rating: 90 },
    { name: "Alight Motion", rating: 70 },
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SkillRating = ({ name, rating }: { name: string, rating: number }) => (
    <motion.div className="mb-4" variants={itemVariants}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{rating / 20}/5</span>
      </div>
      <Progress value={rating} className="h-2" />
    </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
        <div className="container mx-auto space-y-8">
            <motion.div 
              className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div className="text-center md:text-left" variants={itemVariants}>
                    <h2 className="text-3xl font-semibold font-headline mb-4">Experience</h2>
                    <p className="text-muted-foreground leading-relaxed">
                    With over <strong className="font-semibold text-foreground">5 years</strong> in the graphic design industry, I've had the privilege of working with a diverse range of clients, from startups to established brands. My experience spans across creating compelling brand identities, designing engaging digital content, and producing print materials that leave a lasting impression. I thrive on collaborating with clients to transform their vision into impactful design solutions.
                    </p>
                </motion.div>
                <motion.div className="text-center md:text-left" variants={itemVariants}>
                    <div className="mb-8">
                    <h3 className="text-2xl font-semibold font-headline mb-4">Skills</h3>
                    <motion.div 
                      className="flex flex-wrap gap-2 justify-center md:justify-start"
                      variants={listVariants}
                    >
                        {skills.map((skill) => (
                        <motion.div key={skill} variants={itemVariants}>
                          <Badge variant="outline" className="text-sm font-light transition-all duration-300 ease-in-out hover:scale-110 bg-white/5 border-white/10 backdrop-blur-sm">{skill}</Badge>
                        </motion.div>
                        ))}
                    </motion.div>
                    </div>
                    <div>
                    <h3 className="text-2xl font-semibold font-headline mb-4">Software</h3>
                    <motion.div 
                      className="flex flex-wrap gap-2 justify-center md:justify-start"
                      variants={listVariants}
                    >
                        {software.map((tool) => (
                        <motion.div key={tool} variants={itemVariants}>
                          <Badge variant="outline" className="text-sm font-light transition-all duration-300 ease-in-out hover:scale-110 bg-white/5 border-white/10 backdrop-blur-sm">{tool}</Badge>
                        </motion.div>
                        ))}
                    </motion.div>
                    </div>
                </motion.div>
                </div>
            </motion.div>

            <motion.div 
              className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <motion.div variants={listVariants}>
                        <h3 className="text-2xl font-semibold font-headline mb-6 text-center md:text-left">Design Skills</h3>
                        {skillRatings.map(skill => <SkillRating key={skill.name} {...skill} />)}
                    </motion.div>
                    <motion.div variants={listVariants}>
                        <h3 className="text-2xl font-semibold font-headline mb-6 text-center md:text-left">Software Proficiency</h3>
                        {softwareRatings.map(skill => <SkillRating key={skill.name} {...skill} />)}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
              className="bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <motion.div className="flex flex-col items-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold font-headline mb-4">Client Rating</h3>
                    <RatingChart rating={4} />
                  </motion.div>
                  <motion.div className="flex flex-col items-center" variants={itemVariants}>
                    <h3 className="text-2xl font-semibold font-headline mb-4">Projects Completed</h3>
                    <ProjectsChart />
                  </motion.div>
                </div>
            </motion.div>
      </div>
    </section>
  );
}
