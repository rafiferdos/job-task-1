import Image from "next/image";
import MainMenu from "../main-menu";
import logo from "@/assets/images/Vector.png";
import ProfileImage from "@/assets/images/Profile Pic.png";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full shrink-0 justify-end items-center px-4 md:px-6">
      <div className="w-11/12 max-w-7xl flex justify-between container mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="logo" width={30} height={30} />
          <p className="font-bold">Logoipsum</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image src={ProfileImage} alt="profile" width={40} height={40} />
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
