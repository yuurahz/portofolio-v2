import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import OpenSource from "./open-source";

export default function Projects() {
  const projects = [
    {
      title: "WhatsApp Bot",
      description:
        "An intelligent WhatsApp bot built with Node.js that provides automated responses and various utility features for enhanced user interaction.",
      tags: ["NodeJs", "WhatsApp Api", "Algorithms"],
      codeLink: "https://github.com/yuurahz/yoshida",
      liveLink: null,
    },
    {
      title: "Rest Api",
      description:
        "A comprehensive REST API service providing various endpoints for developers with authentication, rate limiting, and comprehensive documentation.",
      tags: ["Express.js", "Tailwind Css", "Html"],
      codeLink: null,
      liveLink: "https://api.yoshida.my.id",
    },
    {
      title: "Termux Junk Cleaner",
      description:
        "A tool that functions to clean trash and cache in the Termux application.",
      tags: ["Shell", "Tools", "Temux CLI"],
      codeLink: "https://github.com/yuurahz/Termux-cleaner",
      liveLink: null,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and simple projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" /> Visit
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects */}
          <div className="mt-20">
            <OpenSource />
          </div>
        </div>
      </div>
    </section>
  );
}
