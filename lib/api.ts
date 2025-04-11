/**
 * This is a placeholder for your API functions.
 * In a real application, you would implement actual API calls here.
 */

export async function fetchDashboardData() {
  // In a real app, this would be an API call
  return {
    revenue: 45231.89,
    revenueIncrease: 20.1,
    subscriptions: 2350,
    subscriptionsIncrease: 180.1,
    sales: 12234,
    salesIncrease: 19,
    activeUsers: 573,
    activeUsersIncrease: 201,
  }
}

export async function fetchUserData() {
  // In a real app, this would be an API call
  return {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    avatar: "/placeholder.svg?height=32&width=32",
  }
}

export async function fetchRecentActivity() {
  // In a real app, this would be an API call
  return [
    {
      id: 1,
      user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "purchased",
      item: "Premium Plan",
      amount: "$99.00",
      date: "2 hours ago",
    },
    // More activities...
  ]
}
