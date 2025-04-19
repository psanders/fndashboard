import { useEffect, useState } from "react"
import { Applications } from "@fonoster/sdk/dist/web/fonoster.min.js"
import { List } from "@/components/list"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { useAuth } from "@/lib/auth"

interface Application {
  ref: string
  name: string
  type: string
  endpoint: string
}

const columns = [
  {
    accessorKey: "ref",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ref
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }: { row: any }) => {
      const ref = row.getValue("ref")
      return ref ? ref.slice(-10) : ""
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }: { row: any }) => {
      const type = row.getValue("type")
      return type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : ""
    },
  },
  {
    accessorKey: "endpoint",
    header: "Endpoint"
  }
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const { client, workspaceAccessKeyId } = useAuth()

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setLoading(true)

        client.setAccessKeyId(workspaceAccessKeyId)
        const applications = new Applications(client)

        const response = await applications.listApplications({
          pageSize: 100,
          pageToken: "",
        })

        console.log(response.items)

        setApplications(response.items)
      } catch (error) {
        console.error("Error loading applications:", error)
      } finally {
        setLoading(false)
      }
    }

    if (client) {
      loadApplications()
    }
  }, [search, client])

  return (
    <List
      title="Applications"
      description="Use this section to connect your Dialogflow, IBM Watson, and OpenAI Assistants with your numbers."
      createPath="/applications/create"
      columns={columns}
      data={applications}
      loading={loading}
      onSearch={setSearch}
      searchPlaceholder="Search applications..."
    />
  )
} 
