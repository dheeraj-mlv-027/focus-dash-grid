import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar } from "lucide-react";

const Overview = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const riskFactors = [
    { icon: "📊", text: "Low attendance rate" },
    { icon: "📚", text: "Poor academic performance (GPA)" },
    { icon: "📝", text: "Low assignment completion" },
    { icon: "📉", text: "High course drop rate" },
    { icon: "💻", text: "Low LMS engagement" },
    { icon: "⚠️", text: "Probation status" },
  ];

  const summaryItems = [
    { label: "Total Unique Students", value: "18,000" },
    { label: "Total Records", value: "72,000" },
    { label: "At-Risk Students", value: "1,805 (10.0%)" },
    { label: "Average Attendance", value: "87.7%" },
    { label: "Average GPA", value: "2.84" },
    { label: "Students on Probation", value: "344" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart className="h-8 w-8 text-danger" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Risk Monitoring Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Last Updated: {currentDate}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Students" value="18,000" />
        <StatCard title="At-Risk Students" value="4,810" trend="26.7%" trendUp={true} />
        <StatCard title="Low Attendance (<80%)" value="9,131" />
        <StatCard title="Low GPA (<2.0)" value="997" />
        <StatCard title="On Probation" value="1,015" />
      </div>

      {/* Quick Summary and Risk Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Quick Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {summaryItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-danger flex-shrink-0" />
                  <span className="text-foreground">
                    <span className="font-medium">{item.label}:</span> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Students are flagged as at-risk based on:</p>
            <ul className="space-y-3">
              {riskFactors.map((factor, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-xl">{factor.icon}</span>
                  <span className="text-foreground">{factor.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
