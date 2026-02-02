import { Upload, Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Resume",
    description: "Upload your resume or manually enter your skills and experience.",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description: "Our AI analyzes your profile and matches you with suitable job roles.",
  },
  {
    icon: Map,
    step: "03",
    title: "Explore Paths",
    description: "Visualize career trajectories and identify the skills you need.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Learning",
    description: "Follow personalized roadmaps to develop missing skills.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four simple steps to discover and plan your ideal career path.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="group relative text-center">
                {/* Step Number */}
                <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10 transition-opacity group-hover:opacity-20" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-card shadow-lg transition-transform group-hover:scale-110">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-secondary-foreground">
                    {item.step}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
