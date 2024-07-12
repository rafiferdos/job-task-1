"use client";

import Image from "next/image";
import MainMenu from "../main-menu";
import logo from "@/assets/images/Vector.png";
import ProfileImage from "@/assets/images/Profile Pic.png";
import MenuItems from "../menu-items";
import { ModeToggle } from "../dark-mode-toggle";
import { toast } from "sonner";

const Navbar = () => {
  const handleToast = () => {
    toast.success("Theme Changed Successfully");
  };
  return (
    <div className="flex h-20 w-full shrink-0 justify-end items-center px-4 md:px-6">
      <div className="w-11/12 max-w-7xl flex justify-between mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="logo" width={30} height={30} />
          <p className="font-bold">Logoipsum</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block">
            <MenuItems />
          </div>
          <div onClick={handleToast}>
            <ModeToggle />
          </div>
          <Image src={ProfileImage} alt="profile" width={40} height={40} />
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
