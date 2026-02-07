import { User, CreditCard, Key, Trash2, Lock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const Settings = () => {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your account and subscription." />

      <div className="space-y-6 max-w-2xl">
        {/* Profile */}
        <section className="surface-elevated rounded-lg p-5">
          <div className="flex items-center gap-3 mb-5">
            <User className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-base font-semibold text-foreground">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <p className="text-sm text-foreground mt-1">Not connected</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">GitHub</label>
              <p className="text-sm text-foreground mt-1">Not connected</p>
            </div>
          </div>
        </section>

        {/* Subscription */}
        <section className="surface-elevated rounded-lg p-5">
          <div className="flex items-center gap-3 mb-5">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-base font-semibold text-foreground">Subscription</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Free Plan</p>
              <p className="text-xs text-muted-foreground mt-0.5">Basic repo scanning and portfolio generation</p>
            </div>
            <a
              href="/upgrade"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Upgrade
            </a>
          </div>
        </section>

        {/* API Keys (Pro) */}
        <section className="surface-elevated rounded-lg p-5 relative overflow-hidden">
          <span className="premium-badge absolute top-3 right-3 flex items-center gap-1">
            <Lock className="h-3 w-3" /> Pro
          </span>
          <div className="flex items-center gap-3 mb-5">
            <Key className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-base font-semibold text-foreground">API Keys</h2>
          </div>
          <div className="opacity-50 pointer-events-none">
            <div>
              <label className="text-sm font-medium text-muted-foreground">OpenAI API Key</label>
              <p className="text-xs text-muted-foreground mt-1">Used for custom repository analysis scans</p>
              <div className="mt-2 h-9 w-full rounded-md border border-border bg-secondary" />
            </div>
          </div>
        </section>

        {/* Danger zone */}
        <section className="rounded-lg border border-destructive/20 p-5">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="h-5 w-5 text-destructive" />
            <h2 className="text-base font-semibold text-destructive">Danger Zone</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/5 transition-colors">
            <Trash2 className="h-4 w-4" />
            Delete All Data
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
