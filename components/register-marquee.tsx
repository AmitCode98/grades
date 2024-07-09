import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StareImage from "@/public/images/star-img.png";

const marqueeItems = Array.from(
  { length: 6 },
  () => "Register to Get Notified"
);

export default function RegisterMarquee() {
  return (
    <div className="w-full py-12 lg:py-20 mt-7 lg:mt-14 bg-red-">
      <div className="relative w-full border-t border-b -rotate-6">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
        <Marquee>
          <div className="flex gap-3 lg:gap-7 items-center whitespace-nowrap pr-3 lg:pr-7">
            {marqueeItems.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 lg:gap-7 py-2 lg:py-3"
              >
                <h1 className="text-sm lg:text-lg font-bubblegum">{text}</h1>
                <Image src={StareImage} alt="star img" loading="lazy" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
