import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Server, Brain } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description:
        "specialize in NodeJs technologies and enjoy turning complex problems into simple, beautiful solutions",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Immersive experience",
      description: "Have experience for approximately 5 years",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Collaboration",
      description: "Coordinated with remote teams across the Indonesia",
    },
  ];

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                passionate developer who loves creating digital experiences that
                make a difference. I specialize in JavaScript technologies and
                enjoy turning complex problems into simple, beautiful solutions.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I'm constantly learning and staying up-to-date with the latest
                industry trends and technologies. My goal is to write clean,
                efficient code that not only works well but is also maintainable
                and scalable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
