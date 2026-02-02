// Dummy data for demonstration purposes

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  category: string;
}

export interface JobRole {
  id: string;
  title: string;
  company: string;
  matchPercentage: number;
  salary: string;
  location: string;
  type: string;
  matchedSkills: string[];
  missingSkills: string[];
  description: string;
}

export interface CareerNode {
  id: string;
  title: string;
  level: string;
  salary: string;
  yearsRequired: number;
  skills: string[];
  children?: string[];
}

export interface RoadmapStep {
  id: string;
  skill: string;
  duration: string;
  resources: { title: string; type: string; url: string }[];
  completed: boolean;
}

export const userSkills: Skill[] = [
  { name: "Python", level: "advanced", category: "Programming" },
  { name: "JavaScript", level: "intermediate", category: "Programming" },
  { name: "React", level: "intermediate", category: "Frontend" },
  { name: "Machine Learning", level: "beginner", category: "AI/ML" },
  { name: "SQL", level: "advanced", category: "Database" },
  { name: "Git", level: "intermediate", category: "Tools" },
  { name: "Data Analysis", level: "intermediate", category: "Analytics" },
  { name: "HTML/CSS", level: "advanced", category: "Frontend" },
];

export const jobRoles: JobRole[] = [
  {
    id: "1",
    title: "Data Scientist",
    company: "TechCorp Inc.",
    matchPercentage: 85,
    salary: "$90,000 - $120,000",
    location: "Remote",
    type: "Full-time",
    matchedSkills: ["Python", "Machine Learning", "SQL", "Data Analysis"],
    missingSkills: ["TensorFlow", "Deep Learning", "Statistics"],
    description: "Analyze complex datasets and build ML models to drive business decisions.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    matchPercentage: 78,
    salary: "$70,000 - $95,000",
    location: "New York, NY",
    type: "Full-time",
    matchedSkills: ["JavaScript", "React", "HTML/CSS", "Git"],
    missingSkills: ["TypeScript", "Next.js", "Testing"],
    description: "Build responsive and interactive user interfaces for web applications.",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    matchPercentage: 72,
    salary: "$80,000 - $110,000",
    location: "San Francisco, CA",
    type: "Full-time",
    matchedSkills: ["Python", "JavaScript", "React", "SQL"],
    missingSkills: ["Node.js", "Docker", "AWS"],
    description: "Develop end-to-end solutions for a fast-growing startup.",
  },
  {
    id: "4",
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    matchPercentage: 65,
    salary: "$100,000 - $140,000",
    location: "Boston, MA",
    type: "Full-time",
    matchedSkills: ["Python", "Machine Learning", "Data Analysis"],
    missingSkills: ["PyTorch", "MLOps", "Computer Vision", "NLP"],
    description: "Design and implement ML systems for production environments.",
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "Analytics Pro",
    matchPercentage: 92,
    salary: "$60,000 - $80,000",
    location: "Chicago, IL",
    type: "Full-time",
    matchedSkills: ["Python", "SQL", "Data Analysis", "Git"],
    missingSkills: ["Tableau", "Power BI"],
    description: "Transform data into actionable insights for business stakeholders.",
  },
];

