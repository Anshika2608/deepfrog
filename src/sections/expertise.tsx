import React from "react";
import { Layers, Dna, Cloud, Bot } from "lucide-react";

interface ExpertiseItem {
    title: string;
    text: string;
    icon: React.ComponentType<any>;
    iconBgColor: string;
    iconColor: string;
}

const Expertise: React.FC = () => {
    const expertise: ExpertiseItem[] = [
        {
            title: "Supply Chain Optimization",
            text: "End-to-end optimization across planning, procurement, logistics, and fulfillment using data-driven automation and predictive insights.",
            icon: Layers,
            iconBgColor: "bg-orange-100",
            iconColor: "text-orange-600",
        },
        {
            title: "Industry Specific LLMs",
            text: "Domain-tuned LLMs for logistics that deliver accurate, compliant, and context-aware responses.",
            icon: Dna,
            iconBgColor: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            title: "Cloud Native Platform",
            text: "Scalable, resilient, and secure by design with autoscaling, high availability, and multi-tenant controls.",
            icon: Cloud,
            iconBgColor: "bg-gray-200",
            iconColor: "text-gray-700",
        },
        {
            title: "AI Agents Eco System",
            text: "Composable AI agents that coordinate tasks, integrate with your tools and data, and automate complex workflows safely.",
            icon: Bot,
            iconBgColor: "bg-orange-100",
            iconColor: "text-orange-600",
        },
    ];

    return (
        <section className="w-full py-20 bg-gray-100 flex justify-center">
            <div className="w-11/12 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                        Logistics Expertise
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-600 rounded-full"></span>

                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
                        Specialized solutions for logistics with deep domain knowledge across freight, carriers, and operations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {expertise.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-2xl flex items-start"
                            >
                                <div className={`p-5 rounded-lg ${item.iconBgColor} mr-6 flex-shrink-0 flex items-center justify-center`}>
                                    <Icon size={36} className={item.iconColor} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
