'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Celebs } from '@/components/celebs'

export default function Page() {
  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-black light:bg-white transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <HowItWorks />
        {/* <Celebs /> */}
        <Features />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
