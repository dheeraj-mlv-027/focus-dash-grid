import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, trend, trendUp }: StatCardProps) => {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{title}</p>
        <div className="flex items-end gap-3">
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          {trend && (
            <div className={`flex items-center gap-1 mb-1 ${trendUp ? "text-danger" : "text-success"}`}>
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">{trend}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
