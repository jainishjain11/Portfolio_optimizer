import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = params.get("code");
    const ghError = params.get("error");
    const ghErrorDesc = params.get("error_description");

    // If GitHub returned an error (user denied, etc.)
    if (ghError) {
      setError(`${ghError}${ghErrorDesc ? `: ${ghErrorDesc}` : ""}`);
      return;
    }

    // If no code in URL, nothing to do
    if (!code) {
      setError("No GitHub authorization code found in URL.");
      return;
    }

    // ✅ For now (beginner-friendly MVP):
    // Save code temporarily so we can use it later to fetch token on backend.
    localStorage.setItem("github_oauth_code", code);

    // Redirect back to dashboard
    navigate("/", { replace: true });
  }, [params, navigate]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="surface-elevated rounded-lg p-6 max-w-md w-full text-center">
        {!error ? (
          <>
            <h1 className="text-lg font-semibold text-foreground">Authorizing GitHub…</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Please wait, redirecting you back to the dashboard.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-lg font-semibold text-foreground">GitHub Authorization Failed</h1>
            <p className="text-sm text-muted-foreground mt-2">{error}</p>
            <button
              onClick={() => navigate("/", { replace: true })}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90"
            >
              Go back to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
