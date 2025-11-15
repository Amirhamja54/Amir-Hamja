import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Amir Hamja Chowdhury | SEO Consultant | Get Websites on Google Page One',
  description: 'SEO consultant with 5+ years experience. I help businesses rank on Google\'s first page. 10+ successful case studies. Technical SEO, On-page & Link Acquisition.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amir-seo.com',
    siteName: 'Amir Hamja Chowdhury',
    title: 'Amir Hamja Chowdhury | SEO Consultant',
    description: 'I get websites on page one of Google. 5+ years experience, 10+ first-page wins.',
    images: [
      {
        url: 'https://amir-seo.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amir Hamja Chowdhury - SEO Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Hamja Chowdhury | SEO Consultant',
    description: 'I get websites on page one of Google.',
    images: ['https://amir-seo.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://amir-seo.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
