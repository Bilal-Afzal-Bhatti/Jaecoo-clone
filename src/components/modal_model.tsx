"use client";

import { useState } from "react";
import Image from "next/image";

export default function ModalModel() {
  const tabs = ["All Ranges", "Omoda", "Jaecoo"];

  const cars = [
    { name: "Omoda C5", brand: "Omoda", image: "/cars/Lunar-White.png" },
    { name: "Omoda E5", brand: "Omoda", image: "/cars/jaecoo-menu.png" },
    { name: "Jaecoo J7", brand: "Jaecoo", image: "/cars/jaecooJ5-model.png" },
    { name: "Jaecoo J8", brand: "Jaecoo", image: "/cars/jaecooJ7-model.png" },
  ];

  const [activeTab, setActiveTab] = useState("All Ranges");

  const filteredCars =
    activeTab === "All Ranges"
      ? cars
      : cars.filter((car) => car.brand === activeTab);

  return (
    <div className="fixed top-16 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 py-6">
        {/* Left Tabs */}
        <div className="md:w-1/4 border-r border-purple-200 p-4 md:mt-2">
          <ul className="space-y-4">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative inline-block cursor-pointer font-semibold font-sans text-2xl md:ml-20
    ${activeTab === tab ? "text-black" : "text-gray-600"}
  `}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-1 w-full h-[1.66px] bg-black" />
                )}
              </li>

            ))}
          </ul>
        </div>

    
  
{/* Right Cars */}
<div className="md:w-3/4 p-4 cursor-pointer">
  {/* Fixed height scrollable container */}
  <div
    className="
      grid grid-cols-1 sm:grid-cols-2
      gap-4
      h-82.5       /* FIXED height */
      overflow-y-auto /* scroll appears when content exceeds height */
      pr-2
      simple-scroll
      no-scroll-arrows
          bg-[#FFF0808] 
    "
  >
    {filteredCars.map((car, i) => (
      <div key={i} className="text-center">
        {/* Image */}
        <div className="relative h-52 w-full mb-4">
          <div className="relative h-full w-full p-4 rounded-lg overflow-hidden hover:bg-[#1F6779] hover:bg-opacity-10 transition-all duration-300">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-sm tracking-widest font-medium text-black gap-2">
          {car.name.toUpperCase()}
        </h3>

        {/* Explore Button */}
        <button className="relative mt-2 mb-6 text-[#1F6779] font-medium group cursor-pointer">
          Explore more
          <span className="absolute left-1/2 -bottom-1 w-0 h-[1.66px] bg-[#1F6779] transition-all duration-300 group-hover:w-full -translate-x-1/2" />
        </button>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
} 