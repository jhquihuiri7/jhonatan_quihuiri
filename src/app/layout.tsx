import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jhonatan Quihuiri',
  description: 'Welcome to my developer portfolio! I am a passionate and dedicated professional with expertise in backend development, mobile app development, and data analysis. The world of finance, trading, programming, and data fuels my curiosity and drives me to excel in my academic and professional responsibilities.',

}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <>
          {children}
          <Toaster position="top-center"/>
        </>
      </body>
      </html>
  )
}
