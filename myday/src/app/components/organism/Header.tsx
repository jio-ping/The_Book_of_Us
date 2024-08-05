"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { Nav } from "@/app/components/molecules";
import { TnavShareItems, TnavLogoItems } from "@/app/components/molecules/type";

const navShareItems: TnavShareItems[] = [
  { title: "Youtube", href: "https://www.youtube.com/@DAY6Official" },
  { title: "Twitter", href: "https://twitter.com/DAY6Official" },
  { title: "Instagram", href: "https://www.instagram.com/DAY6kilogram" },
];

const navLogoItems: TnavLogoItems[] = [
  {
    title: "About",
    feature: () => {
      console.log("hey");
    },
  },
  {
    title: "Logout",
    feature: () => {
      console.log("hey");
    },
  },
];

const INITIAL_STATE = {
  buttonNav: false,
  hrefNav: false,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(INITIAL_STATE);
  const buttonNavRef = useRef<HTMLLIElement>(null);
  const shareNavRef = useRef<HTMLLIElement>(null);

  const style = {
    li: `list-none flex flex-col items-start relative`,
    nav: `peer-hover:block absolute top-[30px] peer-focus-within:block`,
  };

  const handleMouseEnter = (navType: "buttonNav" | "hrefNav") => {
    setIsOpen((prev) => ({ ...prev, [navType]: true }));
  };

  const handleMouseLeave = (navType: "buttonNav" | "hrefNav") => {
    setIsOpen((prev) => ({ ...prev, [navType]: false }));
  };

  return (
    <header className="px-4 text-white bg-custom-base bg-custom-stripe h-[30px] flex justify-between">
      <nav className="flex justify-start gap-2">
        <li
          className={style["li"]}
          ref={buttonNavRef}
          onMouseEnter={() => handleMouseEnter("buttonNav")}
          onMouseLeave={() => handleMouseLeave("buttonNav")}
        >
          <button className="peer focus:outline-none">
            <Image src="/svg/logo.svg" width={30} height={30} alt="day6" />
          </button>
          <Nav
            className={`${style["nav"]} ${
              isOpen.buttonNav ? "block" : "hidden"
            }`}
            listItems={navLogoItems}
          />
        </li>
        <li
          className={style["li"]}
          ref={shareNavRef}
          onMouseEnter={() => handleMouseEnter("hrefNav")}
          onMouseLeave={() => handleMouseLeave("hrefNav")}
        >
          <button className="peer hover focus:outline-none">Share</button>
          <Nav
            className={`${style["nav"]} ${isOpen.hrefNav ? "block" : "hidden"}`}
            listItems={navShareItems}
          />
        </li>
      </nav>
      <p>Tue,30 July 2024 17:22:17pm</p>
    </header>
  );
};

export default Header;
