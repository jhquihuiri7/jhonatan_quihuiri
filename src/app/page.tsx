import {Navbar, Experience, Hero, About, Works, Contact, Tech} from '@/components';


export default function Home() {
  return (
    <div>
      <div className="relative z-0 bg-[#010e21]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
        </div>
        <About></About>
        <Works></Works>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </div>
    );
}