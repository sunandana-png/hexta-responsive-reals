import React from 'react'
import { Smartphone, Globe, Zap, Shield, Code, CheckCircle, ArrowRight, Target, Eye } from 'lucide-react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-lg border ${className}`}>{children}</div>
)

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="p-6 pb-3">{children}</div>
)

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
)

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div className="px-6 pb-6">{children}</div>
)

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span className={`inline-block rounded-md ${className}`}>{children}</span>
)

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => (
  <button className={`px-6 py-3 rounded-md font-medium transition-all ${className}`}>
    {children}
  </button>
)

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div className="opacity-0 translate-y-5 animate-fadeInUp" style={{ animationDelay: `${delay}ms` }}>
      <Card className="p-6 h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </Card>
    </div>
  )
}

interface TechBadgeProps {
  name: string;
  delay?: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <div className="opacity-0 scale-90 animate-fadeInScale" style={{ animationDelay: `${delay}ms` }}>
      <Badge className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        {name}
      </Badge>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0e0e0e] pt-20">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.4s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="w-full py-28 bg-white dark:bg-[#0e0e0e]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-fadeIn">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                  Reverse Engineering & Restoration using faro 3d scanning
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  This model serves as a digital blueprint for reverse engineering, allowing for faithful restoration or reproduction of the original item
                </p>
              </div>
            </div>
            
            <div className="space-y-8 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-500/5 shadow-lg">
                  <img
                    src="/images/services/engg/REVERSE ENGINEERING.jpg"
                    alt="Hextasphere Technologies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-[#0e0e0e]">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="opacity-0 animate-fadeInUp">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black-600 dark:text-black-400">
                    <u>AS-BUILT MODELING</u>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Development of highly accurate 3d models of existing facilities for design
                    validation, maintenance planning, and operational visualization..
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black-600 dark:text-black-400">
                    <u>CONSTRUCTION QUALITY CONTROL</u>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Verification of construction work against design specifications to identify deviations early and ensure compliance. 
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black-600 dark:text-black-400">
                    <u>FACILITY MANAGEMENT</u>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Comprehensive digital asset documentation for supporting layout optimization, inventory planning, and safety improvements, 
                    focus on capturing detailed, accurate, and easily accessible data regarding all physical assets. 
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black-600 dark:text-black-400">
                    <u>MAINTENANCE & REPAIR SUPPORT</u>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Precise dimensional data to enable efficient component replacement, 
                    retrofitting, and repair with reduced downtime and cost.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-black-600 dark:text-black-400">
                    <u>SAFETY & TRAINING SIMULATIONS</u>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Creation of immersive digital environments for operator training and remote
                     walk-throughs to enhance safety preparedness. 
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}