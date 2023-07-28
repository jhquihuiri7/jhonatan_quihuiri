'use client'
import {Navbar, Experience, About, Contact, Tech, ParticlesBackground,Header, Footer} from '@/components';
import {useEffect} from 'react';
export default function Home() {


    useEffect(()=>{
        const threeScript = document.createElement("script")
        threeScript.setAttribute("id","threeScript")
        threeScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/three.js/0.154.0/three.min.js")
        document.getElementsByTagName("head")
        console.log(document.getElementsByTagName("head")[0].appendChild(threeScript))
        return () => {
            if (threeScript){
                threeScript.remove()
            }
        }

    },[])
  return (

      <div className="relative z-0 bg-[#131a43]">
        <ParticlesBackground></ParticlesBackground>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
        </div>
        <Header></Header>
        <About></About>
        <Tech></Tech>
        <Experience></Experience>
        <Contact></Contact>
        <Footer></Footer>
      </div>

    );
}