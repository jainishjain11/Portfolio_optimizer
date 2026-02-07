import { Github, GitFork, Star, Code, Briefcase, BarChart3, Lock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import StatCard from "@/components/shared/StatCard";
import EmptyState from "@/components/shared/EmptyState";
import PremiumGate from "@/components/shared/PremiumGate";

const Dashboard = () => {
  // No data — user hasn't connected GitHub yet
  const isGitHubConnected = false;
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
        <div className="surface-elevated rounded-lg p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">Job Match Score</span>
            <div className="h-8 w-8 rounded-md flex items-center justify-center bg-premium-gold-light">
              <Lock className="h-4 w-4 text-premium-gold" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-muted-foreground/40">—</p>
          <span className="premium-badge absolute top-3 right-3">Pro</span>
        </div>
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
                  description="We'll scan your GitHub repos once connected. This may take a moment."
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
                          <span key={skill} className="text-xs px-2 py-0.5 rounded-full accent-blue-bg text-accent-blue font-medium">
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
                  description="Skills will appear here once your repositories are analyzed."
                />
              </div>
            ) : (
              <div className="surface-elevated rounded-lg p-5">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1.5 rounded-full accent-blue-bg text-accent-blue font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Premium section */}
      <div className="mt-8">
        <h2 className="text-base font-semibold text-foreground mb-4">Job Match Insights</h2>
        <div className="surface-elevated rounded-lg overflow-hidden">
          <PremiumGate
            title="Job Match Score"
            description="Unlock AI-powered job matching to find roles that fit your skill profile."
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
