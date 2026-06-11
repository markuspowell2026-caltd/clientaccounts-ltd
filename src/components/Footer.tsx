import Link from 'next/link'
import { MapPin, Mail, Phone, Building2 } from 'lucide-react'

const services = [
  { label: 'Bookkeeping & Accounting',  href: '/services#bookkeeping' },
  { label: 'Local Business Marketing',  href: '/services#local-marketing' },
  { label: 'Social Media Marketing',    href: '/services#social-media' },
  { label: 'Marketing CRM',             href: '/services#marketing-crm' },
  { label: 'Bookkeeping CRM',           href: '/services#bookkeeping-crm' },
  { label: 'Business Automation',       href: '/services#automation' },
]

const quickLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About Us',  href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact',   href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Top CTA strip */}
      <div className="bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">Ready to streamline your business?</p>
            <p className="text-sm text-gray-300 mt-1">Book a free consultation — no obligation, just solutions.</p>
          </div>
          <Link href="/contact" className="btn-gold flex-shrink-0">
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-950 font-black text-sm">CA</span>
              </div>
              <div>
                <span className="font-bold text-white text-base">Client Accounts</span>
                <span className="text-gold-400 font-bold text-base"> Ltd</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Professional outsourced business support — bookkeeping, marketing, CRM and automation — helping UK, US and Australian businesses grow.
            </p>
            <div className="flex gap-3">
              {/* Social placeholder icons */}
              {['Li', 'Tw', 'Fb'].map(s => (
                <div key={s} className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-xs text-gray-400 hover:bg-gold-500 hover:text-navy-950 transition-colors cursor-pointer font-semibold">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  417 Carlton Hill<br />Nottingham<br />NG4 1HW, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@clientaccounts.ltd" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  info@clientaccounts.ltd
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">To be confirmed</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Registered in England &amp; Wales</p>
                  <p className="text-xs text-gray-500 mt-0.5">Company No. 17268964</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Client Accounts Ltd. All rights reserved.</p>
          <p>Registered in England &amp; Wales · Company No. 17268964 · Nottingham, NG4 1HW</p>
        </div>
      </div>
    </footer>
  )
}
