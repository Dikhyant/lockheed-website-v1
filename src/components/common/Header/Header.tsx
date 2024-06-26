import React, { useState } from "react";
import LockHeedLogo from "./LockHeedLogo";
import SearchIcon from "./SearchIcon";
import GlobeIcon from "./GlobeIcon";
import NavMenuCard from "../NavMenuCard/NavMenuCard";
import { cn } from "../../../utils/misc";
import { navMenus, navMenuToItemMap } from "./nav-menu-data";

type HeaderLinks = {
  text: string;
  href: string;
};

function dummy() {}

type TNavMenuProps = React.ComponentProps<typeof NavMenuCard>;
type TNavSectionProps = TNavMenuProps["navSections"][number];

type HeaderDropDownText = {
  id: string;
  text: string;
  isExpanded?: boolean;
};

const headerDropDownTexts: HeaderDropDownText[] = [
  {
    id: "Who we are-item-1",
    text: "Who we are",
  },
  {
    id: "What we do-item-1",
    text: "What we do",
  },
];

const headerLinks: HeaderLinks[] = [
  {
    text: "News",
    href: "/news",
  },
  {
    text: "Careers",
    href: "/careers",
  },
  {
    text: "Investors",
    href: "/investors",
  },
  {
    text: "Suppliers",
    href: "/suppliers",
  },
];

const navSections: TNavSectionProps[] = [
  {
    navItems: [
      {
        id: "about-us-1",
        text: "About Us",
        hasSubMenu: true,
      },
      {
        id: "Leadership & Governance-1",
        text: "Leadership & Governance",
        hasSubMenu: true,
      },
      {
        id: "Our Businesses-1",
        text: "Our Businesses",
        hasSubMenu: true,
      },
      {
        id: "Sustainability, Social Impact & Diversity-1",
        text: "Sustainability, Social Impact & Diversity",
        hasSubMenu: true,
      },
      {
        id: "Ethics-1",
        text: "Ethics",
        hasSubMenu: true,
      },
      {
        id: "Economic and Workforce Impact-1",
        text: "Economic and Workforce Impact",
      },
      {
        id: "Global Activities-1",
        text: "Global Activities",
      },
    ],
  },
];

