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
  requiredSkills: string[];
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

// Comprehensive skill keywords for resume parsing
export const skillKeywords: Record<string, { category: string; level: "beginner" | "intermediate" | "advanced" }> = {
  // Programming Languages
  "python": { category: "Programming", level: "intermediate" },
  "javascript": { category: "Programming", level: "intermediate" },
  "typescript": { category: "Programming", level: "intermediate" },
  "java": { category: "Programming", level: "intermediate" },
  "c++": { category: "Programming", level: "intermediate" },
  "c#": { category: "Programming", level: "intermediate" },
  "go": { category: "Programming", level: "intermediate" },
  "rust": { category: "Programming", level: "intermediate" },
  "ruby": { category: "Programming", level: "intermediate" },
  "php": { category: "Programming", level: "intermediate" },
  "kotlin": { category: "Programming", level: "intermediate" },
  "swift": { category: "Programming", level: "intermediate" },
  "scala": { category: "Programming", level: "intermediate" },
  "r": { category: "Programming", level: "intermediate" },
  
  // Frontend
  "react": { category: "Frontend", level: "intermediate" },
  "angular": { category: "Frontend", level: "intermediate" },
  "vue": { category: "Frontend", level: "intermediate" },
  "next.js": { category: "Frontend", level: "intermediate" },
  "nextjs": { category: "Frontend", level: "intermediate" },
  "html": { category: "Frontend", level: "advanced" },
  "css": { category: "Frontend", level: "advanced" },
  "html/css": { category: "Frontend", level: "advanced" },
  "sass": { category: "Frontend", level: "intermediate" },
  "tailwind": { category: "Frontend", level: "intermediate" },
  "bootstrap": { category: "Frontend", level: "intermediate" },
  "redux": { category: "Frontend", level: "intermediate" },
  
  // Backend
  "node.js": { category: "Backend", level: "intermediate" },
  "nodejs": { category: "Backend", level: "intermediate" },
  "express": { category: "Backend", level: "intermediate" },
  "django": { category: "Backend", level: "intermediate" },
  "flask": { category: "Backend", level: "intermediate" },
  "spring": { category: "Backend", level: "intermediate" },
  "spring boot": { category: "Backend", level: "intermediate" },
  "fastapi": { category: "Backend", level: "intermediate" },
  "graphql": { category: "Backend", level: "intermediate" },
  "rest api": { category: "Backend", level: "intermediate" },
  
  // Database
  "sql": { category: "Database", level: "intermediate" },
  "mysql": { category: "Database", level: "intermediate" },
  "postgresql": { category: "Database", level: "intermediate" },
  "mongodb": { category: "Database", level: "intermediate" },
  "redis": { category: "Database", level: "intermediate" },
  "firebase": { category: "Database", level: "intermediate" },
  "oracle": { category: "Database", level: "intermediate" },
  "cassandra": { category: "Database", level: "intermediate" },
  
  // AI/ML
  "machine learning": { category: "AI/ML", level: "intermediate" },
  "deep learning": { category: "AI/ML", level: "intermediate" },
  "tensorflow": { category: "AI/ML", level: "intermediate" },
  "pytorch": { category: "AI/ML", level: "intermediate" },
  "keras": { category: "AI/ML", level: "intermediate" },
  "nlp": { category: "AI/ML", level: "intermediate" },
  "computer vision": { category: "AI/ML", level: "intermediate" },
  "ai": { category: "AI/ML", level: "intermediate" },
  "neural networks": { category: "AI/ML", level: "intermediate" },
  "scikit-learn": { category: "AI/ML", level: "intermediate" },
  
  // DevOps & Cloud
  "docker": { category: "DevOps", level: "intermediate" },
  "kubernetes": { category: "DevOps", level: "intermediate" },
  "aws": { category: "Cloud", level: "intermediate" },
  "azure": { category: "Cloud", level: "intermediate" },
  "gcp": { category: "Cloud", level: "intermediate" },
  "google cloud": { category: "Cloud", level: "intermediate" },
  "ci/cd": { category: "DevOps", level: "intermediate" },
  "jenkins": { category: "DevOps", level: "intermediate" },
  "terraform": { category: "DevOps", level: "intermediate" },
  "ansible": { category: "DevOps", level: "intermediate" },
  
  // Tools
  "git": { category: "Tools", level: "intermediate" },
  "github": { category: "Tools", level: "intermediate" },
  "jira": { category: "Tools", level: "intermediate" },
  "linux": { category: "Tools", level: "intermediate" },
  "agile": { category: "Tools", level: "intermediate" },
  "scrum": { category: "Tools", level: "intermediate" },
  
  // Analytics
  "data analysis": { category: "Analytics", level: "intermediate" },
  "data analytics": { category: "Analytics", level: "intermediate" },
  "tableau": { category: "Analytics", level: "intermediate" },
  "power bi": { category: "Analytics", level: "intermediate" },
  "excel": { category: "Analytics", level: "intermediate" },
  "pandas": { category: "Analytics", level: "intermediate" },
  "numpy": { category: "Analytics", level: "intermediate" },
  "statistics": { category: "Analytics", level: "intermediate" },
  
  // Mobile
  "android": { category: "Mobile", level: "intermediate" },
  "ios": { category: "Mobile", level: "intermediate" },
  "react native": { category: "Mobile", level: "intermediate" },
  "flutter": { category: "Mobile", level: "intermediate" },
  
  // Testing
  "testing": { category: "Testing", level: "intermediate" },
  "jest": { category: "Testing", level: "intermediate" },
  "selenium": { category: "Testing", level: "intermediate" },
  "cypress": { category: "Testing", level: "intermediate" },
  "unit testing": { category: "Testing", level: "intermediate" },
};

