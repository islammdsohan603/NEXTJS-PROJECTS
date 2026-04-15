'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Timeline', path: '/timeline', icon: <IoTimeOutline /> },
  { name: 'Stats', path: '/stats', icon: <TfiStatsUp /> },
];

const MyNavLinks = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition relative z-50"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => {
          const isActive = pathname === link.path;

          return (
            <Link
              href={link.path}
              key={link.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200
              ${
                isActive
                  ? 'bg-green-800 text-white shadow'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          ></div>

          {/* Menu Panel */}
          <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3 z-50 md:hidden animate-in fade-in zoom-in">
            {navLinks.map(link => {
              const isActive = pathname === link.path;

              return (
                <Link
                  href={link.path}
                  key={link.name}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    isActive
                      ? 'bg-green-800 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MyNavLinks;
