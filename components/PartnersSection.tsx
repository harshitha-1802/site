'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Users, Globe, Award } from 'lucide-react'

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Partner logos data with real companies
  const partners = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      type: "Technology" 
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      type: "Technology" 
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      type: "E-commerce" 
    },
    { 
      name: "IBM", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      type: "Technology" 
    },
    { 
      name: "Oracle", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      type: "Technology" 
    },
    { 
      name: "SAP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      type: "Software" 
    },
    { 
      name: "Salesforce", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Salesforce.com_logo.svg",
      type: "CRM" 
    },
    { 
      name: "Adobe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      type: "Software" 
    },
    { 
      name: "Intel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_light_blue%29.svg",
      type: "Technology" 
    },
    { 
      name: "Cisco", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
      type: "Networking" 
    },
    { 
      name: "Dell", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Dell_logo.svg",
      type: "Technology" 
    },
    { 
      name: "HP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
      type: "Technology" 
    }
  ]

  return (
    <section id="partners" className="py-20 bg-white relative overflow-hidden">
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
            <Building2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Trusted
            <span className="block gradient-text">Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with industry leaders and innovative companies to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-neutral-200 group-hover:border-primary-300">
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 text-center group-hover:text-primary-600 transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Type */}
                <p className="text-neutral-600 text-sm text-center">
                  {partner.type}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Partner Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technology Partners */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Technology Partners</h3>
              <p className="text-neutral-600">Leading tech companies driving innovation</p>
            </motion.div>

            {/* Consulting Partners */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Consulting Partners</h3>
              <p className="text-neutral-600">Expert consultants and advisors</p>
            </motion.div>

            {/* Innovation Partners */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-neutral-500 to-neutral-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Innovation Partners</h3>
              <p className="text-neutral-600">Pioneering companies and startups</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection 