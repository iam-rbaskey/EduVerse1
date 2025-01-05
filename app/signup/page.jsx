'use client'

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AuthTabs } from "@/components/auth-tabs"

export default function SignupPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Section - Form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="w-full max-w-md"
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center mb-8"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-red-500 rounded-lg p-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Coursa Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xl font-bold">Coursa</span>
              </Link>
            </motion.div>

            <AuthTabs defaultValue="student">
              <TabsContent value="student">
                {/* Existing student signup form */}
                <motion.div
                  variants={fadeIn}
                  className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center space-x-2 mb-2"
                    >
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                        Start Your Journey
                      </span>
                    </motion.div>
                    <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-transparent bg-clip-text">
                      Create Your Account
                    </h1>
                    <p className="text-gray-600">
                      Join our community of learners today
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeIn} className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          className="w-full"
                        />
                      </motion.div>
                      <motion.div variants={fadeIn} className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          className="w-full"
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={fadeIn} className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </motion.div>

                    <motion.div variants={fadeIn} className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        className="w-full"
                      />
                    </motion.div>

                    <motion.div variants={fadeIn} className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          terms and conditions
                        </Link>
                      </label>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        Create Account
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="relative my-6"
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or sign up with
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="grid grid-cols-2 gap-4"
                    >
                      <Button
                        variant="outline"
                        className="w-full hover:bg-gray-50"
                      >
                        <Image
                          src="/placeholder.svg"
                          alt="Google"
                          width={20}
                          height={20}
                          className="mr-2 h-5 w-5"
                        />
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-gray-50"
                      >
                        <Image
                          src="/placeholder.svg"
                          alt="GitHub"
                          width={20}
                          height={20}
                          className="mr-2 h-5 w-5"
                        />
                        GitHub
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </TabsContent>

              <TabsContent value="teacher">
                <motion.div
                  variants={fadeIn}
                  className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center space-x-2 mb-2"
                    >
                      <GraduationCap className="w-5 h-5 text-indigo-500" />
                      <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                        Become an Instructor
                      </span>
                    </motion.div>
                    <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-transparent bg-clip-text">
                      Apply to Teach
                    </h1>
                    <p className="text-gray-600">
                      Share your expertise with students worldwide
                    </p>
                  </div>

                  <form className="space-y-6">
                    {/* teacher signup form fields would go here */}
                  </form>
                </motion.div>
              </TabsContent>
            </AuthTabs>

            <motion.p
              variants={fadeIn}
              className="text-center mt-6 text-sm text-gray-600"
            >
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </motion.p>
          </motion.div>

          {/* Right Section - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block w-full max-w-md"
          >
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-10 blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100">
                  <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Why Join Coursa?
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Access to premium courses",
                      "Learn from industry experts",
                      "Flexible learning schedule",
                      "Interactive live sessions",
                      "Certification on completion",
                      "24/7 support"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl"
              >
                <blockquote className="text-gray-700 italic">
                  "Coursa has transformed the way I learn. The courses are
                  engaging, and the community is incredibly supportive!"
                </blockquote>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div>
                    <div className="font-medium">Student Review</div>
                    <div className="text-sm text-gray-600">Web Development Graduate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
