import React from "react";
import logo from "../assets/logo1.png";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    return (
        <motion.nav
            className="w-full  top-0 left-0 flex items-center justify-between px-6 py-4 bg-black/70 z-20 fixed"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex space-x-6 gap-5">
                <a href="#about" className="text-white hover:text-orange-500 font-medium">About</a>
                <a href="#products" className="text-white hover:text-orange-500 font-medium">Products</a>
                <a href="#sector" className="text-white hover:text-orange-500 font-medium">Sector</a>
            </div>

            <div className="flex space-x-4">
                <button className="text-white font-medium hover:text-orange-500 cursor-pointer">Sign In</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer">
                    Get Started
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
