'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin, Mail, Phone, Clock, Building2,
  CheckCircle, Send, AlertCircle, Shield,
} from 'lucide-react'

const services = [
  'Bookkeeping & Accounting',
  'Local Business Marketing',
  'Social Media Marketing',
  'Marketing CRM',
  'Bookkeeping CRM',
  'Business Automation',
  'Not sure yet — advise me',
]

const hours = [
  { day: 'Monday – Friday',  time: '9:00 am – 5:30 pm GMT' },
  { day: 'Saturday',         time: 'Closed' },
  { day: 'Sunday',           time: 'Closed' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '',
    services: [] as string[], message: '', gdpr: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const toggleService = (s: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }))
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Please enter your name'
    if (!form.email.trim())   e.email   = 'Please enter your email address'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address'
    if (!form.message.trim()) e.message = 'Please tell us a bit about your business'
    if (!form.gdpr)           e.gdpr    = 'Please consent to being contacted'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')

    try {
      // Replace YOUR_FORMSPREE_FORM_ID with your actual Formspree form ID
      // Sign up free at https://formspree.io — takes 2 minutes
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          phone:    form.phone,
          business: form.business,
          services: form.services.join(', '),
          message:  form.message,
          _subject: `New enquiry from ${form.name} — Client Accounts Ltd`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', business: '', services: [], message: '', gdpr: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative hero-bg py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-400 mb-5">
            <span className="block w-6 h-px bg-gold-400" />
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            Let&apos;s Talk About Your{' '}
            <span className="text-gradient-gold">Business</span>
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            Book a free 30-minute consultation. Tell us where you are, where you want to be, and we&apos;ll tell you exactly how we can help.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* FORM — 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                <h2 className="text-xl font-bold text-navy-900 mb-2">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mb-8">
                  We aim to respond to all enquiries within one business day.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={30} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Message Received!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out to Client Accounts Ltd. We&apos;ll be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm text-gold-600 hover:text-gold-700 font-semibold underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          placeholder="Jane Smith"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          placeholder="jane@yourbusiness.com"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition ${
                            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Business */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          placeholder="+44 (0)7700 000000"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Business Name</label>
                        <input
                          type="text"
                          value={form.business}
                          onChange={e => setForm(p => ({ ...p, business: e.target.value }))}
                          placeholder="Your Business Ltd"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition bg-white"
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">
                        Services You&apos;re Interested In
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map(s => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                              form.services.includes(s)
                                ? 'bg-navy-900 border-navy-900 text-white'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-navy-900 hover:text-navy-900'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Tell us about your business &amp; what you need <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="e.g. I run a small plumbing business in Manchester with 3 staff. My books are a mess and I have no online presence. I'm looking for someone to manage both..."
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    {/* GDPR */}
                    <div>
                      <label className={`flex items-start gap-3 cursor-pointer ${errors.gdpr ? 'text-red-600' : ''}`}>
                        <input
                          type="checkbox"
                          checked={form.gdpr}
                          onChange={e => setForm(p => ({ ...p, gdpr: e.target.checked }))}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-navy-900 focus:ring-navy-900 flex-shrink-0"
                        />
                        <span className="text-xs text-gray-600 leading-relaxed">
                          I consent to Client Accounts Ltd storing and using my details to respond to this enquiry and to contact me with relevant information about their services. I understand I can withdraw consent at any time by emailing{' '}
                          <a href="mailto:info@clientaccounts.ltd" className="text-navy-900 font-medium underline underline-offset-1">
                            info@clientaccounts.ltd
                          </a>.
                          View our{' '}
                          <Link href="/contact" className="text-navy-900 font-medium underline underline-offset-1">
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                      {errors.gdpr && <p className="mt-1 text-xs text-red-500 ml-7">{errors.gdpr}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 rounded-lg border border-red-200">
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-600">
                          Something went wrong. Please email us directly at{' '}
                          <a href="mailto:info@clientaccounts.ltd" className="font-semibold underline">
                            info@clientaccounts.ltd
                          </a>
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-navy w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* CONTACT DETAILS — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-navy-900 mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <a href="mailto:info@clientaccounts.ltd" className="flex items-start gap-3 group">
                    <div className="icon-circle w-9 h-9 rounded-lg flex-shrink-0">
                      <Mail size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                        info@clientaccounts.ltd
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="icon-circle w-9 h-9 rounded-lg flex-shrink-0">
                      <Phone size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Telephone</p>
                      <a href="tel:+447828754104" className="text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors">+44 7828 754104</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="icon-circle w-9 h-9 rounded-lg flex-shrink-0">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Registered Address</p>
                      <p className="text-sm font-semibold text-navy-900 leading-relaxed">
                        417 Carlton Hill<br />Nottingham<br />NG4 1HW<br />United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-navy-900 mb-5 flex items-center gap-2">
                  <Clock size={16} className="text-gold-500" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {hours.map(h => (
                    <div key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className={`font-semibold ${h.time === 'Closed' ? 'text-gray-400' : 'text-navy-900'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    For urgent matters outside business hours, please email us and we will respond at the earliest opportunity on the next business day.
                  </p>
                </div>
              </div>

              {/* Company info */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Building2 size={16} className="text-gold-400" />
                  Company Information
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="text-gray-500">Name:</span> Client Accounts Ltd</p>
                  <p><span className="text-gray-500">Registered:</span> England &amp; Wales</p>
                  <p><span className="text-gray-500">Company No.:</span> <span className="text-gold-400 font-mono">17268964</span></p>
                  <p><span className="text-gray-500">Website:</span> clientaccounts.ltd</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2">
                  <Shield size={13} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    All personal data submitted via this form is handled in accordance with UK GDPR. We will never sell or share your information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
