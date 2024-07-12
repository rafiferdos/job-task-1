import Image from "next/image";
import profilePic from "@/assets/images/Profile Pic.png";
import { Button } from "./ui/button";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
const UserDetails = () => {
  return (
    <div className="flex items-start gap-8 lg:w-1/2 mx-auto p-8 justify-center">
      <Image
        src={profilePic}
        className="-mt-20 md:-mt-24 w-20 md:w-44"
        alt="profile"
      />
      <div className="flex items-start justify-center gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-xs md:text-xl">John Doe</h3>
            <h3 className="font-extrabold">·</h3>
            <h4 className="text-green-500">@johndoe</h4>
          </div>
          <div className="flex items-center justify-center gap-3">

          <div className="flex flex-col gap-1">
            <h4 className="flex items-center gap-2">
              Astrographer <BsFillMoonStarsFill />
            </h4>
            <h4 className="flex items-center gap-2">
              Gamer <GiConsoleController />
            </h4>
          </div>
        <div>
          <Button variant="default" className="bg-[#196aa0] rounded-full">
            Follow
          </Button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
