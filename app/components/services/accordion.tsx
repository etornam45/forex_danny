"use client"

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content , index}) => {
  const [isOpen, setIsOpen] = useState(index === 0? true: false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h3 className="accordion-title" onClick={toggleAccordion}>
        {title}
      </h3>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};


export default AccordionItem