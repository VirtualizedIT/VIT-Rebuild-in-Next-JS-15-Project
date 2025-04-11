import type { Metadata } from "next"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Mail, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team for any inquiries or support",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <TypographyH1>Get in Touch</TypographyH1>
                <TypographyLead>
                  Have questions about our platform? Our team is here to help you find the right solution for your
                  business.
                </TypographyLead>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden rounded-lg">
                <img
                  src="/images/contact/contact-hero-1000x563.webp"
                  alt="Team meeting"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Inquiry</CardTitle>
                    <CardDescription>Have a question about our platform? We're here to help.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="first-name">First name</label>
                          <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="last-name">Last name</label>
                          <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="company">Company</label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message">Message</label>
                        <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sales">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Inquiry</CardTitle>
                    <CardDescription>Interested in our enterprise solutions? Contact our sales team.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="first-name-sales">First name</label>
                          <Input id="first-name-sales" placeholder="Enter your first name" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="last-name-sales">Last name</label>
                          <Input id="last-name-sales" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email-sales">Email</label>
                        <Input id="email-sales" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="company-sales">Company</label>
                        <Input id="company-sales" placeholder="Enter your company name" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="budget">Estimated budget</label>
                        <Input id="budget" placeholder="Enter your estimated budget" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message-sales">Message</label>
                        <Textarea
                          id="message-sales"
                          placeholder="Tell us about your project"
                          className="min-h-[150px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Contact Sales
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="support">
                <Card>
                  <CardHeader>
                    <CardTitle>Support Request</CardTitle>
                    <CardDescription>
                      Need help with your account or have a technical issue? Our support team is ready to assist.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="email-support">Email</label>
                        <Input id="email-support" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="subject">Subject</label>
                        <Input id="subject" placeholder="Enter the subject of your request" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="issue-type">Issue type</label>
                        <select
                          id="issue-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an issue type</option>
                          <option value="account">Account Access</option>
                          <option value="billing">Billing Issue</option>
                          <option value="technical">Technical Problem</option>
                          <option value="feature">Feature Request</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message-support">Description</label>
                        <Textarea
                          id="message-support"
                          placeholder="Please describe your issue in detail"
                          className="min-h-[150px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Support Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Headquarters</h4>
                      <address className="not-italic text-muted-foreground">
                        123 Business Avenue
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">info@virtualizedit.com</p>
                      <p className="text-muted-foreground">support@virtualizedit.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM PST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border h-[300px] relative">
                <img
                  src="/images/contact/contact-planner-712x400.webp"
                  alt="Schedule a meeting"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Schedule a Meeting</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a time with our team to discuss your specific needs.
                  </p>
                  <Button>Book a Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our platform and services.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
                <p className="text-muted-foreground">
                  We offer a comprehensive platform that includes CRM, learning management, and community features to
                  help businesses grow and engage with their customers.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide custom solutions tailored to your specific business needs. Contact our sales team to
                  discuss your requirements.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">What support options are available?</h3>
                <p className="text-muted-foreground">
                  We offer email support, phone support during business hours, and a comprehensive knowledge base for
                  all our customers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How much does your platform cost?</h3>
                <p className="text-muted-foreground">
                  We offer various pricing tiers to accommodate businesses of all sizes. Visit our pricing page or
                  contact sales for detailed information about our plans and enterprise options.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for all our plans so you can experience the full capabilities of our
                  platform before making a decision.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">How secure is your platform?</h3>
                <p className="text-muted-foreground">
                  Security is our top priority. We use industry-standard encryption, regular security audits, and comply
                  with data protection regulations to keep your information safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
