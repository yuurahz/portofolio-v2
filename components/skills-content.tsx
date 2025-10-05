"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Zap } from "lucide-react";

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
		<section id="skills" className="py-20 bg-[hsl(var(--background))]">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12 sm:mb-20">
					<h2 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 tracking-tighter text-[hsl(var(--primary))]">
						TECHNICAL
					</h2>
					<h3 className="text-2xl sm:text-4xl font-light tracking-wider text-[hsl(var(--foreground)/0.8)]">
						SKILLS
					</h3>
					<div className="w-16 sm:w-24 h-[2px] bg-[hsl(var(--primary))] mx-auto mt-4 sm:mt-8 rounded-full"></div>
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
							icon: (
								<Code className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--primary))]" />
							),
							title: "Languages",
							items: skills.languages,
							cols: 2,
						},
						{
							icon: (
								<Database className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--primary))]" />
							),
							title: "Databases",
							items: skills.databases,
							cols: 1,
						},
						{
							icon: (
								<Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--primary))]" />
							),
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
							<Card
								className="bg-[hsl(var(--background))]/90 border border-[hsl(var(--border))] 
                transition-all duration-500 hover:scale-[1.03] 
                hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:border-[hsl(var(--primary))]/70"
							>
								<CardHeader className="pb-4">
									<CardTitle className="flex items-center gap-3 text-[hsl(var(--foreground))] font-mono uppercase tracking-wider text-sm sm:text-base">
										{section.icon}
										{section.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div
										className={`grid grid-cols-${section.cols} gap-3`}
									>
										{section.items.map((skill) => (
											<div
												key={skill}
												className="bg-[hsl(var(--foreground))/0.05] border border-[hsl(var(--foreground))/0.15] px-3 py-2 text-center font-mono text-xs sm:text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))/0.1] transition-colors"
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
			</div>
		</section>
	);
}