export const careerPaths: Record<string, CareerNode> = {
  "entry-dev": {
    id: "entry-dev",
    title: "Junior Developer",
    level: "Entry",
    salary: "$50,000 - $70,000",
    yearsRequired: 0,
    skills: ["JavaScript", "HTML/CSS", "Git"],
    children: ["mid-frontend", "mid-backend"],
  },
  "mid-frontend": {
    id: "mid-frontend",
    title: "Frontend Developer",
    level: "Mid",
    salary: "$70,000 - $95,000",
    yearsRequired: 2,
    skills: ["React", "TypeScript", "Testing"],
    children: ["senior-frontend", "fullstack"],
  },
  "mid-backend": {
    id: "mid-backend",
    title: "Backend Developer",
    level: "Mid",
    salary: "$75,000 - $100,000",
    yearsRequired: 2,
    skills: ["Node.js", "Python", "Databases"],
    children: ["senior-backend", "fullstack"],
  },
  "senior-frontend": {
    id: "senior-frontend",
    title: "Senior Frontend Engineer",
    level: "Senior",
    salary: "$110,000 - $150,000",
    yearsRequired: 5,
    skills: ["Architecture", "Performance", "Mentoring"],
    children: ["tech-lead", "architect"],
  },
  "senior-backend": {
    id: "senior-backend",
    title: "Senior Backend Engineer",
    level: "Senior",
    salary: "$115,000 - $160,000",
    yearsRequired: 5,
    skills: ["System Design", "Scalability", "Security"],
    children: ["tech-lead", "architect"],
  },
  "fullstack": {
    id: "fullstack",
    title: "Full Stack Developer",
    level: "Mid-Senior",
    salary: "$90,000 - $130,000",
    yearsRequired: 4,
    skills: ["Frontend", "Backend", "DevOps"],
    children: ["tech-lead", "architect"],
  },
  "tech-lead": {
    id: "tech-lead",
    title: "Tech Lead",
    level: "Lead",
    salary: "$140,000 - $180,000",
    yearsRequired: 7,
    skills: ["Leadership", "Architecture", "Strategy"],
    children: ["engineering-manager", "principal"],
  },
  "architect": {
    id: "architect",
    title: "Software Architect",
    level: "Senior+",
    salary: "$150,000 - $200,000",
    yearsRequired: 8,
    skills: ["System Design", "Cloud", "Strategy"],
    children: ["principal", "cto"],
  },
  "engineering-manager": {
    id: "engineering-manager",
    title: "Engineering Manager",
    level: "Management",
    salary: "$160,000 - $200,000",
    yearsRequired: 8,
    skills: ["People Management", "Strategy", "Hiring"],
    children: ["director", "vp-engineering"],
  },
  "principal": {
    id: "principal",
    title: "Principal Engineer",
    level: "Staff+",
    salary: "$180,000 - $250,000",
    yearsRequired: 10,
    skills: ["Technical Vision", "Innovation", "Mentoring"],
  },
  "director": {
    id: "director",
    title: "Director of Engineering",
    level: "Director",
    salary: "$200,000 - $280,000",
    yearsRequired: 12,
    skills: ["Strategy", "Budget", "Cross-functional"],
  },
};

export const skillRoadmap: RoadmapStep[] = [
  {
    id: "1",
    skill: "TypeScript",
    duration: "2-3 weeks",
    resources: [
      { title: "TypeScript Handbook", type: "Documentation", url: "#" },
      { title: "TypeScript Deep Dive", type: "Book", url: "#" },
      { title: "Build a Project with TS", type: "Project", url: "#" },
    ],
    completed: false,
  },
  {
    id: "2",
    skill: "Next.js",
    duration: "3-4 weeks",
    resources: [
      { title: "Next.js Official Docs", type: "Documentation", url: "#" },
      { title: "Next.js Crash Course", type: "Video", url: "#" },
      { title: "Build a Full-Stack App", type: "Project", url: "#" },
    ],
    completed: false,
  },
  {
    id: "3",
    skill: "Testing (Jest/Cypress)",
    duration: "2 weeks",
    resources: [
      { title: "Testing Library Docs", type: "Documentation", url: "#" },
      { title: "Test-Driven Development", type: "Course", url: "#" },
      { title: "Add Tests to a Project", type: "Project", url: "#" },
    ],
    completed: false,
  },
  {
    id: "4",
    skill: "Node.js",
    duration: "4 weeks",
    resources: [
      { title: "Node.js Documentation", type: "Documentation", url: "#" },
      { title: "Node.js Complete Guide", type: "Course", url: "#" },
      { title: "Build a REST API", type: "Project", url: "#" },
    ],
    completed: false,
  },
  {
    id: "5",
    skill: "Docker",
    duration: "2 weeks",
    resources: [
      { title: "Docker Get Started", type: "Documentation", url: "#" },
      { title: "Docker for Developers", type: "Course", url: "#" },
      { title: "Containerize an App", type: "Project", url: "#" },
    ],
    completed: false,
  },
  {
    id: "6",
    skill: "AWS Basics",
    duration: "4 weeks",
    resources: [
      { title: "AWS Free Tier Tutorial", type: "Documentation", url: "#" },
      { title: "Cloud Practitioner Prep", type: "Course", url: "#" },
      { title: "Deploy to AWS", type: "Project", url: "#" },
    ],
    completed: false,
  },
];

export const dashboardStats = {
  overallReadiness: 72,
  skillsCompleted: 8,
  totalSkills: 12,
  hoursLearned: 45,
  certificationsEarned: 2,
  jobsMatched: 15,
  weeklyProgress: [65, 68, 70, 72, 72, 74, 72],
  skillBreakdown: {
    programming: 85,
    frontend: 75,
    backend: 45,
    devops: 30,
    softSkills: 80,
  },
};
