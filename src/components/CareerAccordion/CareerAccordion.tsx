import React, { useState } from "react";
import { cn } from "../../utils/misc";

type Option = {
  text: string;
  href: string;
};

const options: Option[] = [
  {
    text: "Career Areas",
    href: "#",
  },
  {
    text: "Locations",
    href: "#",
  },
  {
    text: "Candidate Paths",
    href: "#",
  },
  {
    text: "Returning Applicants",
    href: "#",
  },
  {
    text: "Culture",
    href: "#",
  },
  {
    text: "#LifeatLM Blog",
    href: "#",
  },
];

const CareerAccordion: React.FC<any> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionToggleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "w-full max-w-[1600px] mx-auto overflow-hidden bg-brand-concrete relative flex flex-wrap py-4 font-din transition-all duration-500",
        {
          // "h-[68px]": !isExpanded,
        },
      )}
    >
      <button
        onClick={handleAccordionToggleButtonClick}
        className={cn(
          "block lg:hidden absolute w-full h-[68px] z-20 bg-no-repeat bg-[right_15px_center] bg-[length:1rem] top-0 left-0",
          {
            "bg-minus-solid": isExpanded,
          },
          {
            "bg-plus-solid": !isExpanded,
          },
        )}
      ></button>
      <div className="px-[15px] lg:pl-12 w-full lg:basis-3/12 lg:border-r-brand-pastel-grey lg:border-r">
        <h4 className="pt-1 mb-2 text-xl font-medium leading-6 lg:leading-9">
          Lockheed Martin Careers
        </h4>
      </div>
      <div
        className={cn(
          "basis-full max-w-full w-full px-[15px] lg:px-12 lg:basis-9/12",
          {
            // hidden: !isExpanded,
          },
        )}
      >
        <div className="flex flex-col lg:flex-row justify-end mt-4 lg:mt-1">
          {options.map((option, index) => {
            return (
              <a
                className="px-2 lg:pt-2 text-base underline"
                href={option?.href ? option?.href : "#"}
              >
                {option?.text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerAccordion;
