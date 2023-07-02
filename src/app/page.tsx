import {Navbar, Experience, Hero, About, Works, Contact} from '@/components';


export default function Home() {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
    );
}