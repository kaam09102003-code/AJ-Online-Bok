'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'How It Works', id: 'how' },
    { label: 'Built on Trust', id: 'celebs' },
    { label: 'Why AJ Online Book', id: 'why' },
    { label: 'Contact Us', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-blue-950/90 dark:from-blue-950/90 to-transparent dark:to-transparent backdrop-blur-sm light:from-blue-50/90 light:to-transparent transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/aj-online-book-logo.png"
            alt="AJ Online Book"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm xl:text-base text-gray-700 dark:text-blue-100 light:text-blue-900 hover:text-amber-600 dark:hover:text-amber-400 light:hover:text-amber-600 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 light:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 light:hover:bg-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 light:bg-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-gray-700 dark:text-white light:text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 dark:text-white light:text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 light:bg-white border-t border-gray-200 dark:border-gray-800 light:border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-2 rounded-lg text-gray-700 dark:text-white light:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 light:hover:bg-gray-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
