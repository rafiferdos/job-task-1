import { Button } from "./ui/button";

const Content = () => {
  return (
    <div>
      <div className="p-5 bg-slate-200 dark:bg-slate-900 rounded-xl">
        <div className="h-40 overflow-y-scroll">
          <h2 className="text-xl md:text-2xl font-extrabold my-3">
            How Astrography changed my life
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            atque maxime aliquid error sed, voluptatum nulla saepe doloremque
            autem ex animi voluptatibus officiis doloribus odio officia amet quo
            impedit nemo deserunt rem ratione? Dicta dolor alias facere,
            reiciendis veniam eligendi aspernatur magni consequuntur atque,
            praesentium maxime. Doloremque perspiciatis, nemo fugit ipsam culpa
            explicabo optio corrupti cupiditate veniam! Ipsam qui quasi
            explicabo aspernatur, aliquid amet molestias voluptas laudantium id
            corrupti nulla, molestiae delectus consectetur debitis. Cum ipsum
            inventore, voluptate vel unde quod aperiam error corrupti
            voluptatibus dolore ut sit voluptas minima molestias sapiente velit
            minus facere illum nesciunt recusandae aliquam ratione assumenda
            maxime. Amet aliquam molestiae fugiat fuga vel reprehenderit eum cum
            odit optio harum obcaecati perspiciatis quae ad ea quas, neque,
            eaque praesentium voluptates dicta minima nostrum labore reiciendis.
            Mollitia numquam eaque architecto quis nam necessitatibus, quisquam
            sit dolore iusto autem, molestiae eveniet, et voluptatum iure ea cum
            odio dolores?
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-1 *:text-blue-500 py-4">
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#photography</p>
            </div>
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#astronomy</p>
            </div>
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#astrography</p>
            </div>
            <div className="p-1 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>+</p>
            </div>
          </div>
          <Button variant="ghost" className="text-blue-600">
            Read More
          </Button>
        </div>
      </div>

      <div className="my-4"></div>

      <div className="p-5 bg-slate-200 dark:bg-slate-900 rounded-xl">
        <div className="h-40 overflow-y-scroll">
          <h2 className="text-xl md:text-2xl font-extrabold my-3">
            Which Telescope and DSLR I use
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            atque maxime aliquid error sed, voluptatum nulla saepe doloremque
            autem ex animi voluptatibus officiis doloribus odio officia amet quo
            impedit nemo deserunt rem ratione? Dicta dolor alias facere,
            reiciendis veniam eligendi aspernatur magni consequuntur atque,
            praesentium maxime. Doloremque perspiciatis, nemo fugit ipsam culpa
            explicabo optio corrupti cupiditate veniam! Ipsam qui quasi
            explicabo aspernatur, aliquid amet molestias voluptas laudantium id
            corrupti nulla, molestiae delectus consectetur debitis. Cum ipsum
            inventore, voluptate vel unde quod aperiam error corrupti
            voluptatibus dolore ut sit voluptas minima molestias sapiente velit
            minus facere illum nesciunt recusandae aliquam ratione assumenda
            maxime. Amet aliquam molestiae fugiat fuga vel reprehenderit eum cum
            odit optio harum obcaecati perspiciatis quae ad ea quas, neque,
            eaque praesentium voluptates dicta minima nostrum labore reiciendis.
            Mollitia numquam eaque architecto quis nam necessitatibus, quisquam
            sit dolore iusto autem, molestiae eveniet, et voluptatum iure ea cum
            odio dolores?
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-1 *:text-blue-500 py-4">
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#photography</p>
            </div>
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#astronomy</p>
            </div>
            <div className="py-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>#astrography</p>
            </div>
            <div className="p-1 rounded-full bg-slate-200 dark:bg-slate-800">
              <p>+</p>
            </div>
          </div>
          <Button variant="ghost" className="text-blue-600">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
