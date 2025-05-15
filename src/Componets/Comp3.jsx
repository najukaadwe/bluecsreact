import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img9 from "./Allimages/img9.png";

const FeatureHighlight = () => {
  const features = [
    "Multiple content formats supported",
    "Deep Zoom integration for live sessions",
    "Multiple batch & branch management",
    "Custom digital certificates",
  ];

  return (
    <section className="py-20 text-[#ffffff] bg-[#0a070b]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
              KNOWLEDGE DELIVERY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build & deliver courses with ease all through a unified platform.
          </h2>
          <p className="mb-6 text-lg">
            Host well-structured & engaging courses for your learners. Enhance learner performance & watch your business grow multifold.
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

        {/* Image Section with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={img9}
            alt="Knowledge Delivery Demo"
            className="rounded-xl shadow-lg max-w-full w-[500px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureHighlight;
