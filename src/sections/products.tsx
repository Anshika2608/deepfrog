import React from "react";

import { BarChart3, Truck, Share2, Check } from "lucide-react";
interface ProductItem {
    name: string;
    tagline: string;
    icon: React.ComponentType<any>;
    description: string;
    features: string[];

}
const Products: React.FC = () => {
    const products: ProductItem[] = [
        {
            name: "Frognosis — AI Data Intelligence",
            tagline: "Intelligent Metrics & Anomaly Detection",
            icon: BarChart3,
            description: "Unify metrics, detect anomalies, and ask questions in natural language across all your data sources — in real time.",
            features: [
                "Auto-generated dashboards",
                "Anomaly detection & forecasting",
                "Natural-language queries (NLQ)",
                "Connectors for DBs, APIs, files",
            ]
        },
        {
            name: "Pangents — Logistics Lead-to-Cash",
            tagline: "Automated Deal Closure & Invoicing",
            icon: Truck,
            description: "From lead identification and carrier vetting to deal closure, shipment tracking, and invoice finalization — with voice agents that negotiate and close with carriers to boost efficiency.",
            features: [
                "Lead identification & enrichment",
                "Carrier vetting & compliance",
                "AI voice agents for deal closure",
                "Shipment tracking & exceptions",
                "Invoice reconciliation & finalization",
                "Cut cycle time by 40% & reduce manual calls by 60%",
            ]
        },
        {
            name: "DecentAI — Decentralized AI Orchestration",
            tagline: "Secure & Auditable Workflow",
            icon: Share2,
            description: "Orchestrate secure AI workflows and agents with on-chain auditability and policy-based access controls.",
            features: [

                "Agent & workflow orchestration",
                "On-chain audit trail",
                "Policy-based access control",
                "Smart-contract automations",

            ]

        }

    ];



    return (

        <section className="w-full py-10 sm:py-32 bg-white flex justify-center" id="products">

            <div className="w-11/12 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 pb-3 relative inline-block">
                        Our Products & Solutions
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-600 rounded-full"></span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
                        Built for outcomes: accelerate decisions, automate workflows, and deploy trustworthy AI for logistics.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col"
                            >
                                <div className="flex items-start mb-6 border-b pb-5 h-50 sm:h-40">
                                    <div className="p-4 bg-orange-50 rounded-xl mr-4 flex-shrink-0 border border-orange-200">
                                        <Icon size={36} className="text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-2xl font-bold text-gray-900 leading-snug">{product.name}</h3>
                                        <p className="text-sm md:text-base font-medium text-orange-600 mt-1">{product.tagline}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                    {product.description}
                                </p>
                                <div className="w-full flex flex-wrap gap-x-4 gap-y-2">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm md:text-base text-gray-800">
                                            <Check size={14} className="text-orange-500 mr-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Products;