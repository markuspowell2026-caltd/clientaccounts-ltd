import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen, TrendingUp, Share2, Target, BarChart3, Zap,
  CheckCircle, ArrowRight, Users, Clock, FileText,
  DollarSign, Search, MessageSquare, Bell, Database,
  Workflow, Bot, Plug, Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services — Bookkeeping, Marketing, CRM & Automation',
  description:
    'Detailed overview of all Client Accounts Ltd services: bookkeeping, local business marketing, social media marketing, marketing CRM, bookkeeping CRM and business automation.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative hero-bg py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-5">
            <span className="block w-6 h-px bg-gold-400" />
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            Every Service Your Business Needs{' '}
            <span className="text-gradient-gold">Under One Roof</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            From accurate bookkeeping to lead-generating marketing and smart automation — we provide the full spectrum of outsourced business support services that growing companies rely on.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              Book a Consultation <ArrowRight size={15} />
            </Link>
            <Link href="#bookkeeping" className="btn-outline-white">
              Browse Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── SERVICE 1: BOOKKEEPING ── */}
      <section id="bookkeeping" className="bg-white py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  <BookOpen size={22} />
                </div>
                <span className="text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full">Finance</span>
              </div>
              <p className="section-tag">Service 01</p>
              <h2 className="section-title">Bookkeeping & Accounting</h2>
              <div className="gold-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-navy-900">The problem:</strong> Disorganised finances are one of the leading causes of small business failure. When your books are behind, you can&apos;t make informed decisions, you risk tax penalties and you waste hours before every year-end.
                </p>
                <p>
                  <strong className="text-navy-900">Our solution:</strong> We take complete ownership of your bookkeeping — recording every transaction, reconciling your accounts, and producing clear, timely financial reports. You always know where your business stands, and your accountant has everything they need, when they need it.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  { icon: FileText,   text: 'Complete transaction recording & categorisation' },
                  { icon: DollarSign, text: 'Monthly bank and credit card reconciliation' },
                  { icon: BarChart3,  text: 'Profit & loss, balance sheet and cash flow reports' },
                  { icon: Clock,      text: 'Timely, accurate records ready for tax submissions' },
                  { icon: Users,      text: 'Liaison with your accountant or tax adviser' },
                  { icon: CheckCircle,text: 'VAT return preparation (where applicable)' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-navy-900" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-navy-900 mb-1 text-sm">Who is this for?</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sole traders, limited companies and SMEs who want clean, accurate books without the cost of an in-house bookkeeper. Ideal for businesses that currently manage their own books but know it&apos;s not getting the attention it deserves.
                </p>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Never miss a VAT or tax deadline again',
                    'Real-time visibility on cash flow and profit',
                    'Year-end ready in days, not weeks',
                    'Confident financial decision-making',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: LOCAL MARKETING ── */}
      <section id="local-marketing" className="bg-gray-50 bg-dot-gray py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-navy-900 mb-1 text-sm">Who is this for?</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Brick-and-mortar businesses, service providers, tradespeople, clinics, restaurants and any business whose customers are primarily in a defined geographic area. Also ideal for online businesses targeting specific regional markets.
                </p>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Appear in local search results when customers need you',
                    'A strong, trusted online reputation',
                    'A steady stream of inbound local enquiries',
                    'Outrank local competitors on Google',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  <TrendingUp size={22} />
                </div>
                <span className="text-xs font-semibold bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full">Marketing</span>
              </div>
              <p className="section-tag">Service 02</p>
              <h2 className="section-title">Local Business Marketing</h2>
              <div className="gold-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-navy-900">The problem:</strong> 97% of consumers search online for local businesses. If your business isn&apos;t showing up when local customers search for what you offer, you&apos;re invisible — and your competitors are taking your revenue.
                </p>
                <p>
                  <strong className="text-navy-900">Our solution:</strong> We build, optimise and manage your entire local marketing presence — Google Business Profile, local SEO, online directories and reputation management — so you get found first, trusted fast and chosen consistently.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Search,      text: 'Google Business Profile setup & optimisation' },
                  { icon: TrendingUp,  text: 'Local SEO — rank higher in your area' },
                  { icon: Star,        text: 'Online review generation & management' },
                  { icon: Target,      text: 'Local lead generation campaigns' },
                  { icon: FileText,    text: 'Business directory listing management' },
                  { icon: BarChart3,   text: 'Local visibility reporting & analytics' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-navy-900" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 3: SOCIAL MEDIA ── */}
      <section id="social-media" className="bg-white py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  <Share2 size={22} />
                </div>
                <span className="text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1 rounded-full">Social Media</span>
              </div>
              <p className="section-tag">Service 03</p>
              <h2 className="section-title">Social Media Marketing</h2>
              <div className="gold-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-navy-900">The problem:</strong> Inconsistent or absent social media makes your business look inactive, untrustworthy and behind the times. But creating quality content consistently is time-consuming — and most business owners simply don&apos;t have the bandwidth.
                </p>
                <p>
                  <strong className="text-navy-900">Our solution:</strong> We build and manage your social media presence across the platforms your customers use. From content strategy to scheduling, community management and performance tracking — it&apos;s all handled so you can stay focused on running your business.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { icon: FileText,    text: 'Monthly content calendar planning & approval' },
                  { icon: Share2,      text: 'Content creation — posts, graphics & captions' },
                  { icon: Clock,       text: 'Scheduled publishing across all active platforms' },
                  { icon: MessageSquare, text: 'Community management & comment responses' },
                  { icon: TrendingUp,  text: 'Growth strategy & hashtag optimisation' },
                  { icon: BarChart3,   text: 'Monthly performance reporting & insights' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-navy-900" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-navy-900 mb-1 text-sm">Platforms we manage</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['LinkedIn', 'Instagram', 'Facebook', 'X (Twitter)', 'TikTok', 'Google Posts'].map(p => (
                    <span key={p} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-700 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Consistent brand presence across all platforms',
                    'Growing, engaged follower base',
                    'Increased website traffic from social channels',
                    'A professional image that builds customer trust',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 4: MARKETING CRM ── */}
      <section id="marketing-crm" className="bg-gray-50 bg-dot-gray py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-navy-900 mb-1 text-sm">Who is this for?</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Any business that generates leads — from professional services and agencies to retailers and B2B companies. If you are losing track of where prospects are in your sales process, a managed Marketing CRM is the fix.
                </p>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Zero leads lost to poor follow-up',
                    'A clear, visible sales pipeline at all times',
                    'Faster conversion from enquiry to client',
                    'Data-driven decisions on where leads come from',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  <Target size={22} />
                </div>
                <span className="text-xs font-semibold bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-full">CRM</span>
              </div>
              <p className="section-tag">Service 04</p>
              <h2 className="section-title">Marketing CRM</h2>
              <div className="gold-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-navy-900">The problem:</strong> Most businesses lose a significant portion of their revenue not from a lack of leads, but from a failure to follow them up. Without a system, leads sit in inboxes, spreadsheets and memory — and eventually, they go cold.
                </p>
                <p>
                  <strong className="text-navy-900">Our solution:</strong> We implement, configure and actively manage a marketing CRM that captures every lead, tracks every interaction and triggers the right follow-up at the right time. Your pipeline becomes a revenue engine — not a graveyard for forgotten prospects.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Database,    text: 'CRM platform selection, setup & configuration' },
                  { icon: Users,       text: 'Contact & lead database management' },
                  { icon: TrendingUp,  text: 'Pipeline stage design & deal tracking' },
                  { icon: Bell,        text: 'Automated follow-up sequences & reminders' },
                  { icon: Target,      text: 'Lead source attribution & campaign tracking' },
                  { icon: BarChart3,   text: 'Sales performance dashboards & reports' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-navy-900" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 5: BOOKKEEPING CRM ── */}
      <section id="bookkeeping-crm" className="bg-white py-20 lg:py-28 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle">
                  <BarChart3 size={22} />
                </div>
                <span className="text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full">CRM</span>
              </div>
              <p className="section-tag">Service 05</p>
              <h2 className="section-title">Bookkeeping CRM</h2>
              <div className="gold-divider" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  <strong className="text-navy-900">The problem:</strong> Bookkeepers and accountants often juggle dozens of clients simultaneously — and without a dedicated system, things fall through the cracks. Missed deadlines, uncollected invoices and disorganised client files erode both revenue and reputation.
                </p>
                <p>
                  <strong className="text-navy-900">Our solution:</strong> A CRM built specifically for bookkeeping and accounting practices — managing client onboarding, recurring task deadlines, invoice tracking and client communications in one unified platform. Whether you manage 10 clients or 100, you&apos;ll never miss a deadline again.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Users,       text: 'Client onboarding workflows & document collection' },
                  { icon: Bell,        text: 'Deadline management & automated reminders' },
                  { icon: FileText,    text: 'Invoice tracking & payment status monitoring' },
                  { icon: Database,    text: 'Centralised client document management' },
                  { icon: MessageSquare, text: 'Client communication logs & history' },
                  { icon: BarChart3,   text: 'Practice performance & billing reports' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-navy-900" />
                      </div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-navy-900 mb-1 text-sm">Who is this for?</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bookkeeping practices, accounting firms and finance professionals managing multiple clients. Also perfect for businesses that provide ongoing financial services and need a system to keep client work organised and on time.
                </p>
              </div>
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Every client deadline tracked and met',
                    'Zero revenue lost to uninvoiced work',
                    'Professional, consistent client experience',
                    'Scale your practice without scaling your stress',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 6: AUTOMATION ── */}
      <section id="automation" className="bg-navy-900 py-20 lg:py-28 bg-dot-navy scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <Zap size={22} className="text-gold-400" />
                </div>
                <span className="text-xs font-semibold bg-gold-500/20 border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full">Automation</span>
              </div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">
                <span className="block w-6 h-px bg-gold-400" />
                Service 06
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Business Automation</h2>
              <div className="w-12 h-0.5 bg-gold-500 rounded-full mt-0 mb-6" />
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                  <strong className="text-white">The problem:</strong> Every manual, repetitive task in your business is costing you time and money. Data entry, follow-up emails, report generation, task assignments — these are hours your team spends on work that a well-configured system could do in seconds.
                </p>
                <p>
                  <strong className="text-white">Our solution:</strong> We audit your workflows, identify automation opportunities and implement the right tools to eliminate unnecessary manual effort. From AI-powered responses to CRM integrations and process automation — we future-proof how your business operates.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { icon: Workflow,    text: 'Business workflow mapping & automation design' },
                  { icon: Bot,         text: 'AI-powered business tools & solutions' },
                  { icon: Plug,        text: 'CRM, accounting & marketing tool integrations' },
                  { icon: Settings,    text: 'Process optimisation & efficiency auditing' },
                  { icon: Bell,        text: 'Automated notifications & task management' },
                  { icon: Zap,         text: 'Ongoing automation monitoring & improvement' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-gold-400" />
                      </div>
                      <span className="text-sm text-gray-300">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-1 text-sm">Who is this for?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Any business that wants to do more with less — growing teams, professional services, agencies and companies whose staff spend hours on repetitive administrative tasks that could be automated.
                </p>
              </div>
              <div className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-6">
                <h4 className="font-bold text-gold-400 mb-3 text-sm">The outcomes you can expect</h4>
                <ul className="space-y-2">
                  {[
                    'Reclaim hours every week for higher-value work',
                    'Reduce human error in repetitive processes',
                    'Scale without proportionally increasing headcount',
                    'A business that runs efficiently — even when you\'re not in it',
                  ].map(o => (
                    <li key={o} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle size={12} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-gold-500 to-gold-400 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-800 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free 30-minute consultation and tell us about your business. We&apos;ll recommend the right combination of services for where you are right now — and where you want to be.
          </p>
          <Link href="/contact" className="btn-navy text-base">
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}

// Local star import for service section
function Star({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
