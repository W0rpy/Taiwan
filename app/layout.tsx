import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  weight: ['400','500','700'],
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: 'Taiwan',
  description: 'Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6D1K7G0674" />
      <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6D1K7G0674');
          `}
      </Script>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
