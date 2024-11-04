"use client";
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
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Cruises = ({ data }: CruisesProps) => {
  return (
    <div>
      <h2>Popular Cruises</h2>
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
              className="text-xs inline-block w-[182px] h-[210px] border rounded-md relative"
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
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cruises;
