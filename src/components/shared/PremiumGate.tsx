// src/components/shared/PremiumGate.tsx
import { Zap } from "lucide-react";

interface PremiumGateProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PremiumGate({ title, description, children }: PremiumGateProps) {
  return (
    <div className="p-8 bg-card border rounded-lg shadow-sm">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
          <Zap className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center mb-6">{description}</p>
      <div className="text-xs text-center text-muted-foreground">
        ✅ Free & Open Source - No limits!
      </div>
      {children}
    </div>
  );
}
