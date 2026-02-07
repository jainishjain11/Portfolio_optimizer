import { Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface PremiumGateProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PremiumGate({ title, description, children }: PremiumGateProps) {
  return (
    <div className="relative">
      {children && (
        <div className="pointer-events-none select-none opacity-20 blur-[2px]">
          {children}
        </div>
      )}
      <div className={`${children ? "absolute inset-0" : ""} flex flex-col items-center justify-center py-16`}>
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-secondary mb-4">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 text-center max-w-sm">{description}</p>
        <Link
          to="/upgrade"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Zap className="h-4 w-4" />
          Upgrade to Pro
        </Link>
      </div>
    </div>
  );
}
