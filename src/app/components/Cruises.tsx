"use client";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { formatDate } from "../../lib/helpers/formatDate";

type Cruise = {
  name: string;
  nights: number;
  sailDate: string;
  portNames: string[];
  startPort: string;
  endPort: string;
  price: string;
  shipImage: string;
  shipName: string;
  cruiseLineName: string;
  iconOverlay: string;
  iconBackgroundColor: string;
};

type CruisesProps = {
  data: Cruise[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 5.8,
  },
  laptop: {
    breakpoint: { max: 1439, min: 1023 },
    items: 4.7,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2.9,
  },
  mobile: {
    breakpoint: { max: 463, min: 375 },
    items: 1.8,
  },
  smMobile: {
    breakpoint: { max: 374, min: 0 },
    items: 1.4,
  },
};

const Cruises = ({ data }: CruisesProps) => {
  return (
    <div>
      <Heading title="Popular Cruises" />
      <Carousel
        ssr={true}
        responsive={responsive}
        draggable={false}
        className="h-full"
        itemClass="flex items-center justify-center"
      >
        {data.map((cruise: Cruise, idx: number) => (
          <div key={`cruise-${idx}`} className=" w-[200px] ">
            <Link
              href={`/cruise/${idx}`}
              className="text-xs inline-block w-[182px] h-[220px] border rounded-md relative"
            >
              <Image
                src={cruise.shipImage}
                alt={cruise.shipName}
                width={182}
                height={200}
                className="h-[100px] max-h-[100px] rounded-t-md"
              />
              <div className="p-2">
                <p className="font-bold">{cruise.name}</p>
                <p>{cruise.shipName}</p>
                <p>{formatDate(cruise.sailDate)}</p>
                <p>
                  from <span className="font-bold">{cruise.startPort}</span>
                </p>
                <p>
                  from <span className="font-bold">£{cruise.price}</span>
                </p>
              </div>
              <div
                style={{ backgroundColor: cruise.iconBackgroundColor }}
                className="absolute bottom-2 right-2"
              >
                <Image
                  src={cruise.iconOverlay}
                  alt={cruise.cruiseLineName}
                  width={30}
                  height={30}
                  className=" "
                />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cruises;
