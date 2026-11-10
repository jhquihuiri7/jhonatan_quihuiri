import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jhonatan Quihuiri | Backend Developer & Data Scientist",
  description:
    "Backend Developer and Data Scientist in the Galápagos Islands: GIS platforms at the Governing Council of Galápagos (CGREG), founder of Logiciel AppLab (Wego, Zero), and MSc in Data Science and Machine Learning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
