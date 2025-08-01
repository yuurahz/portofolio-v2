import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, GitFork } from "lucide-react";
import Link from "next/link";

export default function OpenSource() {
  const contributions = [
    {
      title: "Brat Generator",
      description:
        "What is a brat generator? Brat Generator is an online tool that allows users to create custom images resembling the album cover of Brat by Charli XCX.",
      tags: ["Canvas API", "HuggingFace", "Nodejs"],
      link: "https://github.com/yuurahz/brat-api",
    },
  ];

  return (
    <div id="open-source">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Open Source Contributions
          </h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            Projects I've contributed to in the open source community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contributions.map((contribution, index) => (
            <div key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <GitFork className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {contribution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {contribution.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {contribution.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <Link
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
