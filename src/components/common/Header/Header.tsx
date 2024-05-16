import React from "react";
import LockHeedLogo from "./LockHeedLogo";
import SearchIcon from "./SearchIcon";
import GlobeIcon from "./GlobeIcon";

type HeaderLinks = {
  text: string;
  href: string;
};

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

const Header: React.FC<any> = () => {
  return (
    <header className="w-screen h-20 bg-white">
      <div className="flex justify-between items-center px-12 py-1.5 h-full">
        <div>
          <a href="/">
            <LockHeedLogo width={200} />
          </a>
        </div>

        <a className="bg-chevron-down-black bg-no-repeat bg-[length:0.6rem] bg-right h-8 pr-4 mt-3.5">
          Who we are
        </a>

        <a className="bg-chevron-down-black bg-no-repeat bg-[length:0.6rem] bg-right h-8 pr-4 mt-3.5">
          What we do
        </a>

        {headerLinks.map((link) => {
          return (
            <a
              key={link.text}
              href={link.href}
              className="text-base h-8 mt-3.5"
            >
              {link.text}
            </a>
          );
        })}

        <a href="#" className="focus:text-brand-medium-persian-blue">
          <GlobeIcon width={22} height={26} />
        </a>
        <a href="#" className="focus:text-brand-medium-persian-blue">
          <SearchIcon width={22} height={26} />
        </a>
      </div>
    </header>
  );
};

export default Header;
