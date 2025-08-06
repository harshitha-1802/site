'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Settings,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Comprehensive business planning and strategic consulting to drive growth and market expansion.",
      features: ["Market Analysis", "Growth Planning", "Competitive Strategy"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams with our leadership and organizational development programs.",
      features: ["Leadership Training", "Team Building", "Performance Management"],
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business assets.",
      features: ["Risk Assessment", "Compliance", "Security Protocols"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology and digital solutions.",
      features: ["Technology Integration", "Process Automation", "Digital Strategy"],
      color: "from-neutral-500 to-neutral-600"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Expand your business globally with our international market entry strategies.",
      features: ["Market Research", "Local Partnerships", "Regulatory Compliance"],
      color: "from-primary-500 to-accent-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights and analytics to optimize your business performance.",
      features: ["KPI Tracking", "Data Analysis", "Performance Reports"],
      color: "from-secondary-500 to-accent-500"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamline your operations with our proven process improvement methodologies.",
      features: ["Workflow Analysis", "Efficiency Metrics", "Continuous Improvement"],
      color: "from-accent-500 to-primary-500"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop clear roadmaps and actionable strategies for long-term success.",
      features: ["Goal Setting", "Resource Planning", "Execution Strategy"],
      color: "from-neutral-500 to-secondary-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Foster creativity and innovation within your organization.",
      features: ["Ideation Workshops", "Innovation Labs", "Product Development"],
      color: "from-primary-500 to-neutral-500"
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "Accelerate your business growth with proven scaling strategies.",
      features: ["Market Expansion", "Revenue Optimization", "Scaling Frameworks"],
      color: "from-secondary-500 to-neutral-500"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 mb-6"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Comprehensive
            <span className="block gradient-text">Business Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide end-to-end business solutions designed to accelerate your growth and maximize your potential.
          </motion.p>
        </motion.div>

        {/* Single Auto-scrolling Services Container */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -50 * services.length] }}
            transition={{ 
              duration: 80, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6"
            style={{ width: `${services.length * 400}px` }}
          >
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative w-80 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 group-hover:border-primary-300">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 