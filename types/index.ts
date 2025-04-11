export interface User {
  id: string
  name: string
  email: string
  image?: string
}

export interface Session {
  user: User
  expires: string
}

export interface DashboardData {
  revenue: number
  revenueIncrease: number
  subscriptions: number
  subscriptionsIncrease: number
  sales: number
  salesIncrease: number
  activeUsers: number
  activeUsersIncrease: number
}

export interface Activity {
  id: number
  user: {
    name: string
    email: string
    avatar: string
    initials: string
  }
  action: string
  item: string
  amount: string | null
  date: string
}
