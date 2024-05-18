import React from "react";
import { cn } from "../../../utils/misc";

interface NavMenuCardProps {
  title: string;
  className?: string;
  navSections: NavSectionProps[];
}

interface NavSectionProps {
  title?: string;
  navItems: NavItemProps[];
}

interface NavItemProps {
  id: string;
  text: string;
  hasSubMenu?: boolean;
}

const NavMenuCard: React.FC<NavMenuCardProps> = ({
  title,
  className,
  navSections,
}) => {
  return (
    <div
      className={cn(
        "min-h-[70vh] bg-brand-concrete p-[15px] leading-6",
        className,
      )}
    >
      <div className="text-[1.2rem] underline decoration-2 font-din-med">
        {title}
      </div>
      {navSections.map((navSec, index) => {
        return (
          <React.Fragment key={index}>
            {navSec?.title ?? <div className="mt-4">{navSec.title}</div>}
            {navSec?.navItems?.map((navItem, index) => {
              return (
                <React.Fragment key={index}>
                  <a
                    className={cn("mt-4 block", {
                      "bg-no-repeat bg-[right_1em_center] bg-[length:1rem] bg-arrow-right-thinner-gray":
                        navItem?.hasSubMenu,
                    })}
                  >
                    {navItem?.text}
                  </a>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavMenuCard;
