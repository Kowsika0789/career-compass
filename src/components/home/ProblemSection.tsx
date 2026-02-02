import { AlertTriangle, HelpCircle, Compass, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: HelpCircle,
    title: "Career Confusion",
    description: "Students often feel lost when choosing between multiple career options without proper guidance.",
  },
  {
    icon: Compass,
    title: "Skill Gap Awareness",
    description: "Job seekers struggle to identify which skills they're missing for their desired roles.",
  },
  {
    icon: AlertTriangle,
    title: "Unclear Growth Path",
    description: "Professionals lack visibility into how they can progress from their current role to dream positions.",
  },
  {
    icon: Brain,
    title: "Learning Overwhelm",
    description: "Too many resources and courses make it hard to create a focused learning plan.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            The Career Confusion Crisis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every year, millions of students and freshers face these challenges when planning their careers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card 
              key={problem.title} 
              className="group border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <problem.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
