export default function ApiKeysPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">API Keys</h1>
      <p className="text-sm text-muted-foreground">
        Manage your API keys and access tokens in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No API keys configured yet.</p>
      </div>
    </div>
  );
} 