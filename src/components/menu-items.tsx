import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import { MdEdit } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const MenuItems = () => {
  return (
    <div className="flex h-full md:h-auto items-center justify-center flex-col md:flex-row gap-8 md:gap-1">
      <Button variant="ghost" className="md:text-xl text-3xl">
        <IoSearch />
      </Button>
      <Button variant="ghost" className="md:text-xl text-3xl">
        <MdEdit />
      </Button>
      <Button variant="ghost" className="md:text-xl text-3xl">
        <IoIosMail />
      </Button>
      <Button variant="ghost" className="md:text-xl text-3xl">
        <FaBell />
      </Button>
      <Button variant="ghost" className="md:text-xl text-3xl">
        <BsThreeDots />
      </Button>
    </div>
  );
};

export default MenuItems;
