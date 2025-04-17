import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  Phone,
  PieChart,
  Settings2
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Pedro Sanders",
    email: "psanders@fonoster.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Default Workspace",
      logo: GalleryVerticalEnd,
      plan: "NYC01",
    }
  ],
  navMain: [
    {
      title: "Overview",
      url: "#"
    },
    {
      title: "Applications",
      url: "#",
      isActive: true
    },
    {
      title: "SIP Network",
      url: "#",
      items: [
        {
          title: "Trunks",
          url: "#",
        },
        {
          title: "Numbers",
          url: "#",
        },
        {
          title: "Domains",
          url: "#",
        },
        {
          title: "SIP Agents",
          url: "#",
        },
      ],
    },
    {
      title: "Storage",
      url: "#"
    },
    {
      title: "Secrets",
      url: "#"
    },
    {
      title: "API Keys",
      url: "#"
    },
    {
      title: "Monitoring",
      url: "#"
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
