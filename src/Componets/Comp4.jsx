import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img10 from "./Allimages/img10.png";

const WhiteLabelFeature = () => {
  const features = [
    "White-labelled website & mobile app",
    "Fully customizable platform to suit unique requirements",
    "Personalized course landing pages & payment gateways",
    "Zero revenue sharing",
  ];

  return (
    <section className="text-[#ffffff] bg-[#0a070b] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section with motion */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <img
            src={img10}
            alt="White Label Platform"
            className="rounded-xl shadow-lg max-w-full w-[500px]"
          />
        </motion.div>

        {/* Text Section with motion */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
        >
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
              MONETIZE YOUR EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build your own branded training academy with 100% White-Labelling
          </h2>
          <p className="mb-6 text-lg">
            Step into the spotlight with a white-labelled LMS tailored to your brand’s essence. Elevate learning with a unique training experience, personalized domain, and dedicated mobile app.
          </p>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium text-[#ffffff]">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelFeature;
