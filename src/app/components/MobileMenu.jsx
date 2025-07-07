"use client";
"use client"; // if using in app directory (Next.js 13+)

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="xl:hidden p-2 focus:outline-none cursor-pointer"
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm !z-40"
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full min-h-dvh w-full max-w-md bg-white !z-50 border border-[#DBDBDB] shadow-sm transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex gap-6 items-center px-4 py-2 border-b border-gray-200 bg-[#F2EDE4] relative h-24">
          <button onClick={closeMenu} aria-label="Close Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              width={151}
              height={73}
              className="h-18"
              src="/images/logo.svg"
              alt="image"
            />
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 px-4 py-6 text-lg font-medium divide-y divide-gray-200">
      {/* Main Links */}
      {[
        { href: "/our-story", label: "Our Story" },
        { href: "/collections", label: "Collections" },
        { href: "/swarna-sakthi", label: "SS - Gold Scheme" },
        { href: "/careers", label: "Careers" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={closeMenu}
          className="!text-black hover:!text-[#964A26] uppercase !no-underline flex justify-between items-center pb-2"
        >
          <span>{label}</span>
          <BsChevronDown className="text-base" />
        </Link>
      ))}

      <div className="pb-2">
        {/* Our Brands */}
      <button
        onClick={() => setShowBrands(!showBrands)}
        className={`${showBrands ? "!text-[#964A26]" : ""} text-black hover:!text-[#964A26] !uppercase !no-underline !flex !justify-between !w-full items-center`}
      >
        <span>Our Brands</span>
        <BsChevronDown
          className={`transform transition-transform duration-300 ${
            showBrands ? "rotate-180" : ""
          }`}
        />
      </button>

      {showBrands && (
        <div className="pl-4 flex flex-col gap-2 pt-2">
          <Link
            href="/zilara"
            onClick={closeMenu}
            className="!text-black hover:!text-[#964A26] uppercase !no-underline pb-1"
          >
            Zilara
          </Link>
          <Link
            href="/florencia"
            onClick={closeMenu}
            className="!text-black hover:!text-[#964A26] uppercase !no-underline pb-1"
          >
            Florencia
          </Link>
        </div>
      )}
      </div>

      {/* Contact Us */}
      <Link
        href="/contact-us"
        onClick={closeMenu}
        className="!text-black hover:!text-[#964A26] uppercase !no-underline flex justify-between items-center py-2"
      >
        <span>Contact Us</span>
        <BsChevronDown className="text-base" />
      </Link>
    </nav>
      </div>
    </>
  );
};

export default MobileMenu;
