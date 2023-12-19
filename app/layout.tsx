import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '1us | Software for Everyone',
  description: 'A project to explore open source software (and hardware) as well as building a ecosystem. We believe software should be freely accessible and user customisable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
