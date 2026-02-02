import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 text-center lg:p-20">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4" />
              Start Your Journey Today
            </div>

            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Discover Your Ideal Career?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Join thousands of students who have found clarity in their career journey using our AI-powered platform.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/upload">
                <Button 
                  size="xl" 
                  className="group bg-white text-primary hover:bg-white/90"
                >
                  Upload Your Resume
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
