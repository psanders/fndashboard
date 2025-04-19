export default function NumbersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Numbers</h1>
      <p className="text-sm text-muted-foreground">
        Manage your phone numbers and their configurations in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No numbers configured yet.</p>
      </div>
    </div>
  );
} 