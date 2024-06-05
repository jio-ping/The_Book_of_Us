import Image from "next/image";
import Wonpil from "@/test/wonpil.jpeg";
export default function Avartar() {
  return (
    <figure className="flex flex-col items-center width-[144px]">
      <Image
        className="rounded-full"
        src={Wonpil}
        width={144}
        height={144}
        alt="원필"
      />
      <figcaption className="font-bold">Day6</figcaption>
    </figure>
  );
}
