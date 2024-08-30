"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-medium">
          <Link href="#hero" className="text-green-500">
            Bamusarq Recreational Centre
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            className=" focus:outline-none text-green-700 hover:text-green-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4 text-lg">
          <Link href="/" className="hover:bg-green-500 rounded-xl p-2 text-xl">
            Home
          </Link>
          <Link href="/about" className="hover:bg-green-500 rounded-xl p-2 text-xl">
            About
          </Link>
          <Link href="/services" className="hover:bg-green-500 rounded-xl p-2 text-xl">
            Services
          </Link>
          <Link href="/gallery" className="hover:bg-green-500 rounded-xl p-2 text-xl">
            Gallery
          </Link>
         
        </nav>
      </div>
      {isMobileMenuOpen && (
        <nav className="bg-gray-900 animate-open-menu">
          <ul className="flex flex-col space-y-4 text-center p-4">
            <li>
              <Link href="/" className="hover:bg-green-500 rounded-xl p-2 font-bold text-2xl" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:bg-green-500 rounded-xl p-2 font-bold text-2xl" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:bg-green-500 rounded-xl p-2 font-bold text-2xl" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:bg-green-500 rounded-xl p-2 font-bold text-2xl" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:bg-green-500 rounded-xl p-2 font-bold text-2xl" onClick={closeMobileMenu}>
                Legal
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
