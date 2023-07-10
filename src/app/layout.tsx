import './globals.css'
import { Inter } from 'next/font/google'
import {Head} from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jhonatan Quihuiri',
  description: '',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
