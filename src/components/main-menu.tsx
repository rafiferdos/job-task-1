"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? 
  <div>

  </div> 
  :
  <div>
    <Drawer direction="right">
        <DrawerTrigger>
            <HamburgerMenuIcon />
        </DrawerTrigger>
        <DrawerContent>

        </DrawerContent>
    </Drawer>
  </div>
};

export default MainMenu;
