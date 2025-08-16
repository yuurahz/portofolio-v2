import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              EDUCATION
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Just a student graduated from high senior school
                    </h3>
                    <p className="text-muted-foreground">
                      SMA Negeri 1 Penawar Aji
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    I don't have a developer education or background, it all
                    started with me wanting to try something I enjoyed,
                    including programming.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
