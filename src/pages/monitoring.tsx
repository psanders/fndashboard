export default function MonitoringPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Monitoring</h1>
      <p className="text-sm text-muted-foreground">
        Monitor your system's performance and health in this section.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">System Health</h3>
          <p className="text-2xl font-bold text-green-500">Healthy</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Active Services</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Error Rate</h3>
          <p className="text-2xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
} 