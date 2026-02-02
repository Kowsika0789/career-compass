import { useState } from "react";
import { BookOpen, CheckCircle, Circle, Clock, ExternalLink, Play, Video, FileText as FileIcon, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { skillRoadmap } from "@/data/dummyData";
import { Link } from "react-router-dom";

const SkillRoadmap = () => {
  const [steps, setSteps] = useState(skillRoadmap);

  const toggleComplete = (stepId: string) => {
    setSteps(steps.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  const completedSteps = steps.filter(s => s.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "video": return <Video className="h-4 w-4" />;
      case "documentation": return <FileIcon className="h-4 w-4" />;
      case "course": return <Play className="h-4 w-4" />;
      case "project": return <Code className="h-4 w-4" />;
      case "book": return <BookOpen className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Skill Learning Roadmap
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A personalized step-by-step plan to master the skills you need for your dream career.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-10 border-none bg-gradient-hero text-white shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl font-bold">Your Learning Progress</h2>
                <p className="mt-1 text-white/80">
                  {completedSteps} of {steps.length} skills completed
                </p>
              </div>

              <div className="w-full max-w-md">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/80">Overall Progress</span>
                  <span className="font-bold">{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3 bg-white/20" />
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3">
                <Clock className="h-5 w-5" />
                <span className="font-medium">~17 weeks total</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6">
                {/* Timeline Node */}
                <div className="relative z-10 hidden md:block">
                  <button
                    onClick={() => toggleComplete(step.id)}
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                      step.completed
                        ? "border-success bg-success text-white"
                        : "border-border bg-card text-muted-foreground hover:border-primary"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="h-8 w-8" />
                    ) : (
                      <span className="font-display text-xl font-bold">{index + 1}</span>
                    )}
                  </button>
                </div>

                {/* Content Card */}
                <Card className={`flex-1 border-none shadow-md transition-all duration-300 ${
                  step.completed ? "opacity-75" : ""
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Mobile Number */}
                        <button
                          onClick={() => toggleComplete(step.id)}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 md:hidden ${
                            step.completed
                              ? "border-success bg-success text-white"
                              : "border-border bg-card text-muted-foreground"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <span className="font-display font-bold">{index + 1}</span>
                          )}
                        </button>
                        <div>
                          <CardTitle className={`font-display text-xl ${step.completed ? "line-through" : ""}`}>
                            {step.skill}
                          </CardTitle>
                          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <Badge variant={step.completed ? "default" : "outline"} className={step.completed ? "bg-success" : ""}>
                        {step.completed ? "Completed" : "In Progress"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="mb-3 text-sm font-medium text-foreground">Learning Resources:</h4>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {step.resources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary hover:bg-accent"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            {getResourceIcon(resource.type)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resource.type}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {!step.completed && (
                      <Button 
                        onClick={() => toggleComplete(step.id)}
                        variant="success" 
                        size="sm" 
                        className="mt-4 gap-2"
                      >
                        <CheckCircle className="h-4 w-4" />
                        Mark as Complete
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/dashboard">
            <Button variant="hero" size="lg" className="gap-2">
              View Your Dashboard
              <BookOpen className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillRoadmap;
