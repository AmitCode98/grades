"use client";
import React from "react";
import Image from "next/image";
import NftCard from "@/components/nft-card";
import NftImg1 from "@/public/images/nft-img.png";
import NftImg2 from "@/public/images/nft-img2.png";
import Button from "../button";
import NftMarque from "../nft-marque";
import RainbowBgImg from "@/public/images/rainbow-bg-color-img.png";
import AstronautImg from "@/public/images/astronaut-img.png";
import RoundNftImg from "@/public/images/round-nft-img.png";
import CompanyLogo from "@/public/images/Grades-Logo.png";
// import NftImg3 from "@/public/images/nft-img3.png";
// import NftImg4 from "@/public/images/nft-img4.png";

const nftData = [
  {
    status: "Available Now",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 1.47,
    available: true,
    image: NftImg1,
  },
  {
    status: "Ended",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 3.23,
    available: false,
    image: NftImg2,
  },
  {
    status: "Available Now",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 1.19,
    available: true,
    image: NftImg1,
  },
  {
    status: "Available Now",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 5.1,
    available: true,
    image: NftImg1,
  },
  {
    status: "Ended",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 2.22,
    available: false,
    image: NftImg1,
  },
  {
    status: "Available Now",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 3.3,
    available: true,
    image: NftImg2,
  },
  {
    status: "Available Now",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 1,
    available: true,
    image: NftImg1,
  },
  {
    status: "Ended",
    name: "Immortal Dynasty #1c",
    userName: "Nancy Rodriguez",
    price: 5.17,
    available: false,
    image: NftImg2,
  },
];

export default function NftMarketplace() {
  return (
    <section className="relative h-full w-full py-12 lg:py-16">
      <NftMarque />
      <div className="relative w-full max-h-[400px] h-[400px] grid grid-cols-2 overflow-hidden">
        <div className="bg-red-600">
          {/* <Image
            src={RainbowBgImg}
            alt="img"
            className="object-cover bg-no-repeat"
          /> */}
        </div>
        <div className="bg-green-500">test2</div>
        <Image
          src={RoundNftImg}
          alt="img"
          className="absolute left-1/2 transform-center bottom-[-50%] custom-rotate"
        />
      </div>
      <div className="container flex flex-col items-center gap-20  mt-20">
        <div className="grid grid-cols-4 gap-7">
          {nftData.map((nft, index) => (
            <NftCard
              key={index}
              status={nft.status}
              name={nft.name}
              userName={nft.userName}
              price={nft.price}
              available={nft.available}
              image={nft.image}
            />
          ))}
        </div>
        <Button className=" bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
          Explore Collections
        </Button>
        {/* <Button className=" bg-[#1cbbbbbb] text-lg text-black font-bubblegum w-[290px]">Explore Collections</Button> */}
      </div>
    </section>
  );
}
