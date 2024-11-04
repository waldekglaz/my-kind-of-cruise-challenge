"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type TAdventure = {
  name: string;
  image: string;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.4,
  },
};

type AdventuresProps = {
  data: TAdventure[];
};

const Adventures = ({ data }: AdventuresProps) => {
  return (
    <div>
      <h2 className="mb-4">Adventures</h2>
      <Carousel
        ssr={true}
        responsive={responsive}
        draggable={false}
        className="h-full"
        itemClass="flex items-center justify-center"
      >
        {data.map(
          (adventure: TAdventure, idx: number) =>
            adventure.name && (
              <div
                key={`adventure-${idx}`}
                className="select-none  rounded-md inline-block   hover:no-underline hover:text-mkblack w-[200px] "
              >
                <Link
                  href={`/adventure/${idx}`}
                  className="inline-block w-[148px] border rounded-md"
                >
                  <Image
                    src={adventure?.image}
                    alt={adventure.name}
                    width={200}
                    height={100}
                    className="rounded-t-md h-[92px]  w-full object-cover select-none "
                  />
                  <p className=" py-2 font-semibold text-sm text-center overflow-hidden select-none">
                    {adventure.name}
                  </p>
                </Link>
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

export default Adventures;
