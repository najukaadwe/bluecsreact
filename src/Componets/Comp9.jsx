import React from 'react';
import img14 from "./Allimages/img14.png";
import img5 from "./Allimages/img5.png";


const TestimonialISKCON = () => {
  return (
    <section className="text-[#ffffff] bg-[#0a070b] py-12 px-4">
      <div className="max-w-7xl mx-auto  rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow">
        {/* Left: Testimonial */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <img src={img5} alt="ISKCON Logo" className="w-20 mb-6" />
          
          <div className="flex gap-10 mb-6">
            <div>
              <p className="text-2xl font-semibold ">16K+</p>
              <p className="text-gray-600 text-sm">Total Learners</p>
            </div>
            <div>
              <p className="text-2xl font-semibold ">288+</p>
              <p className="text-gray-600 text-sm">Courses</p>
            </div>
            <div>
              <p className="text-2xl font-semibold ">4K+</p>
              <p className="text-gray-600 text-sm">Live Classes</p>
            </div>
          </div>

          <p className="text-gray-800 text-lg italic mb-4">
            “We found Edmingle quick, efficient, easy to use and time & cost effective. Highly recommended.”
          </p>

          <div>
            <p className="font-semibold ">Brajsundar Das Prabhu</p>
            <p className="text-gray-500">Vice Chairman, ISKCON Bhagwata</p>
          </div>
        </div>

        {/* Right: Screenshot */}
        <div className="lg:w-1/2 relative  p-4 flex items-center justify-center">
          <img
            src={img14}
            alt="ISKCON Portal Screenshot"
            className="rounded-2xl shadow-xl w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialISKCON;
