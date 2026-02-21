"use client";
import Image from "next/image";
import ImageRow from "../components/jaecoo_image";
import InfoSection from "../components/info";
import Footer from "../components/footer"
 import { useEffect, useRef, useState } from "react";
export default function Home() {
   const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const text = "ABOUT OMODA & JAECOO";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: .8 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
{/* HERO SECTION */}
<section className="relative h-screen w-full">
  {/* Desktop background */}
  <Image
    src="/background_image.png"
    alt="Background"
    fill
    priority
    className="hidden md:block object-cover"
  />

  {/* Mobile background */}
  <Image
    src="/mobilesizedbg.png"
    alt="Background"
    fill
    priority
    className="block md:hidden object-cover"
  />
</section>

       
      {/* Content ABOVE background */}
      <div className=" z-10 relative flex flex-col items-center justify-center h-screen w-full  text-center ">
        <ImageRow />
      </div>
       
    <div className="relative w-full h-screen">
  {/* Background Image */}
  <Image
    src="/SECOND_IMAGE.png"
    alt="Background"
    fill
    priority
    className="object-cover w-full h-full"
  />


   
<div className="relative w-full h-screen">
  {/* Desktop / Large Screens Background */}
  <div className="hidden sm:block w-full h-full">
    <Image
      src="/SECOND_IMAGE.png"
      alt="Background"
      fill
      priority
      className="object-cover w-full h-full"
    />
  </div>

  {/* Mobile Background */}
  <div className="block sm:hidden w-full h-full">
    <Image
      src="/second_imgresponsive.png"
      alt="Mobile Background"
      fill
      priority
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content ABOVE background */}
  <div className="absolute inset-0 z-10 flex flex-col sm:justify-center md:justify-center items-start px-6 sm:px-12 md:px-24 h-full space-y-8">
    
    {/* Heading */}
    <div className="absolute inset-x-0 top-32 z-10 flex justify-center px-6 sm:px-12 md:px-24">
      <h1   ref={ref} className="text-2xl sm:text-3xl md:text-4xl text-white text-center transition-all duration-500 ease-in-out hover:text-pink-500 hover:scale-110">    {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transform transition-all duration-700 ease-out
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 70}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
  
      </h1>
    </div>

    {/* Paragraph */}
    <div className="absolute inset-x-0 md:top-134 top-90 z-10 px-4 sm:px-12 md:px-28 flex justify-center">
      <p className="text-sm sm:text-base md:text-1xl tracking-widest text-white leading-relaxed max-h-4xl max-w-5xl md:mx-auto">
        OMODA & JAECOO stands at the intersection of innovation and lifestyle.With two distinct product lines - the futuristic OMODA and the 
        adventure-ready JAECOO - we go beyond the road through O-UNIVERSE,an ecosystem that brings together sustainability, entertainment, and personal expression. Together, we’re reimagining the future of mobility.
      </p>
    </div>

    {/* Discover Button */}
    <div className="absolute inset-x-0 top-145 md:top-160 z-10 flex justify-center px-6 sm:px-12 md:px-4">
      <button className="flex items-center gap-2 w-40 h-8 px-7 py-3 border-2 text-black border-black rounded-full bg-white font-semibold hover:bg-[#67B0C4] hover:border-purple-600 transition">
        Discover <span className="text-sm">{">>"}</span>
      </button>
    </div>
  </div>
</div>
</div>

 <div className="relative w-full ">
<InfoSection />
</div>
<div className="relative w-full ">
<Footer/>
</div>
    </main>

  );
}