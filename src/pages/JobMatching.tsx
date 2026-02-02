import { useState } from "react";
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle, XCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { jobRoles } from "@/data/dummyData";
import { Link } from "react-router-dom";

const JobMatching = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const sortedJobs = [...jobRoles].sort((a, b) => b.matchPercentage - a.matchPercentage);

  const getMatchColor = (percentage: number) => {
    if (percentage >= 85) return "text-success";
    if (percentage >= 70) return "text-primary";
    if (percentage >= 50) return "text-warning";
    return "text-muted-foreground";
  };

  const getMatchBg = (percentage: number) => {
    if (percentage >= 85) return "bg-success";
    if (percentage >= 70) return "bg-primary";
    if (percentage >= 50) return "bg-warning";
    return "bg-muted";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Job Role Matching
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Based on your skills, here are the roles that best match your profile.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <Card className="border-none bg-gradient-hero text-white shadow-lg">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/80">Total Matches</p>
                <p className="font-display text-2xl font-bold">{sortedJobs.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">High Match (85%+)</p>
                <p className="font-display text-2xl font-bold text-foreground">
                  {sortedJobs.filter(j => j.matchPercentage >= 85).length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Salary Range</p>
                <p className="font-display text-2xl font-bold text-foreground">$70-120k</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {sortedJobs.map((job) => (
            <Card 
              key={job.id} 
              className="group border-none shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left: Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-muted-foreground">{job.company}</p>
                      </div>
                      {/* Match Percentage Circle - Mobile */}
                      <div className="flex flex-col items-center lg:hidden">
                        <div className={`font-display text-2xl font-bold ${getMatchColor(job.matchPercentage)}`}>
                          {job.matchPercentage}%
                        </div>
                        <p className="text-xs text-muted-foreground">Match</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>

                    <p className="mt-4 text-muted-foreground">{job.description}</p>

                    {/* Match Progress Bar */}
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Skill Match</span>
                        <span className={`font-medium ${getMatchColor(job.matchPercentage)}`}>
                          {job.matchPercentage}%
                        </span>
                      </div>
                      <Progress value={job.matchPercentage} className={`h-2 ${getMatchBg(job.matchPercentage)}`} />
                    </div>
                  </div>

                  {/* Right: Match Circle - Desktop */}
                  <div className="hidden items-center gap-4 lg:flex">
                    <div className="relative flex h-24 w-24 items-center justify-center">
                      <svg className="h-24 w-24 -rotate-90 transform">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={251.2}
                          strokeDashoffset={251.2 - (251.2 * job.matchPercentage) / 100}
                          className={getMatchColor(job.matchPercentage)}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`font-display text-xl font-bold ${getMatchColor(job.matchPercentage)}`}>
                          {job.matchPercentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
                >
                  {expandedJob === job.id ? (
                    <>Hide Details <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Show Skills Analysis <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>

                {/* Expanded Content */}
                {expandedJob === job.id && (
                  <div className="mt-6 grid gap-6 border-t border-border pt-6 lg:grid-cols-2">
                    {/* Matched Skills */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-medium text-foreground">
                        <CheckCircle className="h-5 w-5 text-success" />
                        Matched Skills ({job.matchedSkills.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.matchedSkills.map((skill) => (
                          <Badge key={skill} className="bg-success/10 text-success border-success/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Missing Skills */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-medium text-foreground">
                        <XCircle className="h-5 w-5 text-destructive" />
                        Missing Skills ({job.missingSkills.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.missingSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-destructive/20 text-destructive">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Link to="/roadmap" className="mt-4 inline-block">
                        <Button variant="outline" size="sm" className="gap-2">
                          Learn Missing Skills
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/career-path">
            <Button variant="hero" size="lg" className="gap-2">
              Explore Career Paths
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobMatching;
