import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const StudentSearch = () => {
  const [studentId, setStudentId] = useState("");

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
        <Search className="h-8 w-8 text-danger" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Risk Monitoring Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Last Updated: {currentDate}</p>
        </div>
      </div>

      {/* Search Card */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6 text-foreground" />
            <CardTitle className="text-2xl font-semibold text-foreground">Student Search</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Enter Student ID:</label>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="e.g., HSU100000"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-danger hover:bg-danger/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Enter a student ID to view their risk profile and detailed information.
          </p>
        </CardContent>
      </Card>

      {/* Placeholder for search results */}
      <Card className="bg-card border-border">
        <CardContent className="py-12">
          <div className="text-center text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Enter a student ID and click search to view results</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentSearch;
