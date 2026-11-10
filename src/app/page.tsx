import { About, Contact, Footer, Header, Navbar, Projects, Tech, Work } from "@/components";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
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
