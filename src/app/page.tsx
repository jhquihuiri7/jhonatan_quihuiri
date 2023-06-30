import {Navbar, Experience, Hero} from '@/components';


export default function Home() {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <Experience></Experience>
      </div>
    </div>
    );
}