// Indian companies and job roles with INR salaries
export const jobRoles: JobRole[] = [
  {
    id: "1",
    title: "Data Scientist",
    company: "Tata Consultancy Services",
    matchPercentage: 0,
    salary: "₹8,00,000 - ₹15,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Analyze complex datasets and build ML models to drive business decisions for enterprise clients.",
    requiredSkills: ["Python", "Machine Learning", "SQL", "Data Analysis", "Statistics", "TensorFlow"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Infosys",
    matchPercentage: 0,
    salary: "₹6,00,000 - ₹12,00,000",
    location: "Pune, Maharashtra",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build responsive and interactive user interfaces for web applications using modern frameworks.",
    requiredSkills: ["JavaScript", "React", "HTML/CSS", "Git", "TypeScript", "Redux"],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Wipro",
    matchPercentage: 0,
    salary: "₹7,00,000 - ₹14,00,000",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Develop end-to-end solutions for digital transformation projects.",
    requiredSkills: ["Python", "JavaScript", "React", "SQL", "Node.js", "Docker"],
  },
  {
    id: "4",
    title: "Machine Learning Engineer",
    company: "Flipkart",
    matchPercentage: 0,
    salary: "₹12,00,000 - ₹25,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Design and implement ML systems for e-commerce recommendations and search.",
    requiredSkills: ["Python", "Machine Learning", "Deep Learning", "PyTorch", "MLOps", "Computer Vision"],
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "Paytm",
    matchPercentage: 0,
    salary: "₹5,00,000 - ₹10,00,000",
    location: "Noida, Uttar Pradesh",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Transform data into actionable insights for fintech products and services.",
    requiredSkills: ["Python", "SQL", "Data Analysis", "Excel", "Tableau", "Statistics"],
  },
  {
    id: "6",
    title: "Software Engineer",
    company: "Google India",
    matchPercentage: 0,
    salary: "₹18,00,000 - ₹35,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build scalable software solutions for billions of users worldwide.",
    requiredSkills: ["Python", "JavaScript", "Data Structures", "Algorithms", "System Design", "Git"],
  },
  {
    id: "7",
    title: "Backend Developer",
    company: "Razorpay",
    matchPercentage: 0,
    salary: "₹10,00,000 - ₹20,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build secure and scalable payment infrastructure for businesses.",
    requiredSkills: ["Python", "Node.js", "SQL", "Redis", "Docker", "AWS"],
  },
  {
    id: "8",
    title: "DevOps Engineer",
    company: "Zomato",
    matchPercentage: 0,
    salary: "₹9,00,000 - ₹18,00,000",
    location: "Gurugram, Haryana",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Manage cloud infrastructure and CI/CD pipelines for food delivery platform.",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform"],
  },
  {
    id: "9",
    title: "React Developer",
    company: "Swiggy",
    matchPercentage: 0,
    salary: "₹8,00,000 - ₹16,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build seamless user experiences for food delivery applications.",
    requiredSkills: ["React", "JavaScript", "TypeScript", "Redux", "HTML/CSS", "Git"],
  },
  {
    id: "10",
    title: "AI Research Engineer",
    company: "Microsoft India",
    matchPercentage: 0,
    salary: "₹20,00,000 - ₹40,00,000",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Research and develop cutting-edge AI solutions for enterprise products.",
    requiredSkills: ["Python", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Research"],
  },
  {
    id: "11",
    title: "Cloud Solutions Architect",
    company: "Amazon India",
    matchPercentage: 0,
    salary: "₹22,00,000 - ₹45,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Design and implement cloud architectures for enterprise customers.",
    requiredSkills: ["AWS", "Python", "Docker", "Kubernetes", "Terraform", "System Design"],
  },
  {
    id: "12",
    title: "Mobile App Developer",
    company: "PhonePe",
    matchPercentage: 0,
    salary: "₹10,00,000 - ₹22,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Develop mobile applications for India's leading digital payments platform.",
    requiredSkills: ["React Native", "JavaScript", "TypeScript", "Android", "iOS", "Git"],
  },
  {
    id: "13",
    title: "Business Intelligence Analyst",
    company: "Reliance Jio",
    matchPercentage: 0,
    salary: "₹7,00,000 - ₹14,00,000",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Create dashboards and reports for telecom business insights.",
    requiredSkills: ["SQL", "Power BI", "Excel", "Data Analysis", "Python", "Statistics"],
  },
  {
    id: "14",
    title: "Python Developer",
    company: "Tech Mahindra",
    matchPercentage: 0,
    salary: "₹5,50,000 - ₹11,00,000",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Develop Python-based automation and backend solutions.",
    requiredSkills: ["Python", "Django", "SQL", "Git", "REST API", "Linux"],
  },
  {
    id: "15",
    title: "Quality Assurance Engineer",
    company: "Mindtree",
    matchPercentage: 0,
    salary: "₹4,50,000 - ₹9,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Ensure software quality through manual and automated testing.",
    requiredSkills: ["Testing", "Selenium", "Python", "SQL", "Agile", "JIRA"],
  },
  {
    id: "16",
    title: "Java Developer",
    company: "HCL Technologies",
    matchPercentage: 0,
    salary: "₹6,00,000 - ₹13,00,000",
    location: "Noida, Uttar Pradesh",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build enterprise Java applications for banking and finance clients.",
    requiredSkills: ["Java", "Spring Boot", "SQL", "Git", "REST API", "Microservices"],
  },
  {
    id: "17",
    title: "Data Engineer",
    company: "Ola",
    matchPercentage: 0,
    salary: "₹11,00,000 - ₹22,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Build data pipelines for real-time ride analytics and predictions.",
    requiredSkills: ["Python", "SQL", "Apache Spark", "AWS", "Data Analysis", "Kafka"],
  },
  {
    id: "18",
    title: "UI/UX Designer",
    company: "Freshworks",
    matchPercentage: 0,
    salary: "₹8,00,000 - ₹18,00,000",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Design intuitive user interfaces for SaaS products.",
    requiredSkills: ["Figma", "HTML/CSS", "JavaScript", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: "19",
    title: "Cybersecurity Analyst",
    company: "Infosys",
    matchPercentage: 0,
    salary: "₹7,00,000 - ₹15,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Protect enterprise systems from security threats and vulnerabilities.",
    requiredSkills: ["Python", "Linux", "Networking", "Security", "SQL", "Cloud Security"],
  },
  {
    id: "20",
    title: "Product Manager",
    company: "Zerodha",
    matchPercentage: 0,
    salary: "₹15,00,000 - ₹30,00,000",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    matchedSkills: [],
    missingSkills: [],
    description: "Lead product strategy for India's largest stock trading platform.",
    requiredSkills: ["Data Analysis", "SQL", "Agile", "Communication", "Strategy", "User Research"],
  },
];

// Function to calculate job matches based on user skills
export const calculateJobMatches = (userSkillsList: Skill[]): JobRole[] => {
  const userSkillNames = userSkillsList.map(s => s.name.toLowerCase());
  
  return jobRoles.map(job => {
    const matchedSkills = job.requiredSkills.filter(skill => 
      userSkillNames.some(userSkill => 
        userSkill.includes(skill.toLowerCase()) || skill.toLowerCase().includes(userSkill)
      )
    );
    const missingSkills = job.requiredSkills.filter(skill => 
      !userSkillNames.some(userSkill => 
        userSkill.includes(skill.toLowerCase()) || skill.toLowerCase().includes(userSkill)
      )
    );
    const matchPercentage = Math.round((matchedSkills.length / job.requiredSkills.length) * 100);
    
    return {
      ...job,
      matchedSkills,
      missingSkills,
      matchPercentage,
    };
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);
};

// Function to extract skills from resume text
export const extractSkillsFromText = (text: string): Skill[] => {
  const lowerText = text.toLowerCase();
  const foundSkills: Skill[] = [];
  const addedSkills = new Set<string>();
  
  Object.entries(skillKeywords).forEach(([keyword, { category, level }]) => {
    if (lowerText.includes(keyword) && !addedSkills.has(keyword)) {
      // Capitalize first letter of each word
      const formattedName = keyword
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      foundSkills.push({
        name: formattedName,
        level,
        category,
      });
      addedSkills.add(keyword);
    }
  });
  
  return foundSkills;
};

export const careerPaths: Record<string, CareerNode> = {
  "entry-dev": {
    id: "entry-dev",
    title: "Junior Developer",
    level: "Entry",
    salary: "₹3,00,000 - ₹6,00,000",
    yearsRequired: 0,
    skills: ["JavaScript", "HTML/CSS", "Git"],
    children: ["mid-frontend", "mid-backend"],
  },
  "mid-frontend": {
    id: "mid-frontend",
    title: "Frontend Developer",
    level: "Mid",
    salary: "₹6,00,000 - ₹12,00,000",
    yearsRequired: 2,
    skills: ["React", "TypeScript", "Testing"],
    children: ["senior-frontend", "fullstack"],
  },
  "mid-backend": {
    id: "mid-backend",
    title: "Backend Developer",
    level: "Mid",
    salary: "₹7,00,000 - ₹14,00,000",
    yearsRequired: 2,
    skills: ["Node.js", "Python", "Databases"],
    children: ["senior-backend", "fullstack"],
  },
  "senior-frontend": {
    id: "senior-frontend",
    title: "Senior Frontend Engineer",
    level: "Senior",
    salary: "₹14,00,000 - ₹25,00,000",
    yearsRequired: 5,
    skills: ["Architecture", "Performance", "Mentoring"],
    children: ["tech-lead", "architect"],
  },
  "senior-backend": {
    id: "senior-backend",
    title: "Senior Backend Engineer",
    level: "Senior",
    salary: "₹15,00,000 - ₹28,00,000",
    yearsRequired: 5,
    skills: ["System Design", "Scalability", "Security"],
    children: ["tech-lead", "architect"],
  },
  "fullstack": {
    id: "fullstack",
    title: "Full Stack Developer",
    level: "Mid-Senior",
    salary: "₹10,00,000 - ₹20,00,000",
    yearsRequired: 4,
    skills: ["Frontend", "Backend", "DevOps"],
    children: ["tech-lead", "architect"],
  },
  "tech-lead": {
    id: "tech-lead",
    title: "Tech Lead",
    level: "Lead",
    salary: "₹22,00,000 - ₹40,00,000",
    yearsRequired: 7,
    skills: ["Leadership", "Architecture", "Strategy"],
    children: ["engineering-manager", "principal"],
  },
  "architect": {
    id: "architect",
    title: "Software Architect",
    level: "Senior+",
    salary: "₹25,00,000 - ₹50,00,000",
    yearsRequired: 8,
    skills: ["System Design", "Cloud", "Strategy"],
    children: ["principal", "cto"],
  },
  "engineering-manager": {
    id: "engineering-manager",
    title: "Engineering Manager",
    level: "Management",
    salary: "₹30,00,000 - ₹55,00,000",
    yearsRequired: 8,
    skills: ["People Management", "Strategy", "Hiring"],
    children: ["director", "vp-engineering"],
  },
  "principal": {
    id: "principal",
    title: "Principal Engineer",
    level: "Staff+",
    salary: "₹40,00,000 - ₹80,00,000",
    yearsRequired: 10,
    skills: ["Technical Vision", "Innovation", "Mentoring"],
  },
  "director": {
    id: "director",
    title: "Director of Engineering",
    level: "Director",
    salary: "₹50,00,000 - ₹1,00,00,000",
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
