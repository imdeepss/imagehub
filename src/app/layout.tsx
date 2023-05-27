import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/common/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ImageHub',
  description: '- Discover a World of Captivating Wallpapers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
