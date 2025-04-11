"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, GraduationCap, Users2, Settings } from "lucide-react"

interface PlatformSidebarProps {
  className?: string
}

export function PlatformSidebar({ className }: PlatformSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "CRM",
      icon: Users,
      href: "/crm",
      active: pathname === "/crm" || pathname?.startsWith("/crm/"),
      children: [
        {
          label: "Contacts",
          href: "/crm/contacts",
          active: pathname === "/crm/contacts" || pathname?.startsWith("/crm/contacts/"),
        },
        {
          label: "Deals",
          href: "/crm/deals",
          active: pathname === "/crm/deals" || pathname?.startsWith("/crm/deals/"),
        },
        {
          label: "Tasks",
          href: "/crm/tasks",
          active: pathname === "/crm/tasks" || pathname?.startsWith("/crm/tasks/"),
        },
      ],
    },
    {
      label: "Courses",
      icon: GraduationCap,
      href: "/courses",
      active: pathname === "/courses" || pathname?.startsWith("/courses/"),
      children: [
        {
          label: "My Courses",
          href: "/courses/my-courses",
          active: pathname === "/courses/my-courses",
        },
        {
          label: "Create Course",
          href: "/courses/create",
          active: pathname === "/courses/create",
        },
        {
          label: "Students",
          href: "/courses/students",
          active: pathname === "/courses/students",
        },
      ],
    },
    {
      label: "Community",
      icon: Users2,
      href: "/community",
      active: pathname === "/community" || pathname?.startsWith("/community/"),
      children: [
        {
          label: "Feed",
          href: "/community/feed",
          active: pathname === "/community/feed",
        },
        {
          label: "Groups",
          href: "/community/groups",
          active: pathname === "/community/groups" || pathname?.startsWith("/community/groups/"),
        },
        {
          label: "Discussions",
          href: "/community/discussions",
          active: pathname === "/community/discussions",
        },
      ],
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings" || pathname?.startsWith("/settings/"),
    },
  ]

  return (
    <div className={cn("py-4", className)}>
      <div className="px-4 mb-6">
        <h2 className="text-lg font-semibold">Platform</h2>
      </div>
      <nav className="space-y-1 px-2">
        {routes.map((route) => (
          <div key={route.href} className="space-y-1">
            <Link
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                route.active ? "bg-muted text-primary" : "hover:bg-muted hover:text-primary text-muted-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
            {route.active && route.children && (
              <div className="ml-6 space-y-1">
                {route.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      child.active
                        ? "bg-muted/50 text-primary"
                        : "hover:bg-muted/50 hover:text-primary text-muted-foreground",
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
