import { useState } from "react";
import { TrendingUp, DollarSign, Clock, ChevronRight, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { careerPaths } from "@/data/dummyData";
import { Link } from "react-router-dom";

const CareerPath = () => {
  const [selectedPath, setSelectedPath] = useState<string>("entry-dev");
  const [expandedNodes, setExpandedNodes] = useState<string[]>(["entry-dev"]);

  const toggleNode = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter(n => n !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
    setSelectedPath(nodeId);
  };

  const renderCareerNode = (nodeId: string, depth: number = 0) => {
    const node = careerPaths[nodeId];
    if (!node) return null;

    const isExpanded = expandedNodes.includes(nodeId);
    const isSelected = selectedPath === nodeId;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={nodeId} className="relative">
        {/* Connector Line */}
        {depth > 0 && (
          <div className="absolute -top-4 left-6 h-4 w-0.5 bg-border" />
        )}

        <div
          onClick={() => toggleNode(nodeId)}
          className={`group relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-300 ${
            isSelected
              ? "border-primary bg-primary/5 shadow-lg"
              : "border-border bg-card hover:border-primary/50 hover:shadow-md"
          }`}
        >
          {/* Level Badge */}
          <Badge 
            className={`absolute -top-2 right-4 ${
              node.level === "Entry" ? "bg-success" :
              node.level === "Mid" || node.level === "Mid-Senior" ? "bg-primary" :
              node.level === "Senior" || node.level === "Senior+" ? "bg-secondary" :
              "bg-warning"
            }`}
          >
            {node.level}
          </Badge>

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
              isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            } transition-colors`}>
              <Briefcase className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-foreground">
                {node.title}
              </h3>
              
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {node.salary}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {node.yearsRequired}+ years
                </span>
              </div>

              {/* Skills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {node.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Expand Arrow */}
            {hasChildren && (
              <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`} />
            )}
          </div>
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="relative ml-6 mt-4 space-y-4 border-l-2 border-border pl-6">
            {node.children?.map((childId) => renderCareerNode(childId, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const selectedNode = careerPaths[selectedPath];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Career Path Simulator
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Explore different career trajectories and see how you can grow from entry-level to senior positions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Career Tree */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Software Development Path
                </h2>

                <div className="space-y-4">
                  {renderCareerNode("entry-dev")}
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Click on any role to expand and see possible next steps. The timeline shows approximate years of experience needed.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Selected Role Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-none shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <Target className="h-5 w-5 text-primary" />
                  Role Details
                </h2>

                {selectedNode && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {selectedNode.title}
                      </h3>
                      <Badge className="mt-2">{selectedNode.level}</Badge>
                    </div>

                    <div className="space-y-3 rounded-xl bg-muted/50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Salary Range</span>
                        <span className="font-medium text-foreground">{selectedNode.salary}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Experience Required</span>
                        <span className="font-medium text-foreground">{selectedNode.yearsRequired}+ years</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium text-foreground">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedNode.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {selectedNode.children && selectedNode.children.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-medium text-foreground">Next Steps</h4>
                        <div className="space-y-2">
                          {selectedNode.children.map((childId) => {
                            const child = careerPaths[childId];
                            return child ? (
                              <button
                                key={childId}
                                onClick={() => toggleNode(childId)}
                                className="flex w-full items-center justify-between rounded-lg border border-border p-3 text-left transition-colors hover:bg-muted"
                              >
                                <span className="text-sm font-medium text-foreground">{child.title}</span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              </button>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <Link to="/roadmap" className="block">
                      <Button variant="hero" className="w-full gap-2">
                        Build This Path
                        <TrendingUp className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPath;
