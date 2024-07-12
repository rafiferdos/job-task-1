import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpeg";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

const PhotoGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 md:-mt-7">
      <h1 className="text-2xl font-extrabold mb-2">Photos</h1>
      <div className="flex flex-col w-fit">
        <div className="grid grid-cols-2 grid-rows-2 w-fit rounded-3xl overflow-hidden">
          <Image src={img1} alt="img1" width={300} height={300} />
          <Image src={img2} alt="img2" width={300} height={300} />
          <Image src={img3} alt="img3" width={300} height={300} />
          <Image src={img4} alt="img4" width={300} height={300} />
        </div>
        <div className="flex justify-end">
          <Button className="text-blue-600" variant="ghost">
            More +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
