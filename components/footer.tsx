import Link from 'next/link'
import { Linkedin, Instagram, Facebook, Mail, Newspaper } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            
            
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Social</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/amir-hamja-chowdhury-5268b716a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/amirhamjachy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1DozZ6DYL3/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://the-remote-trove.beehiiv.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-colors" 
                aria-label="Newsletter"
              >
                <Newspaper size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2025 Amir Hamja Chowdhury. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/60 mt-4 md:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
