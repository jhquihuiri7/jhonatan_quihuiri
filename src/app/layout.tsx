import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jhonatan Quihuiri | Backend Developer & Data Scientist',
  description: 'Backend Developer and Data Scientist in the Galápagos Islands: GIS platforms at the Governing Council of Galápagos (CGREG), founder of Logiciel AppLab (Wego, Zero), and MSc in Data Science and Machine Learning.',

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
