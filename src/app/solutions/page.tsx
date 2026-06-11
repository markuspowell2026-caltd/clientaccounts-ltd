import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2, Users, Star, Target, Globe, Briefcase,
  CheckCircle, ArrowRight, Zap, Shield,
  Search, Headphones, TrendingUp, Clock, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Solutions — How We Work & Who We Serve',
  description:
    'Discover how Client Accounts Ltd delivers outsourced business support across bookkeeping, marketing, CRM and automation. Our proven process for UK, US and Australian businesses.',
}

const industries = [
  {
    icon: Building2,
    title: 'Startups & Early-Stage Businesses',
    desc: 'You need professional-grade support from day one but can\'t afford to hire for every function. We give you experienced back-office capability without the headcount.',
    pains: ['No bookkeeping system in place', 'Marketing strategy non-existent', 'Losing track of early customers'],
  },
  {
    icon: Users,
    title: 'Small & Medium Enterprises',
    desc: 'You\'ve grown past the point where the founder can do everything — but you\'re not yet at the scale to justify a full in-house team. We bridge that gap.',
    pains: ['Admin consuming leadership time', 'Inconsistent marketing output', 'Finance not getting proper attention'],
  },
  {
    icon: Briefcase,
    title: 'Professional Services Firms',
    desc: 'Accountants, solicitors, consultants and advisers who need to focus on billable work — not admin, marketing and chasing invoices.',
    pains: ['Non-billable time eating profits', 'Client management complexity', 'No consistent marketing strategy'],
  },
  {
    icon: Target,
    title: 'Marketing & Creative Agencies',
    desc: 'You manage marketing for other businesses but lack the back-office infrastructure to run your own efficiently. Let us be your internal support team.',
    pains: ['Books never up to date', 'CRM not being used properly', 'Admin distracting creative team'],
  },
  {
    icon: TrendingUp,
    title: 'Retailers & E-Commerce',
    desc: 'Transaction volume is high, marketing demands are constant, and customer management is complex. We handle the systems so you can handle the sales.',
    pains: ['High transaction volume overwhelming books', 'Social media inconsistency', 'No CRM for customer retention'],
  },
  {
    icon: Globe,
    title: 'International & Remote Teams',
    desc: 'UK, US or Australian businesses that need consistent support across time zones — with a team that understands each market\'s nuances.',
    pains: ['Cross-timezone coordination', 'Market-specific compliance needs', 'Fragmented operational support'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We start with a free consultation to understand your business, your challenges and your goals. No jargon, no pitch — just a straight conversation.',
    detail: 'We listen carefully to where you are now and where you want to be. We\'ll ask about your current systems, what\'s working, what\'s breaking down and what\'s consuming too much of your time.',
  },
  {
    step: '02',
    title: 'Proposal',
    desc: 'We recommend the specific combination of services that matches your situation — no upselling, no unnecessary extras.',
    detail: 'You\'ll receive a clear, itemised proposal covering exactly what we\'ll do, how we\'ll do it and what it will cost. Transparent pricing, no surprises.',
  },
  {
    step: '03',
    title: 'Onboarding',
    desc: 'We set everything up — accounts, systems, workflows and communication channels — then run a smooth handover so there\'s no disruption to your business.',
    detail: 'We\'ll request access to the tools and accounts we need, configure your CRM, connect your platforms and brief your point of contact. Most clients are fully onboarded within 5 business days.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    desc: 'We operate as an extension of your team — delivering consistently, communicating proactively and improving your systems over time.',
    detail: 'Monthly check-ins, real-time reporting, and a named account contact means you\'re never left wondering what\'s happening. We grow with your business.',
  },
]

const compare = [
  { metric: 'Monthly cost',          inhouse: '£2,500 – £5,000+ salary', us: 'Flexible monthly retainer' },
  { metric: 'Expertise coverage',    inhouse: 'One skill set per hire',   us: 'Bookkeeping, marketing, CRM & automation' },
  { metric: 'Onboarding time',       inhouse: '4 – 12 weeks',             us: '5 business days' },
  { metric: 'Commitment required',   inhouse: 'Employment contract',      us: 'Flexible, no long-term tie-in' },
  { metric: 'Scalability',           inhouse: 'Hire/fire cycle',          us: 'Add or remove services as needed' },
  { metric: 'Technology & tools',    inhouse: 'Additional budget needed', us: 'Included in our service' },
]

const faqs = [
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. We operate on flexible monthly arrangements. We earn your business each month — we don\'t lock you in.',
  },
  {
    q: 'How quickly can you get started?',
    a: 'Typically within 5 business days of signing. We\'ll have your systems configured and your first deliverables in motion within the first week.',
  },
  {
    q: 'Do you work with businesses outside the UK?',
    a: 'Yes. We actively support businesses in the UK, United States and Australia. We understand the regulatory and market differences in each territory.',
  },
  {
    q: 'What software and tools do you use?',
    a: 'We work with most major platforms including Xero, QuickBooks, HubSpot, Zoho CRM, GoHighLevel, Meta Business Suite, Hootsuite and more. We adapt to your existing tools where possible.',
  },
  {
    q: 'Will I have a dedicated contact?',
    a: 'Yes. Every client has a named account manager — not a call centre or a rotating help desk. You\'ll always know who to contact and can expect a response within one business day.',
  },
  {
    q: 'Can I start with just one service?',
    a: 'Absolutely. Many clients start with bookkeeping or CRM management, then expand services as they see results. There\'s no pressure to take more than you need.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-5">
            <span className="block w-6 h-px bg-gold-400" />
            Our Approach
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            Business Solutions That Actually{' '}
            <span className="text-gradient-gold">Deliver Results</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            We don&apos;t believe in generic packages or one-size-fits-all retainers. Every engagement is built around what your business specifically needs — nothing more, nothing less.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              Book a Free Consultation <ArrowRight size={15} />
            </Link>
            <Link href="#industries" className="btn-outline-white">
              Who We Serve
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="bg-white py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-tag">Who We Serve</p>
            <h2 className="section-title">The Right Support for Every Stage of Business</h2>
            <p className="section-subtitle">
              Whether you&apos;re a founder wearing fifteen hats or an established SME struggling to scale, we have a solution designed for where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <div key={i} className="card-service">
                  <div className="icon-circle mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">{ind.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{ind.desc}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Common challenges we solve:</p>
                    <ul className="space-y-1.5">
                      {ind.pains.map(p => (
                        <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle size={11} className="text-gold-500 flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="bg-navy-900 bg-dot-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <span className="block w-6 h-px bg-gold-400" />
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Proven 4-Step Process</h2>
            <p className="text-gray-400 text-lg mt-4 leading-relaxed">
              From first conversation to ongoing delivery — a process designed for zero friction and maximum results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/40 hover:bg-white/8 transition-all duration-300 h-full">
                  <div className="text-4xl font-extrabold text-gold-500/30 mb-4 leading-none">{p.step}</div>
                  <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.detail}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 z-10">
                    <ChevronRight size={20} className="text-gold-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="bg-gray-50 bg-dot-gray py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">The Business Case</p>
            <h2 className="section-title">Outsourcing vs. Hiring In-House</h2>
            <p className="section-subtitle">
              The numbers are compelling — but the flexibility is what makes the real difference.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-navy-900 text-white text-sm font-semibold">
              <div className="px-6 py-4 text-gray-300">What You&apos;re Comparing</div>
              <div className="px-6 py-4 border-l border-white/10">Hiring In-House</div>
              <div className="px-6 py-4 border-l border-white/10 text-gold-400">Client Accounts Ltd</div>
            </div>
            {compare.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="px-6 py-4 font-medium text-navy-900">{row.metric}</div>
                <div className="px-6 py-4 text-gray-600 border-l border-gray-100">{row.inhouse}</div>
                <div className="px-6 py-4 text-navy-900 font-semibold border-l border-gray-100">
                  <span className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">Why Us</p>
            <h2 className="section-title">Built on Trust. Measured on Results.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield,    title: 'UK Registered',        desc: 'Company No. 17268964 — Registered in England & Wales. A professional, accountable business you can verify.' },
              { icon: Globe,     title: 'Multi-Market Experts', desc: 'We know the nuances of UK, US and Australian business environments — and we apply that knowledge to your benefit.' },
              { icon: Headphones, title: 'Named Account Manager', desc: 'A single, dedicated contact for your account — not a shared inbox or a call centre. Real people, real responses.' },
              { icon: Zap,       title: 'Technology-First',     desc: 'We use the best available tools and build automation into every service line, so your business is always ahead of the curve.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="card-service">
                  <div className="icon-circle mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-navy-900 text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-gold-500 to-gold-400 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
            The Right Solution Is One Conversation Away
          </h2>
          <p className="text-navy-800 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free 30-minute consultation. No sales pressure — just an honest conversation about your business and how we can help it run better.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-navy text-base">
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-navy text-base">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
