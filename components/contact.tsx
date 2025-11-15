'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage('✓ Message sent! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setMessage(''), 5000)
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Ready to take your website to page one? Let's talk about your SEO goals.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your SEO goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            {message && (
              <p className={`text-sm text-center ${message.includes('✓') ? 'text-accent' : 'text-destructive'}`}>
                {message}
              </p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:hamja@amirhamjachy.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Email</p>
                    <p className="text-sm text-muted-foreground">hamja@amirhamjachy.com</p>
                  </div>
                </a>

                <a href="tel:+8801857596354" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Phone</p>
                    <p className="text-sm text-muted-foreground">+880 1857 596354</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Calendar Booking</p>
                    <a href="https://calendly.com" className="text-sm text-accent hover:underline">
                      Schedule a 30-min consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to inquiries within 24 hours. Let's discuss your SEO strategy and growth goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
