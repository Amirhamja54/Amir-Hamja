'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('✓ Check your email to confirm!')
        setEmail('')
        setTimeout(() => onClose(), 2000)
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg shadow-xl max-w-md w-full relative animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get SEO Insights</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Join 400+ subscribers for weekly SEO tips, case studies, and ranking strategies.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            
            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full px-4 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>

            {message && (
              <p className={`text-sm text-center ${message.includes('✓') ? 'text-accent' : 'text-destructive'}`}>
                {message}
              </p>
            )}
          </form>

          <p className="text-xs text-muted-foreground/60 mt-4 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
