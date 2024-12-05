import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Io from "../assets/Io.png";
import Jk from "../assets/Jk.png";
import Fam from "../assets/Fam.png";
import Tt from "../assets/Tt.png";
import PP from "../assets/PP.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "John Bosco",
      role: "CEO ipsum",
      image: Io,
    },
    {
      quote:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Sam Kerr",
      role: "MD",
      image: PP,
    },
    {
      quote:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Paul Family",
      role: "Family",
      image: Fam,
    },
    {
      quote:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Emma Jas",
      role: "Accountant",
      image: Tt,
    },
    {
      quote:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Blessing Johnson",
      role: "HR OGR",
      image: Jk,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4flex flex-col items-center justify-center ">
      <div className="max-w-3xl w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Testimonials
          </h2>
          <p className="text-rose-500">What Our Clients Says</p>
        </div>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full flex flex-col items-center"
            >
              <div>
                <img
                  src={testimonials[currentIndex].image}
                  alt=""
                  style={{
                    width: "12rem",
                    height: "12rem",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    filter: "sepia(1)",
                  }}
                />
              </div>
              <blockquote className="text-slate-600 mb-4 text-center text-lg max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-medium text-slate-800 text-xl">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-slate-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-1/2 transition-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition -colors duration-300 ${currentIndex === index ? 'bg-rose-500' : 'bg-slate-300'}`} aria-label={`Go to testimonial ${index + 1}`}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
