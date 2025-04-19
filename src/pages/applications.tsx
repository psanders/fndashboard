import { DataTableDemo } from "@/components/table";

export default function ApplicationsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Applications</h1>
      <p className="text-sm text-muted-foreground">
        Manage your applications and services in this section.
      </p>
      <DataTableDemo />
    </div>
  );
} 
