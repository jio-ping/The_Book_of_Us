import Image from "next/image";
import Wonpil from "@/test/wonpil.jpeg";
import Style from "./Avatar.module.css";
export default function Avatar() {
  return (
    <figure className={Style.figure}>
      <Image className={Style.image} src={Wonpil} alt="원필" />
      <figcaption className={Style.title}>The Book of Us</figcaption>
    </figure>
  );
}
