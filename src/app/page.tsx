import {Navbar, Experience, Hero, About, Works, Contact, Tech} from '@/components';


export default function Home() {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
        </div>
        <About></About>
        <Experience></Experience>
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
    );
}