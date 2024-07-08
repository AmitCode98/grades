import React from "react";
import NftCard from "@/components/nft-card";
import NftImg1 from "@/public/images/nft-img.png";
import NftImg2 from "@/public/images/nft-img2.png";
import Button from "../button";
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
    price: 5.10,
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
      <div className="container flex flex-col items-center gap-20">
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
        <Button className=" bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">Explore Collections</Button>
        {/* <Button className=" bg-[#1cbbbbbb] text-lg text-black font-bubblegum w-[290px]">Explore Collections</Button> */}
      </div>
    </section>
  );
}
