import React from "react";
import { Lightbulb, Shield, TrendingUp as GrowthIcon, Award } from "lucide-react";

interface ValueItem {
  title: string;
  text: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  bgColor: string;   
}

const CoreValuesSection: React.FC = () => {
  const coreValues: ValueItem[] = [
    { 
      title: "Innovation",
      text: "Pushing the boundaries of technology to create cutting-edge solutions that transform industries.", 
      icon: Lightbulb,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    { 
      title: "Security",
      text: "Bank-grade security and compliance standards ensuring your data and operations are always protected.", 
      icon: Shield,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
    },
    { 
      title: "Growth",
      text: "Partnering with businesses to scale efficiently and achieve sustainable growth through intelligent automation.", 
      icon: GrowthIcon,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
    },
    { 
      title: "Excellence",
      text: "Delivering exceptional quality and performance in every solution we build and every client we serve.", 
      icon: Award,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section className="w-full py-28 bg-gray-100 flex justify-center">
      <div className="w-11/12 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block">
            Our Core Values
            <span className="absolute bottom-[-4px] left-0 w-20 h-1 mt-5 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our core values drive everything we do. From innovative solutions to secure, reliable services, these principles guide our mission to deliver excellence across all industries and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-md flex flex-col transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${item.bgColor} mr-4 shadow-md flex items-center justify-center animate-subtle-bounce`}>
                    <Icon size={28} className={item.iconColor} strokeWidth={2.5} />
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h4>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
