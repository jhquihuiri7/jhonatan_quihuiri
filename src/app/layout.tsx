import './globals.css'
import { Inter } from 'next/font/google'
import { Helmet } from 'react-helmet';

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
          <meta
              name="description"
              content="Welcome to my developer portfolio! I am a passionate and dedicated professional with expertise in backend development, mobile app development, and data analysis. The world of finance, trading, programming, and data fuels my curiosity and drives me to excel in my academic and professional responsibilities."
          />
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}
