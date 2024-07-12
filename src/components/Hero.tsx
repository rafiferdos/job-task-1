import Image from "next/image";
import bg from "@/assets/images/bg.jpg";
import UserDetails from "./user-details";
const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center shrink-0 mx-0 px-0 flex-col">
      <div className="w-full overflow-hidden md:h-[550px]">
        <Image src={bg} className="w-full" objectFit="cover" alt="bg" />
      </div>
      <div className="w-full">
        <UserDetails />
      </div>
    </div>
  );
};

export default Hero;
