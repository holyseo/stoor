"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface AccordionProps {
  title: string; // Product title displayed on the accordion
  detail: string | { rate: Number; count?: Number }; //Product rate and review count displayed on the accordion
}

const Accordion = ({ title, detail }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  //Function to tollge accordion open/close state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className="flex justify-between p-3 rounded-md cursor-pointer hover:bg-slate-200"
        onClick={toggleAccordion}
      >
        <div> {title}</div>
        <div className={`${isOpen ? "open" : ""}`}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {isOpen && (
        <div className="p-3 font-normal text-sm bg-[#e4e4e454]">
          <p>
            {typeof detail === "string" ? detail : `Rating: ${detail.rate}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
