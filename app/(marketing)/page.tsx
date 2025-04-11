import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users, Users2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Enterprise Platform for Business Growth
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Manage your customers, deliver online courses, and build community - all in one platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-lg opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold">Virtualized IT</div>
                    <p className="text-muted-foreground">Your complete business solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All-in-One Platform</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your business, deliver courses, and build community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            {/* CRM Feature */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">CRM</h3>
              <p className="text-center text-muted-foreground">
                Manage contacts, track deals, and close more sales with our powerful CRM.
              </p>
              <Button variant="link" asChild>
                <Link href="/services/crm" className="flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* LMS Feature */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Learning Management</h3>
              <p className="text-center text-muted-foreground">
                Create, deliver, and track online courses with our intuitive LMS.
              </p>
              <Button variant="link" asChild>
                <Link href="/services/lms" className="flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Community Feature */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-4">
                <Users2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-center text-muted-foreground">
                Build and engage your community with forums, groups, and discussions.
              </p>
              <Button variant="link" asChild>
                <Link href="/services/community" className="flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses already using our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/sign-up">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
