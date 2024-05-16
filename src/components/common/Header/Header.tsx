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
    <header className="h-20 bg-white font-din">
      <div className="flex justify-between px-12 py-[15px] h-full">
        <div className="pt-[4.8px]">
          <a href="/">
            <LockHeedLogo width={200} />
          </a>
        </div>

        <a
          href={"#"}
          className="focus:font-bold focus:text-brand-medium-persian-blue bg-chevron-down-black pt-[2.5px] bg-no-repeat bg-[length:0.6rem] bg-right h-[30px] pr-[17px] mt-[12.8px]"
        >
          Who we are
        </a>

        <a
          href={"#"}
          className="focus:font-bold focus:text-brand-medium-persian-blue bg-chevron-down-black pt-[2.5px] bg-no-repeat bg-[length:0.6rem] bg-right h-[30px] pr-[17px] mt-[12.8px]"
        >
          What we do
        </a>

        {headerLinks.map((link) => {
          return (
            <a
              key={link.text}
              href={link.href}
              className="text-base h-[30px] mt-[12.8px] pt-[2.5px]"
            >
              {link.text}
            </a>
          );
        })}

        <div className="flex mt-[9.6px]">
          <a
            href="#"
            className="focus:text-brand-medium-persian-blue pl-4 pr-[17px] pt-1"
          >
            <GlobeIcon width={22} height={26} />
          </a>
          <a
            href="#"
            className="focus:text-brand-medium-persian-blue pl-6 pr-[17px] pt-1"
          >
            <SearchIcon width={22} height={26} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
