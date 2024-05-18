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
            id: "Our Businesses-item-1",
            text: "Our Businesses",
            hasSubMenu: true,
          },
          {
            id: "Sustainability, Social Impact & Diversity-item-1",
            text: "Sustainability, Social Impact & Diversity",
            hasSubMenu: true,
          },
          {
            id: "Ethics-item-1",
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
  {
    id: "Our Businesses-menu-1",
    title: "Our Businesses",
    navSections: [
      {
        navItems: [
          {
            id: "Business Areas-item-1",
            text: "Business Areas",
            href: "#",
          },
        ],
      },
      {
        navItems: [
          {
            id: "Aeronautics-item-1",
            text: "Aeronautics",
            href: "#",
          },
          {
            id: "Missiles and Fire Control-item-1",
            text: "Missiles and Fire Control",
            href: "#",
          },
          {
            id: "Rotary and Mission Systems-item-1",
            text: "Rotary and Mission Systems",
            href: "#",
          },
          {
            id: "Space-item-1",
            text: "Space",
            href: "#",
          },
          {
            id: "LM Ventures-item-1",
            text: "LM Ventures",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "Sustainability, Social Impact & Diversity-menu-1",
    title: "Sustainability, Social Impact & Diversity",
    navSections: [
      {
        navItems: [
          {
            id: "Social Impact-item-1",
            text: "Social Impact",
            hasSubMenu: true,
          },
          {
            id: "Diversity & Inclusion-item-1",
            text: "Diversity & Inclusion",
            href: "#",
          },
          {
            id: "Environmental, Safety and Health-item-1",
            text: "Environmental, Safety and Health",
            href: "#",
          },
          {
            id: "Sustainability-item-1",
            text: "Sustainability",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "Ethics-menu-1",
    title: "Ethics",
    navSections: [
      {
        navItems: [
          {
            id: "Ethics-item-2",
            text: "Ethics",
            href: "#",
          },
          {
            id: "Code of Conduct-item-1",
            text: "Code of Conduct",
            href: "#",
          },
          {
            id: "Business Conduct-item-1",
            text: "Business Conduct",
            href: "#",
          },
          {
            id: "Ethics Awareness Training-item-1",
            text: "Ethics Awareness Training",
            href: "#",
          },
          {
            id: "Integrity Minute-item-1",
            text: "Integrity Minute",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    id: "Social Impact-menu-1",
    title: "Social Impact",
    navSections: [
      {
        navItems: [
          {
            id: "In the Community-item-1",
            text: "In the Community",
            href: "#",
          },
          {
            id: "Military and Veteran Support-item-1",
            text: "Military and Veteran Support",
            href: "#",
          },
          {
            id: "Future STEM Workforce-item-1",
            text: "Future STEM Workforce",
            href: "#",
          },
          {
            id: "Employee Focused Programs-item-1",
            text: "Employee Focused Programs",
            href: "#",
          },
          {
            id: "Volunteerism-item-1",
            text: "Volunteerism",
            href: "#",
          },
        ],
      },
      {
        navItems: [
          {
            id: "Contribution Process-item-1",
            text: "Contribution Process",
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
  {
    menuId: "Our Businesses-menu-1",
    menuItemId: "Our Businesses-item-1",
    isExpanded: false,
  },
  {
    menuId: "Sustainability, Social Impact & Diversity-menu-1",
    menuItemId: "Sustainability, Social Impact & Diversity-item-1",
    isExpanded: false,
  },
  {
    menuId: "Ethics-menu-1",
    menuItemId: "Ethics-item-1",
    isExpanded: false,
  },
  {
    menuId: "Social Impact-menu-1",
    menuItemId: "Social Impact-item-1",
    isExpanded: false,
  },
];
