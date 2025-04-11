import type { Metadata } from "next"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import { CourseCard } from "@/components/learning/course-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Learning Platform",
  description: "Expand your knowledge with our comprehensive learning platform",
}

export default function LearningPage() {
  const courses = [
    {
      id: "branding",
      title: "Brand Strategy Masterclass",
      description: "Learn how to build and maintain a powerful brand identity that resonates with your audience.",
      image: "/images/learning/learning-course-branding.webp",
      category: "Marketing",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$299",
    },
    {
      id: "creation",
      title: "Course Creation Fundamentals",
      description: "Master the art of creating engaging online courses that deliver real value to your students.",
      image: "/images/learning/learning-course-creation.webp",
      category: "Education",
      duration: "4 weeks",
      level: "Beginner",
      price: "$199",
    },
    {
      id: "pricing",
      title: "Strategic Pricing Models",
      description: "Develop pricing strategies that maximize revenue while providing value to your customers.",
      image: "/images/learning/learning-course-pricing.webp",
      category: "Business",
      duration: "3 weeks",
      level: "Advanced",
      price: "$249",
    },
    {
      id: "operations",
      title: "Business Operations Management",
      description: "Optimize your business operations for efficiency, scalability, and sustainable growth.",
      image: "/images/learning/learning-course-operations.webp",
      category: "Operations",
      duration: "8 weeks",
      level: "Intermediate",
      price: "$349",
    },
    {
      id: "client-success",
      title: "Client Success Strategies",
      description: "Learn proven methods to improve client satisfaction, retention, and lifetime value.",
      image: "/images/learning/learning-course-client-success.webp",
      category: "Customer Service",
      duration: "5 weeks",
      level: "Intermediate",
      price: "$229",
    },
    {
      id: "management",
      title: "Remote Team Management",
      description: "Master the skills needed to effectively lead and manage distributed teams in the digital age.",
      image: "/images/learning/learning-course-management.webp",
      category: "Leadership",
      duration: "6 weeks",
      level: "Advanced",
      price: "$279",
    },
    {
      id: "marketing",
      title: "Digital Marketing Essentials",
      description: "Develop a comprehensive digital marketing strategy to grow your business online.",
      image: "/images/learning/learning-course-marketing.webp",
      category: "Marketing",
      duration: "7 weeks",
      level: "Beginner",
      price: "$249",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TypographyH1>Expand Your Knowledge</TypographyH1>
                <TypographyLead>
                  Our comprehensive learning platform offers courses designed to help you grow personally and
                  professionally.
                </TypographyLead>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#courses">Browse Courses</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/learning/membership">Membership Options</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <img
                  src="/images/learning/learning-course-branding.webp"
                  alt="Learning platform collaboration"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-2xl font-bold">Transform Your Skills</div>
                  <p className="text-muted-foreground">Learn from industry experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our most popular courses designed to help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/learning/all-courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from people who have transformed their careers with our courses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center">
                    <span className="font-bold text-primary">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Brand Strategy Masterclass completely transformed how I approach marketing for my clients. Highly
                  recommended!"
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center">
                    <span className="font-bold text-primary">SJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Entrepreneur</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The pricing strategies I learned helped me increase my business revenue by 40% in just three months."
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center">
                    <span className="font-bold text-primary">RM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Miller</h4>
                    <p className="text-sm text-muted-foreground">Team Lead</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Remote Team Management course gave me practical tools to lead my distributed team more
                  effectively."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Learning?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of professionals who are advancing their careers with our courses.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/sign-up">Create Account</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
