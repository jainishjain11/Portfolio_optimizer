import { Search, BarChart3, Users } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import PremiumGate from "@/components/shared/PremiumGate";

const JobMatcher = () => {
  return (
    <div>
      <PageHeader
        title="Job Matcher"
        description="AI-powered job matching based on your repository skills."
      />

      <div className="surface-elevated rounded-lg overflow-hidden">
        <PremiumGate
          title="Unlock Job Matching"
          description="Get AI-analyzed match scores between your skills and job descriptions. See which repos to showcase and identify skill gaps."
        >
          {/* Blurred preview */}
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Paste Job Description</label>
              <div className="w-full h-32 rounded-md border border-border bg-secondary" />
            </div>
            <div className="rounded-md border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Job Title</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Match Score</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Recommended Repos</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Skills Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-4 py-3"><div className="h-4 w-32 rounded bg-muted" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-16 rounded bg-muted" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-24 rounded bg-muted" /></td>
                      <td className="px-4 py-3"><div className="h-4 w-20 rounded bg-muted" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PremiumGate>
      </div>

      {/* Coming soon */}
      <div className="mt-6 surface-elevated rounded-lg p-5 flex items-center gap-4">
        <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center">
          <Users className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Coming Soon: Competitor Analysis</p>
          <p className="text-xs text-muted-foreground">See how your profile stacks up against other developers in your field.</p>
        </div>
        <span className="premium-badge ml-auto">Pro</span>
      </div>
    </div>
  );
};

export default JobMatcher;
