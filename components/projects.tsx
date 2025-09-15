"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio with a modern and professional look, built using Tailwind CSS.",
      tech: ["JavaScript", "Tailwind", "HTML/CSS"],
      highlights: ["Modern Portfolio", "Modern Design", "Professional look"],
      githubLink: "https://github.com/yuurahz/portofolio",
      visitLink: null,
    },
    {
      title: "Multi-device WhatsApp Bot",
      description:
        "Intelligent WhatsApp bot that works across multiple devices with automated responses, message scheduling, and custom commands.",
      tech: ["NodeJs", "WhatsApp API", "Algorithm", "Webhooks"],
      highlights: [
        "Multi-device Support",
        "Automated Responses",
        "Custom Commands",
      ],
      githubLink: "https://github.com/yuurahz/yoshida",
      visitLink: null,
    },
    {
      title: "Telegram Bot",
      description:
        "A powered Telegram bot with natural language processing, smart replies, and integration with external APIs for enhanced functionality.",
      tech: ["NodeJs", "Telegram API", "Algorithm", "Webhooks"],
      highlights: ["AI-Powered", "Natural Language", "Real-time Processing"],
      githubLink: "https://github.com/yuurahz/yoru",
      visitLink: null,
    },
    {
      title: "Powerful Rest APIs",
      description:
        "A comprehensive REST API service providing various endpoints for developers with authentication, rate limiting, and comprehensive documentation.",
      tech: ["Express.js", "RESTful APIs", "APIs SDK"],
      highlights: ["Maximum management", "Easy To Use", "Real-time Processing"],
      githubLink: null,
      visitLink: "https://api.yoshida.my.id",
    },
    {
      title: "Termux Junk Cleaner",
      description:
        "A tool that functions to clean trash and cache in the Termux application.",
      tech: ["Shell"],
      highlights: ["Termux Tools", "Junk Cleaner"],
      githubLink: "https://github.com/yuurahz/Termux-cleaner",
      visitLink: null,
    },
    {
      title: "Class Documentation Website",
      description:
        "A website created to store and manage photos of documentation and memories from school.",
      tech: ["React", "Vite", "Supabase"],
      highlights: ["Private Projects", "Web Development"],
      githubLink: null,
      visitLink: "https://traszone.biz.id",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 tracking-tighter">
            COMPLETED
          </h2>
          <h3 className="text-2xl sm:text-4xl font-light tracking-wider text-white/80">
            PROJECTS
          </h3>
          <div className="w-16 sm:w-24 h-px bg-white/30 mx-auto mt-4 sm:mt-8"></div>
        </div>

        {/* Animasi Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className="bg-black/95 border-2 border-white/20 hover:border-white/60 
                transition-all duration-500 group relative overflow-hidden 
                hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white"></div>
                    </div>
                    <div className="text-right font-mono text-xs text-white/60">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-bold tracking-tight text-white mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                        Tech Stack
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="bg-white/10 border border-white/20 px-2 py-1 text-xs font-mono text-white text-center"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-xs sm:text-sm text-white"
                          >
                            <div className="w-1 h-1 bg-white"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black 
                          transition-all duration-300 font-mono text-xs uppercase tracking-wider flex-1"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Source
                        </Button>
                      </Link>
                    )}
                    {project.visitLink && (
                      <Link
                        href={project.visitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black 
                          transition-all duration-300 font-mono text-xs uppercase tracking-wider flex-1"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
