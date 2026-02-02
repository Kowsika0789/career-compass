import { useState } from "react";
import { Upload, FileText, Plus, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { userSkills, Skill } from "@/data/dummyData";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // Simulate AI analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      setSkills(userSkills);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { name: newSkill.trim(), level: "intermediate", category: "Other" }]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter(s => s.name !== skillName));
  };

  const handleAnalyze = () => {
    navigate("/matching");
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner": return "bg-warning/10 text-warning border-warning/20";
      case "intermediate": return "bg-primary/10 text-primary border-primary/20";
      case "advanced": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Upload Your Resume
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Let our AI analyze your resume and extract your skills, or add them manually.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-8">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileInput}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                
                {uploadedFile ? (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <Check className="h-8 w-8 text-success" />
                    </div>
                    <p className="font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {isAnalyzing ? "Analyzing your resume..." : "Resume uploaded successfully!"}
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">
                      Drag & drop your resume here
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      or click to browse (PDF, DOC, DOCX)
                    </p>
                  </div>
                )}
              </div>

              {isAnalyzing && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <FileText className="h-5 w-5 text-primary" />
                {skills.length > 0 ? "Extracted Skills" : "Add Skills Manually"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add Skill Input */}
              <div className="mb-6 flex gap-3">
                <Input
                  placeholder="Add a skill (e.g., Python, React, Data Analysis)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  className="flex-1"
                />
                <Button onClick={addSkill} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>

              {/* Skills Grid */}
              {skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={`group cursor-pointer px-3 py-1.5 text-sm transition-all ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                      <span className="ml-2 text-xs opacity-60">{skill.level}</span>
                      <button
                        onClick={() => removeSkill(skill.name)}
                        className="ml-2 rounded-full p-0.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-foreground/10"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl bg-muted/50 p-8 text-center">
                  <p className="text-muted-foreground">
                    Upload a resume to extract skills automatically, or add them manually above.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Button */}
          {skills.length > 0 && (
            <div className="text-center">
              <Button onClick={handleAnalyze} variant="hero" size="xl" className="gap-2">
                Find Matching Jobs
                <FileText className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadResume;
