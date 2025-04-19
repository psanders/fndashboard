export default function StoragePage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Storage</h1>
      <p className="text-sm text-muted-foreground">
        Manage your storage buckets and files in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No storage buckets configured yet.</p>
      </div>
    </div>
  );
} 