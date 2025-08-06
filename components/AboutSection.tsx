'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  Rocket,
  Star,
  Building,
  ChartBar
} from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Timeline data for deployment section
  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "RGES India is established with a vision to transform business consulting and solutions.",
      icon: Building,
      side: "right",
      color: "from-orange-500 to-orange-600"
    },
    {
      year: "2011",
      title: "First Major Project",
      description: "Delivered our first large-scale business transformation project for a leading client.",
      icon: Target,
      side: "left",
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2014",
      title: "Service Expansion",
      description: "Expanded our offerings to include digital transformation and technology consulting.",
      icon: TrendingUp,
      side: "right",
      color: "from-red-500 to-red-600"
    },
    {
      year: "2017",
      title: "Global Reach",
      description: "Started serving clients internationally, expanding our impact beyond India.",
      icon: Globe,
      side: "left",
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2020",
      title: "Innovation in Adversity",
      description: "Launched remote consulting and digital solutions during the global pandemic.",
      icon: Rocket,
      side: "right",
      color: "from-teal-500 to-teal-600"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as a top business consulting firm for innovation and client success.",
      icon: Star,
      side: "left",
      color: "from-green-500 to-green-600"
    },
    {
      year: "2024",
      title: "Sustainability & Impact",
      description: "Initiated ESG and social responsibility programs for a sustainable future.",
      icon: Users,
      side: "right",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 mb-6"
          >
            <Calendar className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-neutral-700">Our Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Deployment
            <span className="block gradient-text">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our journey of growth, innovation, and success through the years.
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-accent-500 h-full"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center mb-16 ${
                item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
              </motion.div>
              
              {/* Content */}
              <div className={`w-5/12 ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5`}></div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-sm font-semibold text-primary-600 mb-2 relative z-10">{item.year}</div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">{item.title}</h4>
                  <p className="text-neutral-600 leading-relaxed relative z-10">{item.description}</p>
                  
                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${item.color} opacity-10 rounded-full -translate-y-10 translate-x-10`}></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
          >
            Learn More About Our Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 