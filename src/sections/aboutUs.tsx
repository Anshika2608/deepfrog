import React from "react";
import { Zap, GitBranch, Shield, Briefcase } from "lucide-react";

interface WhatWeDoItem {
    text: string;
    icon: React.ElementType;
}

const whatWeDoItems: WhatWeDoItem[] = [
    { text: "Build Automations using **agentic AI**", icon: Zap },
    { text: "R&D in **Neuro Symbolic AI**", icon: GitBranch },
    { text: "Bring Security & Immutability using **blockchain layer**", icon: Shield },
    { text: "Provide **industry-specific consulting**", icon: Briefcase },
];

const AboutUs: React.FC = () => {
    return (
        <section className="w-full py-24 bg-white flex justify-center" id="about">
            <div className="w-11/12 max-w-6xl">

                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 pb-3 relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-600 rounded-full"></span>
                </h2>

                <p className="text-xl text-gray-600 mb-16 max-w-4xl border-l-4 border-amber-600 pl-4 italic">
                    We are a product development company specializing in logistics. Our mission is to transform freight and supply chains through intelligent, AI-powered solutions that drive <strong>innovation and efficiency</strong>.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            <span className="font-extrabold text-amber-600 text-xl block mb-2">Revolutionizing Industries through Intelligence</span>
                            Founded with a vision to bridge the gap between complex business challenges and innovative technological solutions, DeepFrog has emerged as a trusted partner for organizations seeking to modernize their operations.
                            <div className="mt-2">
                                Our team of experts combines deep industry knowledge with cutting-edge technology to deliver solutions that not only solve immediate problems but also create long-term competitive advantages.
                                From shippers optimizing planning to carriers improving utilization and on-time performance, we're proud to be part of our clients' success stories.
                            </div>

                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
                        <h3 className="text-3xl font-bold text-amber-600 mb-6">What We Do</h3>
                        <ul className="space-y-6 text-gray-700">
                            {whatWeDoItems.map((item, index) => {
                                const Icon = item.icon;
                                const textContent = item.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                return (
                                    <li key={index} className="flex items-start text-lg">
                                        <Icon size={24} className="text-amber-600 mr-4 mt-1 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: textContent }} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
