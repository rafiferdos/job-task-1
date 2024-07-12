import Image from "next/image";
import bg from "@/assets/images/bg.jpg";
const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center shrink-0 mx-0 px-0 flex-col">
      <div className="w-full overflow-hidden h-80 md:h-[550px]">
        <Image src={bg} className="w-full" objectFit="contain" alt="bg" />
      </div>
      <div className="">d</div>
    </div>
  );
};

export default Hero;
