'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, BookOpen, Award, MessageSquare, BadgeCheck } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeachersPage() {
  const teachers = [
    {
      id: "1",
      name: "Soumodeep Mukherjee" ,
      expertise: "Computer Science & Application",
      rating: 4.9,
      students: "150+",
      class: "11+",
      experience: "7+ years",
      image: "/teacher1.jpg",
      badges: ["Top Rated", "Coding"],
      bio: "Expert in Java, C++, C, Python and many more with B.Tech in Computer Science & Engineering",
      specializations: ["Java", "C++", "Python"]
    },
    {
      id: "2",
      name: "Tannmoy Kundu",
      expertise: "Bengali, History, Geography",
      rating: 4.3,
      students: "50+",
      class: "5-10",
      experience: "5+ years",
      image: "/teacher2.jpg",
      badges: ["Arts", "History"],
      bio: "All Arts subjects, History, Geography, Bengali from class 5-10 ",
      specializations: ["History", "Geography", "Bengali"]
    },
    {
      id: "3",
      name: "Nandita Das",
      expertise: "Mathematics",
      rating: 4.5,
      students: "40+",
      class: "9-12",
      experience: "5+ years",
      image: "/teacher3.jpg",
      badges: ["Science", "Mathematics"],
      bio: "Expert in Mathematics, Tution available from class 9-12 and Graduation Courses ",
      specializations: ["Maths", "Mathematics", "Science"]
    },
    {
      id: "4",
      name: "Pabitra Das",
      expertise: "Commerce, Accountancy, Economics",
      rating: 4.3,
      students: "30+",
      class: "11-12",
      experience: "5+ years",
      image: "/teacher4.jpg",
      badges: ["Commerce", "Accounts"],
      bio: "All Commerce subjects, CostTax, Accountanncy, Economics from class 11-12 & Graduation ",
      specializations: ["Commerce", "Accountancy", "Economics"]
    },
    {
      id: "5",
      name: "Sammomoy Mukherjee",
      expertise: "Physics, Maths",
      rating: 4.4,
      students: "70+",
      class: "9-12",
      experience: "8+ years",
      image: "/teacher5.jpg",
      badges: ["Popular", "Physics"],
      bio: "Expert in Physics, Mathematics with B.Tech. Tution available from class 9-12 and Graduation Courses",
      specializations: ["Physics", "Maths", "Science"]
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 text-transparent bg-clip-text">
            Meet Our Expert Teachers
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn from industry experts who are passionate about teaching and helping students succeed
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <Link href={`/profile`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 group">
                  <div className="relative">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={400}
                      height={400}
                      className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {teacher.badges.map((badge, i) => (
                        <Badge
                          key={i}
                          className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white backdrop-blur-sm"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 dark:text-white">{teacher.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{teacher.expertise}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Award className="w-5 h-5 text-green-500" />
                        <span>{teacher.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        <span>{teacher.class} Standerds</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{teacher.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {teacher.specializations.map((spec, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-100 text-blue-100 font-bold dark:bg-green-900">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="font-semibold dark:text-white">{teacher.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          <span className="dark:text-gray-300">{teacher.students}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

