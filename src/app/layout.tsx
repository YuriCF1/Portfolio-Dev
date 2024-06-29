import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AOSInit } from './components/AOS/aosAnimation'
import CookieConsent from './components/CookiesConsent/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuri Cruz - Portfolio',
  description: 'Portfolio to show projects from Yuri Cruz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <AOSInit />
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TY93XBCPZY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TY93XBCPZY', { 'anonymize_ip': true });
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });
              `,
          }}
        />
        {/* End Google Analytics Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
        <link rel="icon" type="imagem/jpeg" href="/img/logoPequeno.png" />
        <title>Yuri Cruz - Portfolio</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
