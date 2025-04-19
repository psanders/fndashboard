export default function SipAgentsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">SIP Agents</h1>
      <p className="text-sm text-muted-foreground">
        Manage your SIP agents and their configurations in this section.
      </p>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">No SIP agents configured yet.</p>
      </div>
    </div>
  );
} 