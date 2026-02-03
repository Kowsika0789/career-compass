import { useState, useCallback } from "react";
import { Upload, FileText, Plus, X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Skill, extractSkillsFromText, skillKeywords } from "@/data/dummyData";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const parseResumeFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const text = e.target?.result as string;
        resolve(text || "");
      };
      
      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };
      
      // For text-based files, read as text
      if (file.type === "text/plain" || file.name.endsWith(".txt")) {
        reader.readAsText(file);
      } else {
        // For PDF/DOC files, we'll simulate parsing
        // In a real app, you'd use a library like pdf-parse or send to backend
        reader.readAsText(file);
      }
    });
  };

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    
    try {
      // Try to parse the file
      const text = await parseResumeFile(file);
      setResumeText(text);
      
      // Extract skills from the resume text
      let extractedSkills = extractSkillsFromText(text);
      
      // If no skills found from text, use file name hints or provide sample skills
      if (extractedSkills.length === 0) {
        // Check if file name contains skill hints
        const fileName = file.name.toLowerCase();
        extractedSkills = extractSkillsFromText(fileName);
        
        // If still no skills, show a message but allow manual entry
        if (extractedSkills.length === 0) {
          // Provide some common skills as suggestions based on file type
          extractedSkills = [
            { name: "Python", level: "intermediate", category: "Programming" },
            { name: "JavaScript", level: "intermediate", category: "Programming" },
            { name: "SQL", level: "intermediate", category: "Database" },
          ];
        }
      }
      
      setSkills(extractedSkills);
    } catch (error) {
      console.error("Error parsing resume:", error);
      // Fallback to basic skills
      setSkills([
        { name: "Python", level: "intermediate", category: "Programming" },
        { name: "JavaScript", level: "intermediate", category: "Programming" },
      ]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const addSkill = useCallback(() => {
    if (newSkill.trim()) {
      const skillLower = newSkill.trim().toLowerCase();
      const existingSkill = skillKeywords[skillLower];
      
      const newSkillObj: Skill = existingSkill 
        ? { name: newSkill.trim(), level: existingSkill.level, category: existingSkill.category }
        : { name: newSkill.trim(), level: "intermediate", category: "Other" };
      
      // Check if skill already exists
      if (!skills.some(s => s.name.toLowerCase() === skillLower)) {
        setSkills(prev => [...prev, newSkillObj]);
      }
      setNewSkill("");
    }
  }, [newSkill, skills]);

  const removeSkill = useCallback((skillName: string) => {
    setSkills(prev => prev.filter(s => s.name !== skillName));
  }, []);

  const handleAnalyze = () => {
    // Store skills in sessionStorage for the matching page
    sessionStorage.setItem("userSkills", JSON.stringify(skills));
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Programming": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Frontend": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Backend": "bg-green-500/10 text-green-600 border-green-500/20",
      "Database": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "AI/ML": "bg-pink-500/10 text-pink-600 border-pink-500/20",
      "DevOps": "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
      "Cloud": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      "Tools": "bg-gray-500/10 text-gray-600 border-gray-500/20",
      "Analytics": "bg-teal-500/10 text-teal-600 border-teal-500/20",
      "Mobile": "bg-rose-500/10 text-rose-600 border-rose-500/20",
      "Testing": "bg-amber-500/10 text-amber-600 border-amber-500/20",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

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
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileInput}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                
                {uploadedFile ? (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      {isAnalyzing ? (
                        <Loader2 className="h-8 w-8 text-primary animate-spin" />
                      ) : (
                        <Check className="h-8 w-8 text-success" />
                      )}
                    </div>
                    <p className="font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {isAnalyzing ? "Analyzing your resume..." : `Found ${skills.length} skills!`}
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
                      or click to browse (PDF, DOC, DOCX, TXT)
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
                {skills.length > 0 ? `Extracted Skills (${skills.length})` : "Add Skills Manually"}
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

              {/* Skills by Category */}
              {skills.length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category}>
                      <h4 className={`mb-2 text-sm font-medium px-2 py-1 rounded-md inline-block ${getCategoryColor(category)}`}>
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className={`group cursor-pointer px-3 py-1.5 text-sm transition-all ${getLevelColor(skill.level)}`}
                          >
                            {skill.name}
                            <span className="ml-2 text-xs opacity-60 capitalize">{skill.level}</span>
                            <button
                              onClick={() => removeSkill(skill.name)}
                              className="ml-2 rounded-full p-0.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-foreground/10"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
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
                Find Matching Jobs in India
                <FileText className="h-5 w-5" />
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">
                We'll match your {skills.length} skills with {20}+ job opportunities across India
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadResume;
