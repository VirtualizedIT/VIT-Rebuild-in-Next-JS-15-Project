import type { Metadata } from "next"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Our Company",
  description: "Learn about our mission, values, and the team behind Virtualized IT",
}

export default function CompanyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TypographyH1>About Virtualized IT</TypographyH1>
                <TypographyLead>
                  We're on a mission to help businesses grow through innovative technology solutions.
                </TypographyLead>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#mission">Our Mission</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden rounded-lg">
                <img
                  src="/images/company/company-hero-1000x563.webp"
                  alt="Our modern office space"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We're driven by a simple but powerful mission: to help businesses succeed through technology.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do, from product development to customer support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Collaboration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in the power of collaboration, both within our team and with our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We operate with honesty and transparency in all our business dealings and relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We continuously innovate to provide cutting-edge solutions that address evolving business needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Story</h3>
              <p className="text-muted-foreground">
                Founded in 2015, Virtualized IT began with a simple idea: to make enterprise-level technology accessible
                to businesses of all sizes. What started as a small team of passionate developers has grown into a
                comprehensive platform serving thousands of clients worldwide.
              </p>
              <p className="text-muted-foreground">
                Our journey has been defined by continuous innovation and a deep commitment to our clients' success. As
                we've grown, we've expanded our offerings to include CRM, learning management, and community features,
                all integrated into a single, powerful platform.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <p className="text-muted-foreground">
                We believe that technology should serve people, not the other way around. That's why we design our
                solutions with a human-centered approach, focusing on intuitive interfaces, seamless workflows, and
                meaningful features that drive real business results.
              </p>
              <p className="text-muted-foreground">
                Our development process is iterative and collaborative, incorporating feedback from our users at every
                stage. This ensures that our platform evolves to meet the changing needs of our clients and the broader
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The talented individuals behind Virtualized IT who make it all possible.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <p className="text-sm text-muted-foreground">Head of Product</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team Member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Brown</h3>
              <p className="text-sm text-muted-foreground">Lead Developer</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-primary">5,000+</div>
              <p className="text-muted-foreground">Active Clients</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-primary">15</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-primary">8</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of businesses that trust Virtualized IT for their technology needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
