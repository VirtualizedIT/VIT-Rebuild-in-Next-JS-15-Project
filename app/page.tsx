import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Enterprise-Ready Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our Next.js enterprise template includes everything you need to build a robust, scalable web application.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
            <FeatureCard
              title="Type-Safe"
              description="Built with TypeScript for better developer experience and fewer bugs in production."
              icon="Code"
            />
            <FeatureCard
              title="Component Library"
              description="Includes shadcn/ui components that are accessible and customizable."
              icon="Component"
            />
            <FeatureCard
              title="Authentication"
              description="Ready-to-use authentication system with multiple providers."
              icon="Lock"
            />
            <FeatureCard
              title="Database Integration"
              description="Easy integration with your preferred database solution."
              icon="Database"
            />
            <FeatureCard
              title="API Routes"
              description="Built-in API routes for backend functionality."
              icon="ServerCrash"
            />
            <FeatureCard
              title="Performance Optimized"
              description="Optimized for Core Web Vitals and excellent user experience."
              icon="Zap"
            />
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Clone the Repository</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Start by cloning this enterprise template to your local machine.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Customize Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Modify the pre-built components to match your existing website's design.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Deploy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Deploy your new Next.js application to your preferred hosting provider.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
