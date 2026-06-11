import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen, BarChart3, Share2, Target, Zap, Users,
  CheckCircle, Globe, Shield, Clock, TrendingUp, ArrowRight,
  Building2, Headphones, Star, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Business Support Services | Bookkeeping, Marketing & CRM',
  description:
    'Client Accounts Ltd delivers bookkeeping, local business marketing, social media marketing, marketing CRM and bookkeeping CRM services to UK, US and Australian businesses.',
}

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping & Accounting',
    desc: 'Accurate, up-to-date financial records so you always know where your business stands — without the overhead of an in-house finance team.',
    features: ['Transaction recording', 'Bank reconciliation', 'Financial reporting', 'Bookkeeping CRM'],
    href: '/services#bookkeeping',
    tag: 'Finance',
  },
  {
    icon: TrendingUp,
    title: 'Local Business Marketing',
    desc: 'Get found by customers in your area. We build visibility, reputation and leads for businesses targeting their local market.',
    features: ['Google Business Profile', 'Local SEO', 'Review management', 'Lead generation'],
    href: '/services#local-marketing',
    tag: 'Marketing',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Consistent, on-brand social media presence that builds authority and drives engagement — managed for you.',
    features: ['Content planning & creation', 'Platform management', 'Audience growth', 'Performance reporting'],
    href: '/services#social-media',
    tag: 'Marketing',
  },
  {
    icon: Target,
    title: 'Marketing CRM',
    desc: 'Never lose a lead again. We implement and manage a CRM that tracks every prospect from first contact to closed deal.',
    features: ['Pipeline setup & management', 'Lead tracking', 'Follow-up automation', 'Sales reporting'],
    href: '/services#marketing-crm',
    tag: 'CRM',
  },
  {
    icon: BarChart3,
    title: 'Bookkeeping CRM',
    desc: 'A dedicated CRM for managing your bookkeeping clients — invoicing, communications, deadlines and file management in one place.',
    features: ['Client onboarding workflows', 'Invoice tracking', 'Deadline management', 'Automated reminders'],
    href: '/services#bookkeeping-crm',
    tag: 'CRM',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    desc: 'Eliminate repetitive tasks with smart workflows and AI-powered tools, freeing your team to focus on high-value work.',
    features: ['Workflow automation', 'AI business solutions', 'CRM integrations', 'Process optimisation'],
    href: '/services#automation',
    tag: 'Automation',
  },
]

const whyUs = [
  {
    icon: Globe,
    title: 'International Business Support',
    desc: 'We serve businesses in the UK, United States and Australia — understanding the nuances of each market.',
  },
  {
    icon: Shield,
    title: 'Reliable & Professional',
    desc: 'Every deliverable is completed to a consistent standard. You get the same high quality, every time.',
  },
  {
    icon: Clock,
    title: 'Flexible & Scalable',
    desc: 'Start with one service, add more as you grow. Our solutions flex around your business, not the other way around.',
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    desc: 'We use current tools, CRMs and automation platforms so your business operates at the cutting edge.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Client Support',
    desc: 'A named point of contact for your account — no call centres, no ticket queues, just direct, responsive support.',
  },
]

const problems = [
  'Your bookkeeping is months behind and tax season is looming',
  'You have no real marketing strategy — and your competitors are pulling ahead',
  'Leads fall through the cracks because there\'s no system to follow them up',
  'You\'re spending evenings on admin instead of growing your business',
  'Social media presence is inconsistent or non-existent',
  'You\'re paying for software that nobody manages properly',
]

const industries = [
  { icon: Building2, label: 'Startups & Founders' },
  { icon: Users,    label: 'Small & Medium Businesses' },
  { icon: Globe,    label: 'UK, US & Australian Companies' },
  { icon: Star,     label: 'Professional Services Firms' },
  { icon: Target,   label: 'Retailers & E-Commerce' },
  { icon: TrendingUp, label: 'Agencies & Consultancies' },
]

