'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { GraduationCap, User } from 'lucide-react'

export function AuthTabs({ children, defaultValue = "student" }) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="student" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>Student</span>
        </TabsTrigger>
        <TabsTrigger value="teacher" className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          <span>Teacher</span>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
