import { Github, GitFork, Star, Code, Briefcase, BarChart3, Zap } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import StatCard from "@/components/shared/StatCard";
import EmptyState from "@/components/shared/EmptyState";
import PremiumGate from "@/components/shared/PremiumGate";

const Dashboard = () => {
  // TODO: Replace with real data from Supabase/GitHub
  const isGitHubConnected = false;  // Will be true after connect
  const repos: any[] = [];
  const skills: string[] = [];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Connect GitHub to scan repositories and extract skills."
      />

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Repositories" value={repos.length} icon={Code} accent="blue" />
        <StatCard label="Skills Detected" value={skills.length} icon={BarChart3} accent="green" />
        <StatCard label="Portfolios" value={0} icon={Briefcase} accent="amber" />
        <StatCard label="Job Matches" value="—" icon={Zap} accent="blue" />
      </div>

      {/* GitHub connection */}
      {!isGitHubConnected ? (
        <div className="surface-elevated rounded-lg">
          <EmptyState
            icon={Github}
            title="Connect your GitHub account"
            description="Link your GitHub to scan repositories, extract skills, and auto-generate your developer portfolio."
            action={
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
                <Github className="h-4 w-4" />
                Connect GitHub
              </button>
            }
          />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Repo list */}
          <div>
            <h2 className="text-base font-semibold text-foreground mb-4">Repositories</h2>
            {repos.length === 0 ? (
              <div className="surface-elevated rounded-lg">
                <EmptyState
                  icon={Code}
                  title="No repositories found"
                  description="We'll scan your GitHub repos once connected."
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {repos.map((repo: any) => (
                  <div key={repo.id} className="surface-elevated rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-foreground">{repo.name}</h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {repo.primary_lang || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="h-3 w-3" />{repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="h-3 w-3" />{repo.forks}</span>
                    </div>
                    {repo.extracted_skills?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {repo.extracted_skills.slice(0, 5).map((skill: string) => (
                          <span key={skill} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Skills cloud */}
          <div>
            <h2 className="text-base font-semibold text-foreground mb-4">Skill Cloud</h2>
            {skills.length === 0 ? (
              <div className="surface-elevated rounded-lg">
                <EmptyState
                  icon={BarChart3}
                  title="No skills extracted yet"
                  description="Skills appear after repo analysis."
                />
              </div>
            ) : (
              <div className="surface-elevated rounded-lg p-5">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Job Match Insights - NOW FREE */}
      <div className="mt-8">
        <h2 className="text-base font-semibold text-foreground mb-4">Ready to Find Jobs?</h2>
        <PremiumGate
          title="Job Matcher Available"
          description="AI-powered matching is ready! Paste job descriptions to see fit scores."
        >
          <div className="p-4">
            <a href="/job-matcher" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
              <BarChart3 className="h-4 w-4" />
              Go to Job Matcher
            </a>
          </div>
        </PremiumGate>
      </div>
    </div>
  );
};

export default Dashboard;
