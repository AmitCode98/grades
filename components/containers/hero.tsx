import React from "react";
import HeroBgImg from "@/public/images/hero-bg-img.webp";
import Image from "next/image";
import Button from "../button";
import RoundArrowImg from "@/public/images/round-arrow.png";
import SineImg1 from "@/public/images/sine-img-1.png";
import SineImg2 from "@/public/images/sine-img-2.png";
import MobileHeroBgImg from "@/public/images/mobile-hero-bg-img.webp"

export default function hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        alt="hero background image"
        src={HeroBgImg}
        // className='h-screen w-full object-cover bg-cover bg-no-repeat object-center -z-10'
        className="hidden lg:block w-full h-full object-cover bg-cover bg-no-repeat object-center -z-10"
        loading="lazy"
      />
      <Image
      src={MobileHeroBgImg}
      alt="mobile hero bg image"
      className="h-screen w-full lg:hidden"
      />

      <div className="absolute container w-full lg:w-[50%] h-full top-0 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col h-full justify-center items-center text-center">
          <div className="relative">
            <p className="font-mousememoirs font-normal text-lg lg:text-2xl text-primary">
              Learn. Earn. Collect. Achieve...
            </p>
            <Image
              src={SineImg1}
              alt="sine img"
              className="absolute  -top-6 -left-8"
            />
          </div>
          <div className="relative w-full">
            <h1 className="font-normal text-[32px] lg:text-[56px] leading-tight w-full">
              Unlock the Future of Learning with GRADES NFT
            </h1>
            <Image
              src={SineImg2}
              alt="sing img"
              className="absolute hidden lg:block -top-6 -right-6"
            />
          </div>
          <p className="font-abeezee italic text-[#3C3C3C] text-sm lg:text-base mt-2">
            Welcome to <span className="text-primary">GRADES NFT</span>, where education and innovation converge. Our
            unique ecosystem allows kids to learn, earn, and collect NFTs as
            they progress through their academic journey. Empower your child&apos;s
            education with a system that rewards achievement and fosters a love
            for learning.
          </p>
          <div className="relative">
            <Button className="bg-primary text-background mt-10">
              View Collection
            </Button>
            <Image src={RoundArrowImg} alt="img" className="absolute top-0 -left-24 lg:-left-28"/>
          </div>
        </div>
      </div>
    </section>
  );
}
