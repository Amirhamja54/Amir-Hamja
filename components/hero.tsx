'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import NewsletterModal from './newsletter-modal'

export default function Hero() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)

  return (
    <>
      <section id="home" className="relative min-h-screen pt-20 pb-20 md:pb-32 flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              I get websites on{' '}
              <span className="text-accent">page one of Google</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed text-balance">
              SEO consultant with 5+ years of experience. I've helped 10+ businesses rank on Google's first page with data-driven strategies. Let's take your website from invisible to inevitable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowNewsletterModal(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
              >
                Subscribe to Updates
                <ChevronRight size={20} />
              </button>
              
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
              >
                See Case Studies
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-12 mt-20 max-w-2xl">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Page One Wins</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">400+</p>
                <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  )
}
