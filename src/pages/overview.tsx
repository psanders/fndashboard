export default function OverviewPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Overview</h1>
      <p className="text-sm text-muted-foreground">
        Welcome to your dashboard overview. Here you can see a summary of your system.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Total Applications</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Active Services</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
} 