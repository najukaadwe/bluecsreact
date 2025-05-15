import React from 'react';
import brandlogo from "../../assets/brandlogo.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="text-[#ffffff] bg-[#0a070b] py-16 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm text-[#ffffff]">
        {/* Brand & Contact Info */}
        <div className="space-y-4 ">
          <img src={brandlogo} alt="Edmingle Logo" className="h-8" /> {/* Replace with your logo path */}
          <div>
            <strong>Call Us</strong>
            <p className="">+91 97897 80342</p>
          </div>
          <div>
            <strong>E-mail Us</strong>
            <p className="">sales@edmingle.com</p>
          </div>
          <div>
            <strong>Office</strong>
            <p className="">
              Second Floor, SRIT House 113, Block B,<br />
              1B, ITPL Main Rd, Kundalahalli,<br />
              Brookefield, Bengaluru, Karnataka 560037
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div className='text-[#ffffff]'>
          <h4 className="font-semibold mb-2 ">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Comparison</a></li>
            <li><a href="#" className="hover:text-blue-600">Case Study</a></li>
          </ul>
        </div>

        {/* Product Links */}
        <div className='text-[#ffffff]'>
          <h4 className="font-semibold mb-2 ">Product</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600">Features</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

        {/* Comparison Links */}
        <div className='text-[#ffffff]'>
          <h4 className="font-semibold mb-2 ">Comparison</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Graphy</a></li>
            <li><a href="#" className="hover:text-blue-600">Learnyst</a></li>
          </ul>
        </div>

        {/* Connect & Legal */}
        <div className='text-[#ffffff]'>
          <h4 className="font-semibold mb-2 ">Connect</h4>
          <ul className="space-y-1 mb-4">
            <li><a href="#" className="hover:text-blue-600">Login</a></li>
            <li><a href="#" className="hover:text-blue-600">Book a demo</a></li>
            <li><a href="#" className="hover:text-blue-600">Start Free trial</a></li>
          </ul>
          <h4 className="font-semibold mb-2 ">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Data Processing Agreement</a></li>
            <li><a href="#" className="hover:text-blue-600">GDPR Representation</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
