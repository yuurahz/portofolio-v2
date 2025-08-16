"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsContent() {
  const skills = {
    languages: ["JavaScript", "Python", "Go", "TypeScript"],
    databases: ["MongoDB", "Supabase", "Redis", "Prisma"],
    tools: ["Postman", "Git", "Scrum", "Figma", "Kubernetes"],
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 tracking-tighter">
          TECHNICAL
        </h2>
        <h3 className="text-2xl sm:text-4xl font-light tracking-wider text-white/80">
          SKILLS
        </h3>
        <div className="w-16 sm:w-24 h-px bg-white/30 mx-auto mt-4 sm:mt-8"></div>
      </div>

      <motion.div
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {[
          {
            icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Languages",
            items: skills.languages,
            cols: 2,
          },
          {
            icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Databases",
            items: skills.databases,
            cols: 1,
          },
          {
            icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Tools",
            items: skills.tools,
            cols: 1,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="bg-transparent border-2 border-white/20 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:animate-glowPulse">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white font-mono uppercase tracking-wider text-sm sm:text-base">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`grid grid-cols-${section.cols} gap-3`}>
                  {section.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/5 border border-white/10 px-3 py-2 text-center font-mono text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);
          }
        }
        .animate-glowPulse {
          animation: glowPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
