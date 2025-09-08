import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: "metric-1" | "metric-2" | "metric-3" | "metric-4";
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
}

export function MetricCard({ title, value, icon: Icon, color, change }: MetricCardProps) {
  const colorClasses = {
    "metric-1": "text-red-500",
    "metric-2": "text-yellow-500", 
    "metric-3": "text-green-500",
    "metric-4": "text-blue-500",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${colorClasses[color]}`} />
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
              {change && (
                <p className={`text-xs ${
                  change.type === "increase" ? "text-green-600" : "text-red-600"
                }`}>
                  {change.type === "increase" ? "+" : "-"}{change.value}%
                </p>
              )}
            </div>
          </div>
          <Icon size={24} className="text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}