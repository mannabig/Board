import React from "react";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Proconnect</h3>
            <p className="text-sm text-gry-600 max-w-xs">
              Lorem ipsum dolor sit amet consectetur. Egestas pellentesque eu
              pellentesque tortor ligula, Ullamcorper fermentum tincidunt
              accumsan laacus nulla. Adipiscing at egestas massa egestas
              egastas. Libero in risus libero potenti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/:id" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/Works" className="text-gray-600 hover:text-gray-900">
                  Works
                </a>
              </li>
              <li>
                <a href="/:id" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/Project"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Project
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Support
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Delivery Details
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Condition
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Free eBook
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Development Tutorial
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  How to - Blog
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
