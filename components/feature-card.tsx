import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type LucideIcon, Code, Component, Lock, Database, ServerCrash, Zap } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = getIconComponent(icon)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <IconComponent className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function getIconComponent(icon: string): LucideIcon {
  switch (icon) {
    case "Code":
      return Code
    case "Component":
      return Component
    case "Lock":
      return Lock
    case "Database":
      return Database
    case "ServerCrash":
      return ServerCrash
    case "Zap":
      return Zap
    default:
      return Code
  }
}
