import React, { useEffect, useState } from "react";
import { cn } from "../../../utils/misc";

interface NavMenuCardProps {
  id: string;
  title: string;
  className?: string;
  navSections: NavSectionProps[];
  onChange?: (navItemsState: NavItemState[]) => void;
  onMenuCloseButtonClicked?: () => void;
  onBackButtonClicked?: () => void;
}

interface NavSectionProps {
  title?: string;
  navItems: NavItemProps[];
}

interface NavItemProps {
  id: string;
  text: string;
  href?: string;
  hasSubMenu?: boolean;
  isExpanded?: boolean;
}

type NavItemState = {
  id: string;
  isExpanded: boolean;
};

const NavMenuCard: React.FC<NavMenuCardProps> = ({
  title,
  className,
  navSections,
  onChange,
  onMenuCloseButtonClicked,
  onBackButtonClicked,
}) => {
  const [navItemsState, setNavItemsState] = useState<NavItemState[]>(
    ((): NavItemState[] => {
      const navItemsState: NavItemState[] = [];
      for (let i = 0; i < navSections.length; i++) {
        for (let j = 0; j < navSections[i].navItems.length; j++) {
          const item = navSections[i].navItems[j];
          if (item.hasSubMenu) {
            navItemsState.push({
              id: item.id,
              isExpanded: item.isExpanded as boolean,
            });
          }
        }
      }
      return navItemsState;
    })(),
  );

  useEffect(() => {
    if (onChange) {
      onChange(navItemsState);
    }
  }, [navItemsState]);

  const handleNavItemClick = (id: string) => {
    setNavItemsState((prev) => {
      const newState = [...prev];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === id) {
          newState[i].isExpanded = !newState[i].isExpanded;
          continue;
        }
        newState[i].isExpanded = false;
      }
      return newState;
    });
  };

  return (
    <div
      className={cn(
        "min-h-[100vh] lg:min-h-[70vh] top-0 max-w-[75%] bg-brand-concrete p-[15px] leading-6 absolute lg:relative",
        className,
      )}
    >
      <div className="flex justify-between mb-8 lg:hidden">
        <a
          onClick={onBackButtonClicked ?? onBackButtonClicked}
          className="uppercase bg-arrow-left-thinner-black bg-no-repeat bg-[left_0_center] bg-[length:1rem] pl-6 underline my-4"
        >
          Back
        </a>
        <button
          onClick={onMenuCloseButtonClicked ?? onMenuCloseButtonClicked}
          className="bg-custom-close bg-no-repeat bg-center bg-[length:24px_56px] h-[56px] w-6"
        />
      </div>
      <div className="text-[1.2rem] underline decoration-2 font-din-med">
        {title}
      </div>
      {navSections.map((navSec, index) => {
        return (
          <React.Fragment key={index}>
            {index > 0 ? (
              <div className="w-full border-t-brand-pastel-grey border-t mt-4"></div>
            ) : (
              <></>
            )}
            {navSec?.title ? (
              <div className="mt-4 font-din-med uppercase">{navSec.title}</div>
            ) : (
              <></>
            )}
            {navSec?.navItems?.map((navItem, index) => {
              const isExpanded = navItemsState.find(
                (item) => item.id === navItem.id,
              )?.isExpanded as boolean;
              return (
                <React.Fragment key={index}>
                  <a
                    href={navItem?.href ? navItem.href : "#"}
                    aria-expanded={isExpanded}
                    className={cn(
                      "mt-4 block",
                      {
                        "bg-no-repeat bg-[right_1em_center] bg-[length:1rem] bg-arrow-right-thinner-gray":
                          navItem?.hasSubMenu,
                      },
                      {
                        "font-bold text-brand-medium-persian-blue": isExpanded,
                      },
                    )}
                    onClick={() => {
                      handleNavItemClick(navItem.id);
                    }}
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
