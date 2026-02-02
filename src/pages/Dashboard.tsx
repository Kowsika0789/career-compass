import { TrendingUp, Award, Clock, Briefcase, Target, BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { dashboardStats } from "@/data/dummyData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

const Dashboard = () => {
  const weeklyData = dashboardStats.weeklyProgress.map((value, index) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
    progress: value,
  }));

  const skillBreakdownData = Object.entries(dashboardStats.skillBreakdown).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
    value,
    fill: name === "programming" ? "hsl(var(--primary))" :
          name === "frontend" ? "hsl(var(--secondary))" :
          name === "backend" ? "hsl(var(--success))" :
          name === "devops" ? "hsl(var(--warning))" :
          "hsl(var(--accent-foreground))",
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Your Dashboard
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Track your progress and see how ready you are for your dream career.
          </p>
        </div>

        {/* Overall Readiness */}
        <Card className="mb-8 overflow-hidden border-none shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-hero p-8 text-white">
              <h2 className="font-display text-2xl font-bold">Career Readiness Score</h2>
              <p className="mt-2 text-white/80">Based on your skills and learning progress</p>
              
              <div className="mt-6 flex items-end gap-4">
                <span className="font-display text-7xl font-bold">{dashboardStats.overallReadiness}</span>
                <span className="mb-2 text-2xl text-white/80">/ 100</span>
              </div>

              <div className="mt-4">
                <Progress value={dashboardStats.overallReadiness} className="h-3 bg-white/20" />
              </div>

              <p className="mt-4 text-white/80">
                You're making great progress! Keep learning to improve your score.
              </p>
            </div>

            <CardContent className="flex items-center justify-center p-8">
              <div className="grid w-full grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {dashboardStats.skillsCompleted}/{dashboardStats.totalSkills}
                  </p>
                  <p className="text-sm text-muted-foreground">Skills Completed</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                    <Clock className="h-7 w-7 text-secondary" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {dashboardStats.hoursLearned}h
                  </p>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                    <Award className="h-7 w-7 text-success" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {dashboardStats.certificationsEarned}
                  </p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-warning/10">
                    <Briefcase className="h-7 w-7 text-warning" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {dashboardStats.jobsMatched}
                  </p>
                  <p className="text-sm text-muted-foreground">Jobs Matched</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Charts Row */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Weekly Progress Chart */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <TrendingUp className="h-5 w-5 text-primary" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="progress" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Skill Breakdown */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-display">
                <Target className="h-5 w-5 text-primary" />
                Skill Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(dashboardStats.skillBreakdown).map(([skill, value]) => (
                  <div key={skill}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="capitalize text-foreground">
                        {skill.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-medium text-muted-foreground">{value}%</span>
                    </div>
                    <Progress 
                      value={value} 
                      className={`h-2 ${
                        skill === "programming" ? "bg-primary/20" :
                        skill === "frontend" ? "bg-secondary/20" :
                        skill === "backend" ? "bg-success/20" :
                        skill === "devops" ? "bg-warning/20" :
                        "bg-accent"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <BookOpen className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed TypeScript Basics", time: "2 hours ago", icon: CheckCircle, color: "text-success" },
                { action: "Started Next.js Course", time: "1 day ago", icon: BookOpen, color: "text-primary" },
                { action: "Matched with Data Analyst role", time: "2 days ago", icon: Briefcase, color: "text-secondary" },
                { action: "Earned React Certification", time: "3 days ago", icon: Award, color: "text-warning" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-card ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
