
"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, Award, Brain, PenTool, Gamepad2, Star, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const details = [
    { icon: User, label: "Name", value: "Ardhendu Halder" },
    { icon: User, label: "Age", value: "19+" },
    { icon: Briefcase, label: "Profession", value: "GFX Designer" },
    { icon: PenTool, label: "Style", value: "Minimal, Professional, Clean" },
    { icon: Code, label: "Experience", value: "5 Yrs. +" },
    { icon: User, label: "Based in", value: "Kolkata" },
  ];

  const education = [
    { icon: Brain, label: "Academics", value: "2nd Year B.Tech CSE Student" },
    { icon: Award, label: "University", value: "Brainware University, Barasat" },
  ];
  
  const hobbies = ["Gaming", "Photography", "Content Creation"];
  const aims = ["Agency", "Personal Brand"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 sm:py-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div className="text-center mb-16" variants={sectionVariants}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Designer, Creator, and Student
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start" variants={sectionVariants}>
            <Card className="bg-black/20 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center md:justify-start gap-2 font-headline">
                  <User /> Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {details.map((item, index) => (
                  <motion.div key={index} className="flex items-start" variants={itemVariants}>
                    <item.icon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <motion.div className="space-y-8" variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
              <motion.div variants={itemVariants}>
                <Card className="bg-black/20 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center md:justify-start gap-2 font-headline">
                      <Brain /> Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {education.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <item.icon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-black/20 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center md:justify-start gap-2 font-headline">
                      <Gamepad2 /> Hobbies & Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center md:justify-start gap-2">
                    {hobbies.map(hobby => (
                      <Badge key={hobby} variant="outline" className="text-sm font-light bg-white/5 border-white/10 backdrop-blur-sm">{hobby}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" variants={sectionVariants}>
            <Card className="bg-black/20 backdrop-blur-md border-white/20">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center md:justify-start gap-2 font-headline">
                    <Star /> Aims & Goals
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center md:justify-start gap-2">
                    {aims.map(aim => (
                        <Badge key={aim} variant="outline" className="text-sm font-light bg-white/5 border-white/10 backdrop-blur-sm">{aim}</Badge>
                    ))}
                </CardContent>
            </Card>
            <Card className="bg-black/20 backdrop-blur-md border-white/20">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center md:justify-start gap-2 font-headline">
                        <PenTool /> Design Philosophy
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center md:text-left">
                        "My design philosophy is rooted in a delicate balance between strong concepts and minimalist aesthetics."
                    </p>
                </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
