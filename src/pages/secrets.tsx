export default function SecretsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Secrets</h1>
      <p className="text-sm text-muted-foreground">
        Manage your secrets and sensitive configuration in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No secrets configured yet.</p>
      </div>
    </div>
  );
} 