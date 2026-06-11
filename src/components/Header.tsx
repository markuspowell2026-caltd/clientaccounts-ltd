'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/services',  label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact',   label: 'Contact' },
]

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy-800 transition-colors">
              <span className="text-gold-400 font-black text-sm tracking-tight">CA</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-navy-900 text-base">Client Accounts</span>
              <span className="text-gold-500 font-bold text-base"> Ltd</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-navy-900 bg-navy-50 font-semibold'
                    : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-navy text-sm"
            >
              Book Consultation
              <ChevronRight size={14} />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-navy-900 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-navy-50 text-navy-900 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
              }`}
            >
              {link.label}
              <ChevronRight size={14} className="text-gray-400" />
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-navy w-full justify-center"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
