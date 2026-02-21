"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/E5.jpg", name: "JAECOO E5", sticker: "/sticker.png", paragraph: "Built for a new generation...", buttons: [{ label: "Explore", link: "#" }, { label: "Book Now", link: "#" }, { label: "Details", link: "#" }] },
  { src: "/J6.png", name: "JAECOO J6", sticker: "/sticker.png", paragraph: "Delivers next-level electric performance...", buttons: [{ label: "Explore", link: "#" }, { label: "Book Now", link: "#" }, { label: "Details", link: "#" }] },
  { src: "/J7.jpg", name: "JAECOO J7 SHS", sticker: "/sticker.png", paragraph: "Redefines smart hybrid driving...", buttons: [{ label: "Explore", link: "#" }, { label: "Book Now", link: "#" }, { label: "Details", link: "#" }] },
  { src: "/J5.jpg", name: "JAECOO J5", sticker: "/sticker.png", paragraph: "Designed for the rhythm of modern life...", buttons: [{ label: "Explore", link: "#" }, { label: "Book Now", link: "#" }, { label: "Details", link: "#" }] },
];

export default function ImageRow() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [singleView, setSingleView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Mobile or tablet portrait -> single image view
      if (width < 768 || (width >= 768 && width < 1024 && height > width)) {
        setSingleView(true);
      } else {
        setSingleView(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const prevImage = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex">
      {singleView ? (
        <div className="relative flex-1">
          {/* Single image view */}
          <Image src={images[activeIndex].src} alt={images[activeIndex].name} fill priority className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/20" />

          {/* Info box */}
          <div className="absolute bottom-6 left-2 max-w-md text-white space-y-4 z-10">
            <div className="relative flex items-center gap-3">
              <h3 className="absolute left-4 top-0 text-2xl font-bold tracking-wide z-20">{images[activeIndex].name}</h3>
              <Image src={images[activeIndex].sticker} alt="Sticker" width={804} height={304} className="object-contain" />
            </div>

            <p className="text-sm text-gray-200 leading-relaxed">
              {expandedIndex === activeIndex ? images[activeIndex].paragraph : images[activeIndex].paragraph.slice(0, 100) + "..."}{" "}
              <button onClick={(e) => { e.stopPropagation(); toggleReadMore(activeIndex); }} className="text-white ml-1 text-sm hover:text-blue-200">
                {expandedIndex === activeIndex ? "Read Less" : "Read More"}
              </button>
            </p>

            <div className="flex gap-3 pt-1">
              {images[activeIndex].buttons.map((btn, i) => (
                <a key={i} href={btn.link} className="px-4 py-2 text-sm rounded-full bg-white text-black border border-white/40 hover:bg-[#13404A] hover:text-white transition">
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button onClick={prevImage} className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full">
            <ChevronLeft size={28} />
          </button>
          <button onClick={nextImage} className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full">
            <ChevronRight size={28} />
          </button>
        </div>
      ) : (
        // Desktop & tablet landscape layout
        images.map((img, index) => (
          <div key={index}   className={`
      relative flex-1 transition-all duration-500 ease-in-out 
      hover:flex-[6.5] cursor-pointer overflow-hidden group
      ${index !== 3 ? "mr-0.5" : ""}
    `}
  >
            <Image src={img.src} alt={img.name} fill priority className="object-cover   w-full h-full" />
            <div className="absolute inset-0 bg-black/20 opacity-0   group-hover:opacity-100 transition" />
            <div className="absolute bottom-6 left-2 max-w-md text-white space-y-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="relative flex items-center gap-3">
                <h3 className="absolute left-4 top-0 text-2xl font-bold tracking-wide z-20">{img.name}</h3>
                <Image src={img.sticker} alt="Sticker" width={804} height={304} className="object-contain" />
              </div>

              <p className="text-sm text-gray-200 leading-relaxed">
                {expandedIndex === index ? img.paragraph : img.paragraph.slice(0, 100) + "..."}{" "}
                <button onClick={() => toggleReadMore(index)} className="text-white ml-1 text-sm hover:text-blue-200">
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </p>

              <div className="flex gap-3 pt-1">
                {img.buttons.map((btn, i) => (
                  <a key={i} href={btn.link} className="px-4 py-2 text-sm rounded-full bg-white text-black border border-white/40 hover:bg-[#13404A] hover:text-white transition">
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
