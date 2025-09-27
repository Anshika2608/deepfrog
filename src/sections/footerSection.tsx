import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import logo from "../assets/logo1.png";

import type { FooterLink } from "../interfaces/interfaces";
const FooterSection: React.FC = () => {
  const products: FooterLink[] = [
    { name: "Frognosis", href: "#" },
    { name: "Pangents", href: "#" },
    { name: "DecentAI", href: "#" },
  ];

  const company: FooterLink[] = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Documentation", href: "#" },
  ];

  const sectors: FooterLink[] = [
    { name: "Logistics", href: "#" },
    { name: "Supply Chain", href: "#" },
    { name: "Freight & Shipping", href: "#" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white flex justify-center">
      <div className="w-11/12 max-w-7xl py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
          <div>
            <div className=" mb-8">
             <img src={logo} alt="" className="h-10 "/>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A product development company specializing in logistics. We build
              intelligent solutions that drive innovation and efficiency.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Sectors</h4>
            <ul className="space-y-3">
              {sectors.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DeepFrog. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
