import { Briefcase, Plus, Download, ExternalLink, Lock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import EmptyState from "@/components/shared/EmptyState";

const Portfolios = () => {
  const portfolios: any[] = [];

  return (
    <div>
      <PageHeader
        title="Portfolios"
        description="Generate and manage your developer portfolios."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" />
            Generate Portfolio
          </button>
        }
      />

      {portfolios.length === 0 ? (
        <div className="surface-elevated rounded-lg">
          <EmptyState
            icon={Briefcase}
            title="No portfolios yet"
            description="Connect GitHub and scan your repos first, then generate a portfolio to showcase your work."
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolios.map((p: any) => (
            <div key={p.id} className="surface-elevated rounded-lg overflow-hidden">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-muted-foreground/30" />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-2">
                  Created {new Date(p.created_at).toLocaleDateString()}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={p.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Preview
                  </a>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-sm font-medium text-foreground hover:bg-accent transition-colors">
                    <Download className="h-3.5 w-3.5" /> Resume PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pro features */}
      <div className="mt-8 space-y-3">
        <div className="surface-elevated rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Export to Vercel</p>
              <p className="text-xs text-muted-foreground">Deploy your portfolio with one click</p>
            </div>
          </div>
          <span className="premium-badge flex items-center gap-1">
            <Lock className="h-3 w-3" /> Pro
          </span>
        </div>
        <div className="surface-elevated rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Download className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Unlimited PDF Exports</p>
              <p className="text-xs text-muted-foreground">Download resumes without limits</p>
            </div>
          </div>
          <span className="premium-badge flex items-center gap-1">
            <Lock className="h-3 w-3" /> Pro
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
