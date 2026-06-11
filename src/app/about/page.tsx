import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, Globe, Users, CheckCircle, Building2,
  ArrowRight, MapPin, Target, Star, Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Our Story, Mission & Values',
  description:
    'Client Accounts Ltd is a UK-registered business support company providing bookkeeping, marketing, CRM and automation services to businesses in the UK, US and Australia.',
}

const values = [
  {
    icon: Shield,
    title: 'Reliability You Can Count On',
    desc: 'Deadlines matter. We deliver what we commit to, when we commit to it — consistently and without excuses.',
  },
  {
    icon: Star,
    title: 'Professional Excellence',
    desc: 'Every output reflects the standard you\'d expect from a senior in-house professional — without the in-house salary.',
  },
  {
    icon: Zap,
    title: 'Technology-Driven Efficiency',
    desc: 'We embrace modern tools, platforms and automation to ensure your business operates at maximum efficiency.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    desc: 'We think like stakeholders in your business. When you grow, we grow — that alignment drives everything we do.',
  },
]

const markets = [
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    desc: 'Our home market. We understand UK accounting standards, GDPR compliance, Companies House requirements and the local business landscape.',
  },
  {
    flag: '🇦🇺',
    country: 'Australia',
    desc: 'We support Australian SMEs with bookkeeping, digital marketing and CRM solutions tailored to the AUS business environment.',
  },
  {
    flag: '🇺🇸',
    country: 'United States',
    desc: 'We work with US-based businesses requiring outsourced back-office support, CRM management and marketing assistance.',
  },
]

const milestones = [
  { stat: '5',     label: 'Core Service Lines' },
  { stat: '3',     label: 'Markets Served' },
  { stat: '100%',  label: 'UK Registered' },
  { stat: '£0',    label: 'Hidden Fees — Ever' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-5">
            <span className="block w-6 h-px bg-gold-400" />
            About Client Accounts Ltd
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            The Business Support Partner{' '}
            <span className="text-gradient-gold">Serious Businesses Choose</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            We are a UK-registered business support company helping founders and business owners across the UK, US and Australia reclaim their time, tighten their finances and grow their customer base.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              Work With Us <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn-outline-white">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">Who We Are</p>
              <h2 className="section-title">Outsourced Expertise. In-House Results.</h2>
              <div className="gold-divider" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Client Accounts Ltd was established to solve a problem that affects thousands of ambitious businesses: the gap between where they are and where they could be — a gap almost always caused by too much work falling on too few shoulders.
                </p>
                <p>
                  As a business grows, the founder becomes increasingly stretched across bookkeeping, marketing, admin, customer service and sales. Quality suffers. Opportunities are missed. The business stalls not because the market isn&apos;t there, but because the operational capacity isn&apos;t.
                </p>
                <p>
                  Our solution is simple: we take the back-office and front-of-house functions that don&apos;t require you — the people, systems and processes — and we own them on your behalf, to a professional standard, at a fraction of the cost of hiring in-house.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {milestones.map(m => (
                  <div key={m.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-extrabold text-navy-900">{m.stat}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Company card */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-3 mb-4">
                  <Building2 size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Client Accounts Ltd</p>
                    <p className="text-xs text-gray-400">Registered in England &amp; Wales</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <MapPin size={13} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>417 Carlton Hill, Nottingham, NG4 1HW, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={13} className="text-gold-400 flex-shrink-0" />
                    <span>Company No. 17268964</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={13} className="text-gold-400 flex-shrink-0" />
                    <span>info@clientaccounts.ltd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-gray-50 bg-dot-gray py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
              <div className="icon-circle mb-6">
                <Target size={22} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3">Our Mission</p>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                To Help Businesses Scale Without Scaling Their Stress
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our mission is to give every business — regardless of size — access to the bookkeeping accuracy, marketing consistency and operational efficiency that has traditionally only been available to large enterprises with big budgets. We deliver enterprise-standard support at a price that makes sense for growing businesses.
              </p>
            </div>

            <div className="bg-navy-900 rounded-2xl p-10 text-white">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-6">
                <Star size={22} className="text-gold-400" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-3">Our Vision</p>
              <h3 className="text-2xl font-bold text-white mb-4">
                The First Call Every Growing Business Makes
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We aim to be the go-to outsourced business support partner for ambitious SMEs across the UK, US and Australia. A team trusted so completely that when our clients face a new business challenge — from a sales slump to a rebrand — Client Accounts Ltd is the first number they dial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-tag">Our Values</p>
            <h2 className="section-title">The Principles That Guide Every Engagement</h2>
            <p className="section-subtitle">
              These aren&apos;t words on a wall. They&apos;re the criteria we use to make decisions — every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="card-service">
                  <div className="icon-circle mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className="bg-navy-900 py-20 lg:py-28 bg-dot-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">
              <span className="block w-6 h-px bg-gold-400" />
              Global Reach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Serving Three Key Business Markets</h2>
            <p className="text-gray-400 text-lg mt-4 leading-relaxed">
              UK headquartered, globally minded. We understand the regulatory, cultural and competitive differences between markets — and we tailor our support accordingly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold-500/40 transition-colors">
                <div className="text-4xl mb-4">{m.flag}</div>
                <h3 className="text-lg font-bold text-white mb-3">{m.country}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Let&apos;s Build Something Better Together
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Book a free 30-minute consultation. We&apos;ll listen to your challenges and tell you honestly whether — and how — we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book a Free Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn-outline-navy">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
