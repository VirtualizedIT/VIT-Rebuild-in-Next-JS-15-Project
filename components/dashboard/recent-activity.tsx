import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    action: "purchased",
    item: "Premium Plan",
    amount: "$99.00",
    date: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    action: "subscribed to",
    item: "Newsletter",
    amount: null,
    date: "5 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Robert Johnson",
      email: "robert@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RJ",
    },
    action: "downloaded",
    item: "Annual Report",
    amount: null,
    date: "1 day ago",
  },
  {
    id: 4,
    user: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    action: "purchased",
    item: "Basic Plan",
    amount: "$49.00",
    date: "2 days ago",
  },
  {
    id: 5,
    user: {
      name: "Michael Wilson",
      email: "michael@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MW",
    },
    action: "upgraded to",
    item: "Enterprise Plan",
    amount: "$199.00",
    date: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action} {activity.item}
              {activity.amount && ` for ${activity.amount}`}
            </p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.date}</div>
        </div>
      ))}
    </div>
  )
}
