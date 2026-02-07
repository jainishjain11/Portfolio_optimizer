import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  accent?: "blue" | "green" | "amber";
}

const accentMap = {
  blue: "bg-accent-blue-light text-accent-blue",
  green: "bg-accent-green-light text-accent-green",
  amber: "bg-accent-amber-light text-accent-amber",
};

export default function StatCard({ label, value, icon: Icon, accent = "blue" }: StatCardProps) {
  return (
    <div className="surface-elevated rounded-lg p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <div className={`h-8 w-8 rounded-md flex items-center justify-center ${accentMap[accent]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="text-2xl font-semibold text-foreground">{value}</p>
    </div>
  );
}
