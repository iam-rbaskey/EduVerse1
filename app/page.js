'use client'

import { motion } from "framer-motion"
import { Search, MapPin, Play, ArrowRight, Sparkles, BookOpen, Users, Trophy, CheckCircle, Building2, PhoneOutgoing, GraduationCap, Globe, ArrowUpRight, Star } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowAnimation = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(0, 255, 0, 0)",
        "0 0 20px rgba(0, 255, 0, 0.5)",
        "0 0 20px rgba(0, 255, 0, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { 
      icon: Users, 
      value: "50+", 
      label: "Active Teachers",
      color: "text-blue-500"
    },
    { 
      icon: BookOpen, 
      value: "100+", 
      label: "Total Subjects",
      color: "text-green-500"
    },
    { 
      icon: Trophy, 
      value: "10+", 
      label: "Carear Mentors",
      color: "text-yellow-500"
    },
    { 
      icon: GraduationCap, 
      value: "97%", 
      label: "Success Rate",
      color: "text-purple-500"
    }
  ]

  const features = [
    {
      title: "Experienced Teachers",
      description: "Learn from Best Teachers with years of experience in your Locality ",
      icon: GraduationCap
    },
    {
      title: "Wide Access",
      description: "Connect with 150+ Teachers from anywhere",
      icon: Globe
    },
    {
      title: "Online/Offline",
      description: "Home Tutors also available with personalized focus in Locality",
      icon: Building2
    }
  ]

  const testimonials = [
    {
      quote: "The best educational platform I've ever used. Really helped by them to find a teacher for my son.",
      author: "Puja Bissas",
      Location: "Jadavpur",
    },
    {
      quote: "Helped me to to find a new Maths Teacher in my area. Highly recommended!",
      author: "Anup Kumar",
      Location: "Kolkata",
    },
    {
      quote: "Recomended!! As it helped to find a lady teacher for my 9 year old daughter",
      author: "Rahul Saha",
      Location: "Hooghly",
    }
  ]

  const faqs = [
    {
      question: "How do I connect to a teacher ?",
      answer: "Sign up for a free account and search for a teacher or Go to the Teachers Section."
    },
    {
      question: "Are the certificates recognized?",
      answer: "Yes, our certificates are industry-recognized and can be shared on LinkedIn and other professional platforms. Many employers value our certifications."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. We also offer flexible payment plans for selected courses."
    },
    {
      question: "Can I access the courses on mobile?",
      answer: "Yes, our platform is fully responsive. You can access all courses and materials on any device through our website or mobile app."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white ">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className=" p-2">
                <Image
                  src="/plane.png"
                  alt="Coursa Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <span className="text-xl font-bold">EduVerse</span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="text-primary hover:text-primary/80 border-b-2 border-primary">
                Home
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/courses" className="text-gray-600 hover:text-primary">
                Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/teachers" className="text-gray-600 hover:text-primary">
                Teachers
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="text-gray-600 hover:text-primary">
                About
              </Link>
            </motion.div>
          </nav>

          <div className="flex items-center space-x-4">
            
            <div className="relative">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs absolute -top-2 -right-2">
                2
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Image
                  src="/cart.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login">
                  <Button className="bg-gradient-to-r font-extrabold text-white from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Login
                  </Button>
                </Link>
              </motion.div>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(249, 168, 212, 0.1), rgba(167, 139, 250, 0.1))",
            zIndex: -1
          }}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-2"
            >
              <Sparkles className="text-pink-500 animate-pulse" />
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text font-medium">
                Everything Free
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-transparent bg-clip-text"
            >
              Need a Tutor ?
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0"
            >
              Find best Teachers from everywhere, be it Local or Any Other location
            </motion.p>

            {/* Search and Location */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-4 max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white rounded-full shadow-lg p-2 border border-purple-100"
              >
                <Search className="text-purple-400 hidden sm:block" />
                <Input
                  type="search"
                  placeholder="What do you want to learn?"
                  className="border-none focus-visible:ring-0"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white rounded-full shadow-lg p-2 border border-purple-100"
              >
                <MapPin className="text-purple-400 hidden sm:block" />
                <Input
                  type="text"
                  placeholder="Enter your location"
                  className="border-none focus-visible:ring-0"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:from-emerald-600 hover:to-teal-600 shadow-lg"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-gray-800 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-purple-100 hover:bg-purple-50 shadow-lg"
              >
                <PhoneOutgoing className="w-4 h-4 text-purple-500" />
                <span>Call Us</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="relative mt-8 lg:mt-0">
            <motion.div
              animate="animate"
              variants={floatingAnimation}
              className="relative"
            >
              <motion.div
                animate="animate"
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src="/hero1.png"
                  alt="Hero Image"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -left-4 sm:-left-8 top-4 sm:-top-8"
              >
                <div className="bg-white p-1 rounded-full ">
                  <Image
                    src="/edu1.png"
                    alt="YouTube"
                    width={30}
                    height={300}
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>
              {/*
              <motion.div
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -right-1 sm:-right-8 top-3/4"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Google"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </motion.div>*/}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Trending Courses */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center">
            <span>🔥</span>
            <span className="ml-2">Super Teachers</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              title: "Soumodeep Mukherjee",
              color: "bg-emerald-100",
              image: "/teacher1.jpg"
            },
            {
              title: "Nandita Das",
              color: "bg-yellow-100",
              image: "/teacher3.jpg"
            },
            {
              title: "Pabitra Das",
              color: "bg-orange-100",
              image: "/teacher4.jpg"
            }
          ].map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`${course.color} rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-lg`}
            ><Link href="/teachers" className="text-gray-600 hover:text-primary">
              <div className="aspect-video relative mb-4">
                
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">{course.title}</h3></Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.1), rgba(249, 168, 212, 0.1))",
            zIndex: -1
          }}
        />
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl font-bold mb-4">
              India's First Platform
            </h2>
            <p className="text-gray-600 text-gray-300 max-w-2xl mx-auto">
              To Find Best Local Teachers for Your Child by Experts
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100"
            >
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="inline-block w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4" />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.Location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our platform and Services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Grow with US?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Reach to Students & Teachers worldwide and Grow
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            
            <Link href="/enquiry">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Partner with Us
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

