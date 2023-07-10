import {Navbar, Experience, Hero, About, Contact, Tech} from '@/components';


export default function Home() {

  return (
      <div>
      <div className="relative z-0 bg-[#010e21]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
        </div>
        <About></About>
        <Tech></Tech>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </div>
    );
}