import Link from "next/link";
import { TnavLogoItems, TnavShareItems } from "./type";
interface TNav {
  listItems: TnavLogoItems[] | TnavShareItems[];
  className: string;
}

const Nav = ({ listItems, className }: TNav) => {
  const style = {
    li: "border-b last:border-b-0 mx-2 h-[35px]",
  };

  const isShareItem = (
    item: TnavLogoItems | TnavShareItems
  ): item is TnavShareItems => {
    return (item as TnavShareItems).href !== undefined;
  };

  return (
    <nav className={`bg-custom-base w-[150px] bg-custom-stripe ${className}`}>
      <ul className="flex flex-col w-full">
        {listItems.map((item) =>
          isShareItem(item) ? (
            <li className={style["li"]} key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ) : (
            <li className={style["li"]} key={item.title}>
              <button onClick={item.feature}>{item.title}</button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
export default Nav;
