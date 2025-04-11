import type React from "react"
import { Logo } from "@/components/ui/logo"
import { PlatformSidebar } from "@/components/platform/sidebar"
import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Logo size="sm" />
          <div className="ml-auto flex items-center gap-4">
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="md:hidden">
                <div className="py-4">
                  <PlatformSidebar className="border-none" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <PlatformSidebar className="w-64 flex-shrink-0 border-r hidden md:block" />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
