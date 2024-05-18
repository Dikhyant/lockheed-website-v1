import React from "react";
import NavMenuCard from "../NavMenuCard/NavMenuCard";

type TNavMenuProps = React.ComponentProps<typeof NavMenuCard>;

type TNavMenuToItemMap = {
  menuId: string;
  menuItemId: string;
  isExpanded: boolean;
};

export const navMenus: TNavMenuProps[] = [
  {
    id: "Who we are-menu-1",
    title: "Who we are",
    navSections: [
      {
        navItems: [
          {
            id: "About Us-item-1",
            text: "About Us",
            hasSubMenu: true,
          },
          {
            id: "Leadership & Governance-item-1",
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
            href: "#",
          },
          {
            id: "Global Activities-1",
            text: "Global Activities",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "About Us-menu-1",
    title: "About Us",
    navSections: [
      {
        navItems: [
          {
            id: "Our Company-1",
            text: "Our Company",
            href: "#",
          },
          {
            id: "Our Culture-1",
            text: "Our Culture",
            href: "#",
          },
          {
            id: "Our History-1",
            text: "Our History",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "Leadership & Governance-menu-1",
    title: "Leadership & Governance",
    navSections: [
      {
        navItems: [
          {
            id: "Executive Leadership Team-item-1",
            text: "Executive Leadership Team",
            href: "#",
          },
          {
            id: "Full Spectrum Leadership-item-1",
            text: "Full Spectrum Leadership",
            href: "#",
          },
        ],
      },
      {
        title: "Corporate Governance",
        navItems: [
          {
            id: "Board of Directors-item-1",
            text: "Board of Directors",
            href: "#",
          },
          {
            id: "Corporate Charter-item-1",
            text: "Corporate Charter",
            href: "#",
          },
          {
            id: "Political Disclosures-item-1",
            text: "Political Disclosures",
            href: "#",
          },
        ],
      },
    ],
  },
];

export const navMenuToItemMap: TNavMenuToItemMap[] = [
  {
    menuId: "Who we are-menu-1",
    menuItemId: "Who we are-item-1",
    isExpanded: false,
  },
  {
    menuId: "About Us-menu-1",
    menuItemId: "About Us-item-1",
    isExpanded: false,
  },
  {
    menuId: "Leadership & Governance-menu-1",
    menuItemId: "Leadership & Governance-item-1",
    isExpanded: false,
  },
];
