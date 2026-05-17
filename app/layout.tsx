
import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'Elton Gomes | Business & Engineering Student',
  description: 'Portfolio & CV of Elton Gomes — Business and Engineering student with experience in creator management, digital marketing, CRM campaigns, and digital asset production.',
  keywords: ['business', 'engineering', 'marketing', 'creator management', 'digital marketing', 'Hamburg'],
  authors: [{ name: 'Elton Gomes' }],
  openGraph: {
    title: 'Elton Gomes | Business & Engineering Student',
    description: 'Portfolio & CV of Elton Gomes — marketing, creator management, and engineering projects.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans bg-slate-950 text-slate-100 min-h-screen antialiased">
        {/* Global aurora — fixed behind all page content */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="
            absolute -inset-[10px] opacity-50 will-change-transform
            [--bg:#020617]
            [--aurora:repeating-linear-gradient(100deg,#10b981_10%,#059669_15%,#0d9488_20%,#10b981_25%,#047857_30%)]
            [--mask:repeating-linear-gradient(100deg,var(--bg)_0%,var(--bg)_7%,transparent_10%,transparent_12%,var(--bg)_16%)]
            [background-image:var(--mask),var(--aurora)]
            [background-size:300%,200%]
            [background-position:50%_50%,50%_50%]
            [animation:aurora_60s_linear_infinite]
            filter blur-[10px]
            after:content-[''] after:absolute after:inset-0
            after:[background-image:var(--mask),var(--aurora)]
            after:[background-size:200%,100%]
            after:[animation:aurora_60s_linear_infinite]
            after:[background-attachment:fixed]
            after:mix-blend-difference
            [mask-image:radial-gradient(ellipse_at_60%_0%,black_30%,transparent_72%)]
          " />
        </div>
        {children}
      </body>
    </html>
  )
}
