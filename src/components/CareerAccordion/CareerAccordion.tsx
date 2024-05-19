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
        "w-full overflow-hidden bg-brand-concrete relative flex flex-wrap py-4 font-din transition-all duration-500",
        {
          "h-[68px]": !isExpanded,
        },
      )}
    >
      <button
        onClick={handleAccordionToggleButtonClick}
        className={cn(
          "block absolute w-full h-[68px] z-20 bg-plus-solid bg-no-repeat bg-[right_15px_center] bg-[length:1rem] top-0 left-0",
          {
            "bg-minus-solid": isExpanded,
          },
        )}
      ></button>
      <div className="px-[15px] w-full">
        <h4 className="pt-1 mb-2 text-xl font-medium">
          Lockheed Martin Careers
        </h4>
      </div>
      <div
        className={cn("basis-full max-w-full w-full px-[15px]", {
          // hidden: !isExpanded,
        })}
      >
        <div className="flex flex-col lg:flex-row justify-end mt-4">
          {options.map((option, index) => {
            return (
              <a
                className="px-2 text-base"
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
