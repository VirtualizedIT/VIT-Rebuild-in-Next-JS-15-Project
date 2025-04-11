import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Us
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're building the next generation of web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to provide developers with the tools they need to build high-quality, scalable web
                  applications. We believe in the power of Next.js and React to create amazing user experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a world where building enterprise-level applications is accessible to developers of all
                  skill levels. Our templates and components are designed to make this vision a reality.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-6 py-12">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                    <img
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team Member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                    <img
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team Member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                    <img
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team Member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Emily Johnson</h3>
                  <p className="text-sm text-muted-foreground">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
