import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  href?: string
  showText?: boolean
}

export function Logo({ className, size = "md", href = "/", showText = true }: LogoProps) {
  const sizes = {
    sm: 24,
    md: 32,
    lg: 48,
  }

  const logoSize = sizes[size]

  const logoComponent = (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative overflow-hidden rounded-sm border border-primary/20">
        <Image
          src="/android-chrome-192x192.png"
          alt="Virtualized IT Logo"
          width={logoSize}
          height={logoSize}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-xl",
          )}
        >
          <span className="text-muted-foreground">Virtualized</span>
          <span className="text-primary">IT</span>
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        {logoComponent}
      </Link>
    )
  }

  return logoComponent
}
