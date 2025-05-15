import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialIntro = () => {
  return (
    <section className="text-[#ffffff] bg-[#0a070b] text-center py-16 px-4 relative">
      <FaQuoteLeft className="text-[#00A3FF] text-4xl mb-4 mx-auto" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B39] mb-4">
        Discover Edmingle’s impact on businesses.
      </h2>
      <p className="text-gray-600 mb-6">
        Real Names. Real Stories. Real Results.
      </p>
      <button className="bg-[#1F64FF] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">
        Contact Sales
      </button>
    </section>
  );
};

export default TestimonialIntro;
