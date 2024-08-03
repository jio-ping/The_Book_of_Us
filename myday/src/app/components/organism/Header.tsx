"use client";
import Image from "next/image";
import Link from "next/link";
const navShareItems = [
  { title: "Youtube", href: "https://www.youtube.com/@DAY6Official" },
  { title: "Twitter", href: "https://twitter.com/DAY6Official" },
  { title: "Instagram", href: "https://www.instagram.com/DAY6kilogram" },
];

const navLogoItems = [
  {
    title: "About",
    feature: () => {
      console.log("hey");
    },
  },
  ,
  {
    title: "Logout",
    feature: () => {
      console.log("hey");
    },
  },
];

const Header = () => {
  const style = {
    li: "list-none flex flex-col items-start relative",
    nav: "hidden peer-hover:block absolute top-[30px] peer-focus-within:block",
  };
  return (
    <header className="px-4 text-white bg-custom-base bg-custom-stripe h-[30px] flex justify-between">
      <nav className="flex justify-start gap-2">
        <li className={style["li"]}>
          <button className="peer focus:outline-none">
            <Image
              src="/svg/logo.svg"
              width={30}
              height={30}
              alt="day6"
            ></Image>
          </button>
          <Nav
            className={style["nav"]}
            listItems={navLogoItems}
            type="button"
          />
        </li>
        <li className={style["li"]}>
          <button className="peer hover focus:outline-none">Share</button>
          <Nav className={style["nav"]} listItems={navShareItems} type="href" />
        </li>
      </nav>
      <p>Tue,30 July 2024 17:22:17pm</p>
    </header>
  );
};

export default Header;

// Nav 컴포넌트 : href 속성이 있으면
const Nav = ({ listItems, type, className }) => {
  const style = {
    li: "border-b last:border-b-0 mx-2 h-[35px]",
  };
  return (
    <nav className={`bg-custom-base w-[150px] bg-custom-stripe ${className}`}>
      <ul className="flex flex-col w-full">
        {type === "href"
          ? listItems.map(({ title, href }) => {
              return (
                <li className={style["li"]} key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })
          : listItems.map(({ title, feature }) => {
              return (
                <li className={style["li"]} key={title}>
                  <button onClick={feature}>{title}</button>
                </li>
              );
            })}
      </ul>
    </nav>
  );
};
