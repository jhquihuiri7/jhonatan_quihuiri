import { About, Contact, Footer, Header, Navbar, Projects, Tech, Work } from "@/components";
import MotionProvider from "@/components/MotionProvider";
import ScrollHalo from "@/components/ScrollHalo";

export default function Home() {
  return (
    <MotionProvider>
      <ScrollHalo />
      <Navbar />
      <main>
        <Header />
        <About />
        <Tech />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