const Header: React.FC<any> = () => {
  const [isNavDrawerExpanded, setIsNavDrawerExpanded] = useState(false);
  const [navMenuToItemMapState, setNavMenuToItemMapState] =
    useState(navMenuToItemMap);

  const handleNavDrawerOpenButtonClick = () => {
    setIsNavDrawerExpanded(true);
  };

  const handleNavDrawerCloseButtonClick = () => {
    setIsNavDrawerExpanded(false);
    setNavMenuToItemMapState((prev) => {
      const newState = [...prev];
      for (let i = 0; i < newState.length; i++) {
        newState[i].isExpanded = false;
      }
      return newState;
    });
  };

  const handleNavDropDownItemClick = (id: string) => {
    setNavMenuToItemMapState((prev) => {
      const newState = [...prev];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].menuItemId === id) {
          newState[i].isExpanded = !newState[i].isExpanded;
        }
      }
      return newState;
    });
  };

  const handleMenuBackButtonClick = (id: string) => {
    setNavMenuToItemMapState((prev) => {
      const newState = [...prev];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].menuId === id) {
          newState[i].isExpanded = false;
          return newState;
        }
      }
      return newState;
    });
  };

  return (
    <header className="h-20 bg-white font-din">
      <div className="flex lg:hidden h-full">
        <div className="relative h-full pt-5 md:pl-12 pl-[15px] pr-[15px] basis-2/12">
          <button
            onClick={handleNavDrawerOpenButtonClick}
            className="py-1 px-3"
          >
            <span className="bg-custom-hamburger bg-no-repeat bg-center bg-auto inline-block w-[30px] h-[30px]"></span>
          </button>
        </div>
        <div className="flex justify-center basis-8/12 pt-5 px-[15px]">
          <a className="" href="/">
            <LockHeedLogo width={200} />
          </a>
        </div>
        <div className="basis-2/12 pt-5 pl-[15px] md:pr-12 pr-2 flex justify-end">
          <a>
            <SearchIcon width={22} height={26} />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap max-w-[1600px] mx-auto h-0 lg:h-full">
        <div
          className={cn(
            "flex flex-col z-30 bg-white border-r-brand-pastel-grey border-r-[0.914286px] lg:border-none top-0 absolute lg:relative max-w-[75%] lg:max-w-full -translate-x-full lg:translate-x-0 lg:flex-row w-full justify-between px-[15px] lg:px-12 py-[15px] min-h-[100vh] lg:min-h-[80px] lg:h-full",
            {
              "translate-x-0": isNavDrawerExpanded,
            },
          )}
        >
          <div className="lg:pt-[4.8px] mb-8 lg:mb-0 flex">
            <a href="/">
              <LockHeedLogo width={200} />
            </a>
            <a className="lg:hidden mx-auto mr-6 bg-search-thinner-black bg-no-repeat bg-center bg-[length:16px_16px] w-4 h-auto" />
            <button
              onClick={handleNavDrawerCloseButtonClick}
              className={
                "lg:hidden bg-custom-close bg-no-repeat bg-center bg-[length:24px_30px] h-[30px] w-6"
              }
            />
          </div>
          {headerDropDownTexts.map((item) => {
            const isExpanded = navMenuToItemMap.find(
              (i) => i.menuItemId === item.id,
            )?.isExpanded as boolean;
            return (
              <a
                href={"#"}
                aria-expanded={isExpanded}
                className={cn(
                  "bg-arrow-right-thinner-gray lg:bg-chevron-down-black pt-[2.5px] bg-no-repeat bg-[length:16px_11px] lg:bg-[length:0.6rem] bg-[right_1em_center] lg:bg-right lg:h-[30px] pr-[17px] mt-4 lg:mt-[12.8px]",
                  {
                    "font-bold text-brand-medium-persian-blue": isExpanded,
                  },
                )}
                onClick={() => {
                  handleNavDropDownItemClick(item.id);
                }}
              >
                {item.text}
              </a>
            );
          })}
          {headerLinks.map((link) => {
            return (
              <a
                key={link.text}
                href={link.href}
                className="text-base lg:h-[30px] mt-4 lg:mt-[12.8px] lg:pt-[2.5px]"
              >
                {link.text}
              </a>
            );
          })}

          <div className="flex mt-auto lg:mt-[9.6px] pt-4 lg:pt-0 border-t-[1px] border-t-brand-pastel-grey lg:border-none">
            <a
              href="#"
              className="focus:text-brand-medium-persian-blue pl-4 pr-[17px] pt-1 flex items-center lg:block"
            >
              <GlobeIcon width={22} height={26} />
              <div className="ml-4 lg:hidden font-din-med text-[19.2px] leading-[19.2px]">
                <div className="underline">Global Activity</div>
                <div>United States | English</div>
              </div>
            </a>
            <a
              href="#"
              className="focus:text-brand-medium-persian-blue pl-6 pr-[17px] pt-1 hidden lg:block"
            >
              <SearchIcon width={22} height={26} />
            </a>
          </div>
        </div>
        {navMenus.map((menu) => {
          const isExpanded = navMenuToItemMap.find(
            (item) => item.menuId === menu.id,
          )?.isExpanded as boolean;
          if (!isExpanded) return <React.Fragment key={menu.id} />;
          return (
            <NavMenuCard
              key={menu.id}
              id={menu.id}
              title={menu.title}
              navSections={menu.navSections}
              className={
                "lg:max-w-[25%] w-full border-r-brand-pastel-grey border-r"
              }
              onBackButtonClicked={() => {
                handleMenuBackButtonClick(menu.id);
              }}
              onMenuCloseButtonClicked={() => {
                console.log("Nav menu close clicked");
                handleNavDrawerCloseButtonClick();
              }}
              onChange={(arg) => {
                arg.forEach((i) => {
                  setNavMenuToItemMapState((prev) => {
                    const newState = [...prev];
                    for (let j = 0; j < newState.length; j++) {
                      if (newState[j].menuItemId === i.id) {
                        newState[j].isExpanded = i.isExpanded;
                      }
                    }
                    return newState;
                  });
                });
              }}
            />
          );
        })}
      </div>
    </header>
  );
};

export default Header;
