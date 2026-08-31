import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Big-Daddy Book - India\'s #1 Cricket & Casino Platform',
  description: 'Experience the ultimate sports betting and casino gaming platform. Live cricket odds, instant deposits & withdrawals, 24/7 support. Get your Big-Daddy ID now!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/big-daddy-book-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/big-daddy-book-logo-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
