import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Client Accounts Ltd | Professional Business Support Services',
    template: '%s | Client Accounts Ltd',
  },
  description:
    'Client Accounts Ltd provides professional bookkeeping, business administration, local business marketing, social media marketing, and CRM services to UK, US and Australian businesses.',
  keywords: [
    'bookkeeping services UK',
    'business administration outsourcing',
    'local business marketing',
    'social media marketing',
    'marketing CRM',
    'bookkeeping CRM',
    'outsourced business support',
    'small business services Nottingham',
    'virtual assistant UK',
    'business automation services',
  ],
  authors: [{ name: 'Client Accounts Ltd' }],
  creator: 'Client Accounts Ltd',
  publisher: 'Client Accounts Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://clientaccounts.ltd',
    siteName: 'Client Accounts Ltd',
    title: 'Client Accounts Ltd | Professional Business Support Services',
    description:
      'Bookkeeping, local business marketing, social media marketing, CRM and business automation for growing businesses in the UK, US and Australia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Accounts Ltd | Professional Business Support Services',
    description:
      'Bookkeeping, local business marketing, social media marketing, CRM and business automation for growing UK, US and Australian businesses.',
  },
  alternates: {
    canonical: 'https://clientaccounts.ltd',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
