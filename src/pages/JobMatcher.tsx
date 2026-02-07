import { Search, BarChart3, Users, Zap } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import PremiumGate from "@/components/shared/PremiumGate";

const JobMatcher = () => {
  return (
    <div>
      <PageHeader
        title="Job Matcher"
        description="AI-powered job matching based on your repository skills. Paste any job description."
      />

      {/* Main matcher - NOW FULLY FREE */}
      <div className="space-y-6">
        <PremiumGate
          title="Job Matcher Ready"
          description="Enter a job description to get instant AI match scores, recommended repos, and skills gaps."
        >
          <div className="p-6 space-y-6">
            {/* Job input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Paste Job Description</label>
              <textarea
                placeholder="e.g., Senior React Developer with Node.js experience..."
                className="w-full h-32 p-3 rounded-md border border-border bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/10 resize-vertical"
              />
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 ml-auto">
                <Zap className="h-4 w-4" />
                Analyze Match
              </button>
            </div>

            {/* Results table */}
            <div className="rounded-md border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Repository</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Match Score</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Key Skills</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: Real results from API */}
                  <tr className="border-t border-border hover:bg-accent">
                    <td className="px-4 py-3 font-medium">portfolio-optimizer</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">92%</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mr-1">React</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">TypeScript</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-primary font-medium hover:underline">Feature</button>
                    </td>
                  </tr>
                  <tr className="border-t border-border hover:bg-accent">
                    <td className="px-4 py-3 font-medium">Another Repo</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">78%</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Node.js</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-primary font-medium hover:underline">Feature</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PremiumGate>
      </div>

      {/* Coming soon - Free roadmap */}
      <div className="mt-8 surface-elevated rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center">
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Coming Soon (OSS Roadmap)</h3>
            <p className="text-xs text-muted-foreground mt-1">Competitor analysis, portfolio export, GitHub Pages deploy.</p>
            <a href="https://github.com/yourusername/portfolio-optimizer" className="text-xs text-primary font-medium mt-1 inline-block hover:underline">
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatcher;
