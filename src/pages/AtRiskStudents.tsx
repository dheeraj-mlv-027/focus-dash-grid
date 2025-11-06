import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";

const AtRiskStudents = () => {
  const [maxGPA, setMaxGPA] = useState([4.0]);
  const [maxAttendance, setMaxAttendance] = useState([100]);

  const students = [
    { id: "HSU100003", major: "Arts", term: "T4", gpa: 3.25, attendance: 77.1, assignments: 88.0, drops: 2, probation: 0, risk: 33.8 },
    { id: "HSU100008", major: "Chemistry", term: "T4", gpa: 2.18, attendance: 67.3, assignments: 94.4, drops: 2, probation: 0, risk: 51.1 },
    { id: "HSU100011", major: "Mathematics", term: "T3", gpa: 2.46, attendance: 86.4, assignments: 87.5, drops: 2, probation: 0, risk: 25.3 },
    { id: "HSU100014", major: "Chemistry", term: "T4", gpa: 2.36, attendance: 86.2, assignments: 90.7, drops: 1, probation: 0, risk: 31.2 },
    { id: "HSU100019", major: "Education", term: "T3", gpa: 2.1, attendance: 82.1, assignments: 83.8, drops: 0, probation: 0, risk: 25.6 },
    { id: "HSU100020", major: "Engineering", term: "T4", gpa: 2.48, attendance: 87.3, assignments: 99.2, drops: 1, probation: 0, risk: 34.9 },
    { id: "HSU100022", major: "Biology", term: "T3", gpa: 3.16, attendance: 75.1, assignments: 70.1, drops: 1, probation: 0, risk: 27.7 },
    { id: "HSU100025", major: "Computer_Science", term: "T3", gpa: 3.17, attendance: 84.4, assignments: 81.1, drops: 1, probation: 0, risk: 27.1 },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-8 w-8 text-danger" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Risk Monitoring Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Last Updated: {currentDate}</p>
        </div>
      </div>

      {/* At-Risk Students Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-danger" />
            <CardTitle className="text-2xl font-semibold text-foreground">At-Risk Students</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Filter by Major</label>
              <Select>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all">All Majors</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Maximum GPA</label>
              <div className="space-y-2">
                <Slider
                  value={maxGPA}
                  onValueChange={setMaxGPA}
                  min={0}
                  max={4}
                  step={0.1}
                  className="[&_[role=slider]]:bg-danger [&_[role=slider]]:border-danger"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0.00</span>
                  <span className="font-medium text-foreground">{maxGPA[0].toFixed(2)}</span>
                  <span>4.00</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Maximum Attendance %</label>
              <div className="space-y-2">
                <Slider
                  value={maxAttendance}
                  onValueChange={setMaxAttendance}
                  min={0}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-danger [&_[role=slider]]:border-danger"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span className="font-medium text-foreground">{maxAttendance[0]}</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Student Count */}
          <p className="text-foreground font-medium">Showing 4810 at-risk students</p>

          {/* Table */}
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary border-border hover:bg-secondary">
                  <TableHead className="text-foreground font-semibold">Student ID</TableHead>
                  <TableHead className="text-foreground font-semibold">Major</TableHead>
                  <TableHead className="text-foreground font-semibold">Term</TableHead>
                  <TableHead className="text-foreground font-semibold">Cumulative GPA</TableHead>
                  <TableHead className="text-foreground font-semibold">Attendance Rate</TableHead>
                  <TableHead className="text-foreground font-semibold">Assignments On Time</TableHead>
                  <TableHead className="text-foreground font-semibold">Course Drops</TableHead>
                  <TableHead className="text-foreground font-semibold">On Probation</TableHead>
                  <TableHead className="text-foreground font-semibold">Dropout Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index} className="border-border hover:bg-secondary/50">
                    <TableCell className="font-medium text-foreground">{student.id}</TableCell>
                    <TableCell className="text-foreground">{student.major}</TableCell>
                    <TableCell className="text-foreground">{student.term}</TableCell>
                    <TableCell className="text-foreground">{student.gpa.toFixed(2)}</TableCell>
                    <TableCell className="text-foreground">{student.attendance.toFixed(1)}%</TableCell>
                    <TableCell className="text-foreground">{student.assignments.toFixed(1)}%</TableCell>
                    <TableCell className="text-foreground">{student.drops}</TableCell>
                    <TableCell className="text-foreground">{student.probation}</TableCell>
                    <TableCell className="text-foreground">{student.risk.toFixed(1)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AtRiskStudents;
