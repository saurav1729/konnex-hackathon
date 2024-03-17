import Image from "next/image";
import Fan from "@/components/Fan";
import Bulb from "@/components/Bulb";

export default function Home() {
  return (
    <div className="w-full h-auto flex">
      <Fan/>
      <Bulb/>
    </div>
  );
}
