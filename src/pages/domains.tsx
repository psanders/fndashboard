export default function DomainsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Domains</h1>
      <p className="text-sm text-muted-foreground">
        Manage your domains and DNS settings in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No domains configured yet.</p>
      </div>
    </div>
  );
} 