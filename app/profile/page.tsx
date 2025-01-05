'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Users, Star, BookOpen, MoreHorizontal, MapPin, Plus, AlertCircle, Shield } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  // Mock data for connections
  const connections = [
    {
      id: 1,
      name: "Soumodeep Mukherjee",
      image: "/placeholder.svg"
    },
    
  ]

  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: "warning",
      message: "We detected an unusual login attempt.",
      icon: AlertCircle,
      color: "bg-pink-500"
    },
    {
      id: 2,
      type: "info",
      message: "Please turn on real-time backup to ensure that your data is safe and secure.",
      icon: Shield,
      color: "bg-blue-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Card */}
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                  <MapPin className="w-9 h-9 mr-1" />
                    <div className="absolute bottom-0 right-4 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Location</h2>
                    <p className="text-sm text-gray-400">36, Dakshin Para • Konnagar • Hooghly</p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        Male
                      </Badge>
                      
                    </div>
                  </div>
                </div>
                
              </div>
            </Card>

            {/* Connections Section */}
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">You may know</h3>
                <Button variant="ghost" className="text-sm text-gray-400">
                  More
                </Button>
              </div>
              <div className="flex space-x-4">
                {connections.map((connection) => (
                  <motion.div
                    key={connection.id}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <Image
                      src={connection.image}
                      alt={connection.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Messages Section */}
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold mr-2">Messages</h3>
                  <Badge className="bg-pink-500">2</Badge>
                </div>
                <Button variant="ghost" className="text-sm text-gray-400">
                  More
                </Button>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${notification.type === 'warning' ? 'bg-pink-500/10' : 'bg-blue-500/10'}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${notification.color}`}>
                        <notification.icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm">{notification.message}</p>
                    </div>
                  </motion.div>
                ))}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Oh, no more Message !
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-pink-500 mx-auto">
                    <Image
                      src="/teacher1.jpg"
                      alt="Soumodeep Mukherjee"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 rounded-full border-4 border-pink-500 border-dashed"
                    style={{ width: "104px", height: "104px", margin: "-4px" }}
                  />
                </div>
                <h1 className="text-2xl font-bold mt-4">Soumodeep Mukherjee</h1>
                <p className="text-gray-400">Computer Science & Application</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-gray-700/50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-gray-400">Students</div>
                </Card>
                <Card className="bg-gray-700/50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-gray-400">Subjects</div>
                </Card>
                <Card className="bg-gray-700/50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">7+ Years</div>
                  <div className="text-sm text-gray-400">Experience</div>
                </Card>
                <Card className="bg-gray-700/50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">337</div>
                  <div className="text-sm text-gray-400">Following</div>
                </Card>
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600">
                Contact
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

