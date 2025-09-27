import React, { useState, useEffect, useRef } from "react";
import { Package, Send } from "lucide-react";
import type { FormEvent } from "react";
import type { CtaSectionProps } from "../interfaces/interfaces";


const CtaSection: React.FC<CtaSectionProps> = ({
  contactEmail = "info@deepfrog.com",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-24 bg-gray-50 flex justify-center">
      <div
        className={`w-11/12 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-10 lg:p-16 bg-white rounded-3xl shadow-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Let&apos;s Connect!
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
            Reach out to our team to discuss how AI can transform your supply
            chain operations. We&apos;d love to hear from you.
          </p>
          <div className="p-6 lg:p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md border border-orange-100 hover:shadow-xl transition-all duration-300 max-w-sm">
            <div className="p-4 bg-orange-100 rounded-xl w-fit mb-4 shadow-inner">
              <Package size={36} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-orange-600">{contactEmail}</h3>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
              Email Address
            </p>
            <div className="w-full h-1 bg-orange-500 rounded-full mt-5"></div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 bg-gray-50 rounded-2xl p-6 lg:p-10 shadow-inner"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Book a Demo Session
          </h3>
          <input
            type="email"
            placeholder="Your Business Email*"
            className={`w-full p-4 rounded-lg text-gray-900 border-2 transition-all duration-300 focus:outline-none placeholder-gray-500 ${
              isEmailFocused
                ? "border-orange-500 ring-2 ring-orange-100"
                : "border-gray-300"
            }`}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            required
          />
          <label className="flex items-start text-sm text-gray-600 leading-snug">
            <input
              type="checkbox"
              className="mt-1 mr-3 h-4 w-4 rounded text-orange-600 border-gray-300 focus:ring-orange-500"
              required
            />
            <span>
              By submitting, you consent to being contacted about our products
              per our{" "}
              <a
                href="#"
                className="font-semibold underline text-orange-600 hover:text-orange-500"
              >
                Privacy Policy & Terms
              </a>
              *.
            </span>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center mt-4 px-6 py-4 bg-orange-600 text-white text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            <Send size={20} className="mr-2 cursor-pointer" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;
