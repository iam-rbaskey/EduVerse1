'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Trophy, Star, Globe, Rocket, Heart } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      value: "50k+",
      label: "Active Students",
      color: "text-blue-500"
    },
    {
      icon: BookOpen,
      value: "300+",
      label: "Courses",
      color: "text-green-500"
    },
    {
      icon: Trophy,
      value: "15+",
      label: "Awards",
      color: "text-yellow-500"
    },
    {
      icon: Globe,
      value: "100+",
      label: "Countries",
      color: "text-purple-500"
    }
  ]

  const features = [
    "Expert instructors from top companies",
    "Flexible learning schedule",
    "Interactive learning experience",
    "Industry-recognized certificates",
    "Career guidance and support",
    "Lifetime access to course content"
  ]

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do"
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Your success is our top priority"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly innovating our learning platform"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 text-white">About Us</Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
            Transforming Education for Everyone
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're on a mission to make quality education accessible to everyone,
            anywhere in the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg dark:opacity-90"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={100}
                height={100}
                className="w-24 h-24"
              />
            </motion.div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold dark:text-white">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Founded with a vision to revolutionize online education, we've grown
              from a small startup to a global learning platform. Our commitment to
              quality education and student success has made us a trusted name in
              online learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className={`mb-2 flex justify-center ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="mb-6 text-lg opacity-90">
              Join our community of learners and start your journey today
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Started Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

