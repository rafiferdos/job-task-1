import { Button } from "./ui/button";

const VideoGallery = () => {
  return (
    <div className="my-7 flex items-center justify-center flex-col">
      <h1 className="text-2xl font-extrabold mb-2">Videos</h1>
      <div className="flex flex-col w-fit gap-2">
          <video className="rounded-xl w-full" controls>
            <source src="https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4" type="video/mp4" />
          </video>
        <div className="grid lg:grid-cols-3 grid-rows-1 gap-2 w-fit rounded-3xl overflow-hidden">
          <video className="w-full rounded-3xl" controls>
            <source src="https://videos.pexels.com/video-files/5908584/5908584-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <video className="w-full rounded-3xl" controls>
            <source src="https://videos.pexels.com/video-files/2646392/2646392-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <video className="w-full rounded-3xl" controls>
            <source src="https://videos.pexels.com/video-files/852435/852435-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
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

export default VideoGallery;
