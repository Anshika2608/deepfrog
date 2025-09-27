import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] w-full flex items-start justify-center pt-36 sm:pt-52 overflow-hidden">
      <img
        src={hero}
        alt="AI Logistics"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          Revolutionize your <span className="text-orange-400">logistics</span>
          <div className="mt-2">with our smart AI-driven solutions</div>
        </motion.h1>

        <motion.h2
          className="mt-6 text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        >
          DeepFrog is a product development company specializing in logistics.{" "}
          We build intelligent platforms that drive{" "}
          <span className="text-orange-400 font-medium">innovation</span> and{" "}
          <span className="text-orange-400 font-medium">efficiency</span> for
          freight and supply chains.
        </motion.h2>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-500 flex items-center justify-center gap-2 
             text-sm sm:text-base text-white font-semibold rounded-xl sm:rounded-2xl shadow-md
             hover:bg-orange-600 transition cursor-pointer"
          >
            Start Automating <ArrowRight className="mt-0.5" />
          </button>

          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-white flex items-center justify-center gap-2
             text-sm sm:text-base text-white font-semibold rounded-xl sm:rounded-2xl shadow-md 
             hover:bg-white hover:text-black transition cursor-pointer"
          >
            <Play size={16} className="mt-0.5 sm:mt-1" /> Book a demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
