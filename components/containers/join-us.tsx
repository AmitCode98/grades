import React from "react";
import Image from "next/image";
import RainbowBgImg from "@/public/images/rainbow-bg-color-img.png";
import NftReserveImg from "@/public/images/nft-reserve-img.png";
import { Input } from "../ui/input";
import Button from "../button";
import APlusImg from "@/public/images/a-plus-img.png";

export default function JoinUs() {
  return (
    <section className="relative h-full w-full py-12 lg:py-24 bg-[#B3D5FF]">
      <div className="container flex flex-col lg:flex-row items-center gap-6">
        <div className="relative  lg:w-2/5 border-2 rounded-3xl overflow-hidden">
          <Image
            src={RainbowBgImg}
            alt="img"
            className="object-cover bg-no-repeat"
          />
          <div className="absolute top-0 p-6 lg:p-10 flex flex-col gap-4 lg:gap-7 ">
            <div className="flex flex-col gap-3 lg:gap-4">
              <h1 className="text-[32px] lg:text-5xl capitalize">Secure your Grades</h1>
              <p className=" text-sm lg:text-lg font-abeezee">
                Participants in the &quot;Grades&quot; NFT ecosystem are
                rewarded for their achievements. These NFTs can be collected,
                traded, or used to unlock additional benefits.
              </p>
            </div>
            <Image src={NftReserveImg} alt="img" />
          </div>
        </div>
        <div className="relative w-full lg:w-3/5 border-2 rounded-3xl p-6 lg:p-10">
          <div className="flex flex-col h-full gap-7">
            <div className="relative">
              <h1 className="font-abeezee text-2xl lg:text-2xl leading-tight">
                Hear new announcements first & join a wonderful community Hear
                new announcements first & join a wonderful community
              </h1>
              <Image
                src={APlusImg}
                alt="img"
                className="absolute -top-10 -right-10 hidden lg:block"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                <Input
                  type="text"
                  placeholder="First Name *"
                  className="font-abeezee text-base rounded-xl w-full py-6"
                />
                <Input
                  type="email"
                  placeholder="Email *"
                  className="font-abeezee text-base rounded-xl w-full py-6"
                />
              </div>
              <Button className="bg-primary text-background w-full">
                Sign Me Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
