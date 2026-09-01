import React from 'react'

interface GlassyButtonProps {
  children: React.ReactNode
  phoneNumber?: string // e.g. "919876543210"
  message?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function GlassyButton({
  children,
  phoneNumber = '+918982050056',
  message = 'Hello, I would like to generate a new ID and play.',
  variant = 'primary',
  className = '',
}: GlassyButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-md border'

  const variants = {
    primary:
      'bg-blue-500/20 border-blue-400/40 text-blue-300 hover:bg-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20',

    secondary:
      'bg-amber-500/20 border-amber-400/40 text-amber-300 hover:bg-amber-500/30 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/20',
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
