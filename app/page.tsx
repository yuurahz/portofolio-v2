import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YuuraHz | Portofolio",
  description:
    "Passionate developer specializing in JavaScript technologies. I create modern web applications with clean code and exceptional user experiences.",
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </div>
  );
}
