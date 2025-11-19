"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import  StackIcon  from 'tech-stack-icons'
import { Smartphone, Globe, Zap, Shield, Code,  CheckCircle, ArrowRight } from 'lucide-react'
import { Skeleton } from '@heroui/react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

interface TechBadgeProps {
  name: string
  delay?: number
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
        {name}
      </Badge>
    </motion.div>
  )
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-16 dark:bg-[#0e0e0e]">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
            {/* Left Side - Text Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Maximizing Potential in oil and gas refineries, petro chemicals, chemical and fertilizers, power plants 
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Hextasphere technologies delivers innovative, reliable, and sustainable engineering solutions across the industries value chain-supporting basic design, feasibility, project implementation, & operations.Our focus is on enhancing operational performance, safety, and efficiency through advanced technology and domain expertise.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We specialize in 3d engineering and design services tailored specifically to the complex demands of different industries. Our multi-disciplinary capabilities ensure accurate, efficient, and streamlined project execution—reducing risks, optimizing workflows, and improving project outcomes.
              </p>
            </div>
            </motion.div>
            {/* Right Side - Image */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
                <img
                  src="/images/services/engg/MAXIMIZING POTENTIAL.jpg"
                  alt="Hextasphere Technologies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </motion.div>
          </div>
        </div>       
      </section>    
    </div>

  )

}