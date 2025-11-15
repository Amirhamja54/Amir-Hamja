'use client'

import { useEffect, useRef } from 'react'
import { Zap, Search, Link2, CheckSquare as Checkmark } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Core Web Vitals optimization, site speed, structured data, and crawlability fixes.',
      features: ['Core Web Vitals', 'Crawl Optimization', 'Sitemap & Indexing', 'Schema Markup']
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Content optimization, keyword targeting, and on-page element refinement.',
      features: ['Keyword Research', 'Content Optimization', 'Meta Tags', 'URL Structure']
    },
    {
      icon: Link2,
      title: 'Link Acquisition',
      description: 'Strategic link building and off-page SEO to boost domain authority.',
      features: ['Link Prospecting', 'Outreach Strategy', 'Content Marketing', 'Authority Building']
    },
    {
      icon: Checkmark,
      title: 'SEO Audits',
      description: 'Comprehensive audits identifying opportunities and fixing issues.',
      features: ['Competitor Analysis', 'Gap Analysis', 'Priority Roadmap', 'Detailed Report']
    }
  ]

  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 md:py-32 border-t border-border" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Comprehensive SEO solutions tailored to your business goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el
                }}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-3 bg-accent/10 text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors border border-accent/30 hover:border-accent">
                  Request a Quote
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
