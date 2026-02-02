import { FileSearch, Target, TrendingUp, BookOpen, BarChart3, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: FileSearch,
    title: "Smart Resume Analysis",
    description: "AI extracts skills, experience, and qualifications from your resume automatically.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "Role Matching Engine",
    description: "Get matched with job roles based on your skills with detailed match percentages.",
    color: "bg-secondary",
  },
  {
    icon: TrendingUp,
    title: "Career Path Simulator",
    description: "Visualize multiple career trajectories and see how to grow from entry to senior roles.",
    color: "bg-success",
  },
  {
    icon: BookOpen,
    title: "Skill Roadmaps",
    description: "Receive personalized learning plans with curated resources to fill skill gaps.",
    color: "bg-warning",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your skill development and job readiness through intuitive dashboards.",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "AI Recommendations",
    description: "Get intelligent suggestions for courses, certifications, and projects to boost your profile.",
    color: "bg-secondary",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <Zap className="h-4 w-4 text-primary" />
            Powered by AI
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need to
            <span className="text-gradient"> Plan Your Career</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our comprehensive platform guides you from uncertainty to clarity with intelligent tools and insights.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`absolute right-0 top-0 h-32 w-32 ${feature.color} opacity-5 blur-3xl transition-opacity group-hover:opacity-10`} />
              <CardContent className="relative p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} text-white`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
