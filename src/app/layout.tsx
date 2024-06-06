import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AOSInit } from './components/AOS/aosAnimation'

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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NR2R7HLH');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TY93XBCPZY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TY93XBCPZY');
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
      <body className={inter.className}>{children}</body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NR2R7HLH"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </html>
  )
}
