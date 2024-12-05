import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-gray-900 text-white rounded-full px-6 py-2 text-lg font-medium hover:bg-gray-800 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ["Home", "About us", "Services", "Contact us"];

  return (
    <header className="w-full border-b bg-white shadow-sm fixed z-50 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-10 items-center justify-between ">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Proconnect
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace("", "-")}`}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
            <Button>Get started</Button>
          </div>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-10 bg-gray-800 bg-opacity-80 h-80 ${
          isMenuOpen ? "block z-50" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-10 ">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace("", "-")}`}
              className="block px-3 py-3 text-base font-medium text-white hover:text-black hover:bg-gray-50 rounded-md transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="mt-4 px-3 ">
            <Button className="w-full justify-center">Get started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
