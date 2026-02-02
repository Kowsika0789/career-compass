import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="" 
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            AI-Powered Career Guidance
          </div>

          {/* Heading */}
          <h1 className="animate-slide-up font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Find Your Perfect
            <span className="text-gradient block">Career Path</span>
          </h1>

          {/* Subheading */}
          <p className="animate-slide-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: "0.1s" }}>
            Upload your resume, discover matching job roles, and get personalized learning roadmaps to achieve your dream career.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.2s" }}>
            <Link to="/upload">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/matching">
              <Button variant="outline" size="xl">
                Explore Job Roles
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">500+</div>
              <div className="mt-1 text-sm text-muted-foreground">Job Roles Analyzed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Career Paths</div>
            </div>
            <div className="col-span-2 text-center sm:col-span-1">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">1000+</div>
              <div className="mt-1 text-sm text-muted-foreground">Skills Mapped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
