import { DataTableDemo } from "@/components/table"

export default function TrunksPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Trunks</h1>
      <p className="text-sm text-muted-foreground">
        Use this section to connect your Dialogflow, IBM Watson, and OpenAI Assistants with your numbers.
      </p>
      <DataTableDemo />
    </div>
  );
} 