const stats = [
  { value: '5',        label: 'Core Service Areas' },
  { value: '3',        label: 'Markets Served (UK, US, AU)' },
  { value: '100%',     label: 'UK Registered Business' },
  { value: '24/7',     label: 'Support Available' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden gradient-hero bg-dot-navy">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-800/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs text-gold-300 font-semibold tracking-wide uppercase">
                Professional Business Support · Registered in England &amp; Wales
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-up">
              Professional Business Support{' '}
              <span className="text-gradient-gold">That Helps You Scale</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-up delay-200">
              Bookkeeping, local business marketing, social media management, CRM and business automation —
              all handled by experts, so you can focus entirely on growing your business.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/contact" className="btn-gold text-base">
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline-white text-base">
                Explore Services
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 animate-fade-up delay-400">
              {['No long-term contract required', 'UK registered company', 'UK, US & Australian clients'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle size={14} className="text-gold-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-navy-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-gray-50 bg-dot-gray py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">Sound Familiar?</p>
              <h2 className="section-title">
                Running a Business Is Hard Enough — Without These Headaches
              </h2>
              <p className="section-subtitle">
                Most business owners didn&apos;t start their company to spend time on admin, chasing invoices or figuring out social media algorithms. Yet that&apos;s exactly where most of the day goes.
              </p>
              <div className="gold-divider" />
              <ul className="space-y-4 mt-6">
                {problems.map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-900 mb-4">
                  <CheckCircle size={26} className="text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">The Client Accounts Solution</h3>
                <p className="text-gray-500 text-sm mt-2">We take these off your plate — completely.</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Up-to-date books every single month',
                  'A local marketing strategy that drives real enquiries',
                  'Social media handled — planned, posted and monitored',
                  'A CRM that means no lead ever gets forgotten',
                  'Automation that saves you hours every week',
                  'A team working on your business, not in it',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-navy w-full justify-center">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-tag">What We Do</p>
            <h2 className="section-title">Five Services. One Trusted Partner.</h2>
            <p className="section-subtitle">
              Everything a growing business needs to run smoothly — from keeping the books to filling the pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Link href={s.href} key={i} className="card-service group block">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="icon-circle group-hover:bg-gold-500 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="inline-block text-xs font-semibold text-gold-600 bg-gold-50 border border-gold-200 px-2.5 py-0.5 rounded-full mb-2">
                        {s.tag}
                      </span>
                      <h3 className="text-base font-bold text-navy-900 leading-tight">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="feature-check">
                        <CheckCircle size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline-navy">
              View Full Service Details
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-navy-900 py-20 lg:py-28 bg-dot-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <span className="block w-6 h-px bg-gold-400" />
              Why Client Accounts Ltd
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Businesses That Want to Grow</h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              We&apos;re not a generalist agency. We specialise in the exact services growing businesses need most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/8 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
            {/* 6th card: CTA */}
            <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2">Ready to get started?</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Book a free 30-minute consultation and let&apos;s explore how we can support your business.
                </p>
              </div>
              <Link href="/contact" className="btn-gold mt-6 justify-center">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-tag">Who We Serve</p>
            <h2 className="section-title">Supporting Businesses Across Three Continents</h2>
            <p className="section-subtitle">
              Whether you&apos;re a startup in Nottingham, an SME in New York, or a professional services firm in Sydney — we understand your market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <div key={i} className="text-center p-5 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-md transition-all duration-200 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-navy-900" />
                  </div>
                  <p className="text-xs font-semibold text-navy-900 leading-tight">{ind.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-br from-gold-500 to-gold-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
            Stop Wearing Every Hat in Your Business
          </h2>
          <p className="text-navy-800 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Outsource the work that slows you down to a team that specialises in it. Book a free consultation today — no obligation, just a straightforward conversation about your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-navy text-base">
              Book a Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-navy text-base">
              Explore All Services
            </Link>
          </div>
          <p className="mt-8 text-sm text-navy-700">
            Client Accounts Ltd · Registered in England &amp; Wales · Co. No. 17268964
          </p>
        </div>
      </section>
    </>
  )
}
