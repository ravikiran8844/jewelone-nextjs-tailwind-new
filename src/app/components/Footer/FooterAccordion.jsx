"use client";
import { useState } from "react";

export const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-2">
      <div
        className="balthazar text-lg uppercase font-medium text-black flex justify-between items-center lg:cursor-default cursor-pointer lg:pointer-events-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="md:hidden text-2xl">{isOpen ? "−" : "+"}</span>
      </div>

      <div className={`mt-3 ${isOpen ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  );
};
