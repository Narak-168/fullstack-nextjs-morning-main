import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
            🚀 New Product Launch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Transform Your Business with <span className="text-yellow-300">Cutting-Edge Technology</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Empower your team with innovative solutions that drive growth, enhance productivity, and deliver exceptional
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-indigo-600 hover:bg-gray-100">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <Image
              src="/images/dashboard.png"
              alt="Dashboard Preview"
              width={800}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Khmer */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">មុខងារដ៏មានអានុភាព</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
              អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីពង្រីកអាជីវកម្មរបស់អ្នក និងនៅមុខគេក្នុងការប្រកួតប្រជែង។
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "សុវត្ថិភាពសហគ្រាស",
                description: "សុវត្ថិភាពកម្រិតធនាគារជាមួយនឹងការអ៊ិនគ្រីបពីចុងដល់ចុង និងវិញ្ញាបនបត្រអនុលោម។",
              },
              {
                icon: Zap,
                title: "លឿនដូចរន្ទះ",
                description: "ការអនុវត្តដែលបានធ្វើឱ្យប្រសើរជាមួយ CDN សកល និងសមត្ថភាពកុំព្យូទ័រគែម។",
              },
              {
                icon: Users,
                title: "សហការក្រុម",
                description: "ឧបករណ៍សហការពេលវេលាពិតដែលរក្សាក្រុមរបស់អ្នកឱ្យសមកាលកម្ម និងមានផលិតភាព។",
              },
              {
                icon: TrendingUp,
                title: "ការវិភាគកម្រិតខ្ពស់",
                description: "ការយល់ដឹង និងរបាយការណ៍ដ៏ទូលំទូលាយដើម្បីធ្វើការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យ។",
              },
              {
                icon: Globe,
                title: "ខ្នាតសកល",
                description: "ដាក់ពង្រាយទូទាំងពិភពលោកជាមួយនឹងការធ្វើមាត្រដ្ឋានស្វ័យប្រវត្តិ និងការធ្វើតុល្យភាពបន្ទុក។",
              },
              {
                icon: Award,
                title: "ជាប់រង្វាន់",
                description: "ត្រូវបានទទួលស្គាល់ដោយអ្នកដឹកនាំក្នុងឧស្សាហកម្មសម្រាប់ការច្នៃប្រឌិត និងឧត្តមភាព។",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="/images/services.webp" alt="Services" width={600} height={500} className="rounded-lg" />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Cloud Infrastructure",
                  description: "Scalable cloud solutions with 99.9% uptime guarantee and automatic backups.",
                },
                {
                  title: "Custom Development",
                  description: "Tailored software solutions built with modern technologies and best practices.",
                },
                {
                  title: "Data Analytics",
                  description: "Transform your data into actionable insights with advanced analytics and AI.",
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock technical support from our team of certified experts.",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of companies worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "This platform has revolutionized how we handle our operations. The efficiency gains are remarkable.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateCorp",
                content: "Outstanding support and incredibly powerful features. It's exactly what we needed to scale.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, GrowthCo",
                content:
                  "The analytics and insights have helped us make better decisions and improve our products significantly.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                name: "Alex Thompson",
                role: "Founder & CEO",
                image: "/images/team1.png",
              },
              {
                name: "Jessica Park",
                role: "Head of Engineering",
                image: "/images/team2.png",
              },
              {
                name: "David Kim",
                role: "Lead Designer",
                image: "/images/team3.png",
              },
              {
                name: "Maria Garcia",
                role: "VP of Sales",
                image: "/images/team4.png",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="ghost">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our platform.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I get started with your platform?",
                answer:
                  "Getting started is easy! Simply sign up for a free trial, and you'll have access to all our features for 14 days. Our onboarding team will guide you through the setup process.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our enterprise customers also get dedicated account managers and priority support.",
              },
              {
                question: "Can I integrate with my existing tools?",
                answer:
                  "Yes! Our platform offers extensive integration capabilities with over 100+ popular tools and services. We also provide REST APIs and webhooks for custom integrations.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with SOC 2, GDPR, and other industry standards.",
              },
              {
                question: "What are your pricing plans?",
                answer:
                  "We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprises. Contact our sales team for a customized quote based on your specific needs.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new features, updates, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white text-black" />
            <Button className="bg-white text-indigo-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Contact us today to learn more.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@techcorp.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>123 Tech Street, San Francisco, CA 94105</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Wew ill get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Subject" />
                <textarea className="w-full p-3 border rounded-md resize-none h-32" placeholder="Your message..." />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
