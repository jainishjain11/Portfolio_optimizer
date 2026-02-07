import { Zap, Check } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const features = [
  "Unlimited repository scans",
  "AI-powered job matching",
  "Competitor analysis insights",
  "Export portfolios to Vercel",
  "Unlimited PDF resume downloads",
  "Custom OpenAI analysis scans",
  "Priority support",
];

const Upgrade = () => {
  return (
    <div>
      <PageHeader title="Upgrade to Pro" description="Unlock the full power of Portfolio Optimizer." />

      <div className="max-w-lg mx-auto">
        <div className="surface-elevated rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-foreground">$9</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">Everything you need to accelerate your dev career.</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="h-5 w-5 rounded-full bg-accent-green-light flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-accent-green" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              <Zap className="h-4 w-4" />
              Subscribe with Stripe
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Cancel anytime. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
