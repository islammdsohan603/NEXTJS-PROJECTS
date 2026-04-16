import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const icons = [
  { icon: <FaFacebook /> },
  { icon: <FaSquareTwitter /> },
  { icon: <FaLinkedin /> },
];

const footer = [
  { title: 'Privacy Policy' },
  { title: 'Terms of Service' },
  { title: 'Cookies' },
];

const FooterPages = () => {
  return (
    <div className="bg-linear-to-br from-green-900 to-green-800 text-white py-12">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide">
          KeenKeeper
        </h1>

        {/* Description */}
        <p className="text-center text-sm md:text-base text-green-100 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center py-8 border-b border-green-700  ">
          <div className="flex gap-5">
            {icons.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer text-white text-xl rounded-full hover:bg-white hover:text-green-800 hover:scale-110 transition-all duration-300 shadow-md"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          {/* Copyright */}
          <h1 className="text-sm text-green-200">
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
          </h1>

          {/* Links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {footer.map((foot, index) => (
              <span
                key={index}
                className="text-xs text-green-300 hover:text-white cursor-pointer transition"
              >
                {foot.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPages;
