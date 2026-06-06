import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Oswald, Montserrat, Sora } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'SVMMERLOCO | Culture Over Trends',
  description: 'Premium streetwear built for men who move different, stand louder, and never follow the crowd. Indonesian luxury streetwear brand.',
  keywords: ['streetwear', 'fashion', 'Indonesia', 'urban', 'premium', 'SVMMERLOCO'],
  openGraph: {
    title: 'SVMMERLOCO | Culture Over Trends',
    description: 'Premium streetwear built for men who move different, stand louder, and never follow the crowd.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVMMERLOCO | Culture Over Trends',
    description: 'Premium streetwear built for men who move different, stand louder, and never follow the crowd.',
  },
}

export const viewport = {
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${oswald.variable} ${montserrat.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
