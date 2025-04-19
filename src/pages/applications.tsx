import { useEffect, useState } from "react"
import { Applications } from "@fonoster/sdk/dist/web/fonoster.min.js"
import { List } from "@/components/list"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { useAuth } from "@/lib/auth"

interface Application {
  ref: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

const columns = [
  {
    accessorKey: "name",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }: { row: any }) => {
      return new Date(row.getValue("createdAt") * 1000).toLocaleDateString()
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }: { row: any }) => {
      return new Date(row.getValue("updatedAt") * 1000).toLocaleDateString()
    },
  },
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const { client } = useAuth()

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setLoading(true)

        const applications = new Applications(client)

        const response = await applications.listApplications({
          pageSize: 100,
          pageToken: "",
        })

        setApplications(response.items)
      } catch (error) {
        console.error("Error loading applications:", error)
      } finally {
        setLoading(false)
      }
    }

    loadApplications()
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
