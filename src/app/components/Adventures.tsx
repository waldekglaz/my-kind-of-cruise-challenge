"use client";
import Head from "next/head";
import Heading from "./Heading";
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
    breakpoint: { max: 3000, min: 1440 },
    items: 6.8,
  },
  laptop: {
    breakpoint: { max: 1439, min: 1023 },
    items: 4.7,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 463, min: 375 },
    items: 2.2,
  },
  smMobile: {
    breakpoint: { max: 374, min: 0 },
    items: 1.8,
  },
};

type AdventuresProps = {
  data: TAdventure[];
};

const Adventures = ({ data }: AdventuresProps) => {
  return (
    <div>
      <Heading title="Adventures" />
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
                  <p className=" py-2 font-semibold text-xs text-center overflow-hidden select-none">
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
