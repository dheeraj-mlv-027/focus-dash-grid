import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, PieChart, Pie, Cell } from "recharts";
import { BarChart3 } from "lucide-react";

const Analytics = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const attendanceData = [
    { range: "0-20", count: 250 },
    { range: "20-40", count: 450 },
    { range: "40-60", count: 800 },
    { range: "60-70", count: 1200 },
    { range: "70-80", count: 2500 },
    { range: "80-90", count: 4200 },
    { range: "90-100", count: 3000 },
  ];

  const gpaData = [
    { range: "0.0-1.0", count: 500 },
    { range: "1.0-1.5", count: 800 },
    { range: "1.5-2.0", count: 1200 },
    { range: "2.0-2.5", count: 2500 },
    { range: "2.5-3.0", count: 3500 },
    { range: "3.0-3.5", count: 3000 },
    { range: "3.5-4.0", count: 2000 },
  ];

  const majorData = [
    { major: "Mathematics", count: 245, percentage: 100 },
    { major: "Computer_Science", count: 215, percentage: 88 },
    { major: "Engineering", count: 210, percentage: 86 },
    { major: "Nursing", count: 182, percentage: 74 },
    { major: "Chemistry", count: 167, percentage: 68 },
    { major: "Biology", count: 144, percentage: 59 },
    { major: "Psychology", count: 100, percentage: 41 },
    { major: "Arts", count: 104, percentage: 42 },
    { major: "Education", count: 166, percentage: 68 },
    { major: "Business", count: 111, percentage: 45 },
  ];

  const scatterData = Array.from({ length: 200 }, () => ({
    assignments: Math.random() * 40 + 60,
    gpa: Math.random() * 2 + 1.5,
  }));

  const attendanceRangeData = [
    { range: "<60%", count: 1500, color: "#dc2626" },
    { range: "60-70%", count: 3000, color: "#ea580c" },
    { range: "70-80%", count: 2500, color: "#facc15" },
    { range: "80-90%", count: 6000, color: "#22c55e" },
    { range: "90-100%", count: 6000, color: "#10b981" },
  ];

  const courseDropData = [
    { drops: "0", count: 5500 },
    { drops: "0-1", count: 6500 },
    { drops: "1-2", count: 4000 },
    { drops: "2-3", count: 1500 },
  ];

  const probationData = [
    { name: "Not on Probation", value: 17985, color: "#22c55e" },
    { name: "On Probation", value: 1015, color: "#dc2626" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="h-8 w-8 text-danger" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Risk Monitoring Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Last Updated: {currentDate}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mb-6">📊 Student Analytics Dashboard</h2>

      {/* Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Attendance Rate Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="range" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Cumulative GPA Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gpaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="range" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="count" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Major and Scatter Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">At-Risk Students by Major</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={majorData} layout="vertical" margin={{ left: 80 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="major" type="category" stroke="#9ca3af" width={100} />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="count" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Assignment Completion vs GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#374151" />
                <XAxis type="number" dataKey="assignments" name="Assignments" stroke="#9ca3af" />
                <YAxis type="number" dataKey="gpa" name="GPA" stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Scatter data={scatterData} fill="#3b82f6" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Risk Indicators */}
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Risk Indicators</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Students by Attendance Range</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceRangeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="range" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="count">
                  {attendanceRangeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Students by Course Drops</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseDropData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="drops" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
                <Bar dataKey="count" fill="#ea580c" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Probation Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={probationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {probationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
