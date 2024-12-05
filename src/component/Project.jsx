import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLast, ChevronRight } from "lucide-react";
import RS from "../assets/RS.png";
import RR from "../assets/RR.png";
import R from "../assets/R.png";
import OIPx from "../assets/OIPx.png";
import OIPp from "../assets/OIPp.png";
import OIP from "../assets/OIP.png";

const projects = [
  {
    id: 1,
    image: RS,
    alt: "Construstion worker on site",
  },
  {
    id: 2,
    image: RR,
    alt: "Construstion worker on site",
  },
  {
    id: 3,
    image: R,
    alt: "Construstion worker on site",
  },
  {
    id: 4,
    image: OIPx,
    alt: "Construstion worker on site",
  },
  {
    id: 5,
    image: OIPp,
    alt: "Construstion worker on site",
  },
  {
    id: 6,
    image: OIP,
    alt: "Construstion worker on site",
  },
];

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              What We Have Done
            </p>
          </div>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We Are Experts At What We Do And We Do It Fast And Better
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="object-cover w-ful h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={showPrevious}
            disabled={isAnimating}
          >
            <ChevronLast className="h-6 w-6 text-gray-600" />
            <span className="sr-only">Previous Slide</span>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={showNext}
            disabled={isAnimating}>
            <ChevronRight className="h-6 w-6 text-gray-600" />
            <span className="sr-only">Next Slide</span>
          </button>
        </div>
      </div>
    </section>
  );
}
