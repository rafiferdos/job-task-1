import Content from "@/components/Content";
import { ModeToggle } from "@/components/dark-mode-toggle";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex-col gap-12 flex md:flex-row max-w-7xl container mx-auto bg-slate-100 dark:bg-slate-800">
        <div className="md:w-1/2">

        <Content />
        </div>
        <div className="flex md:flex-col flex-row md:w-1/2">
          <PhotoGallery />
          <VideoGallery />
        </div>
      </div>
    </>
  );
}
