import React from "react";
import HeroBgImg from "@/public/images/hero-bg-img.webp";
import Image from "next/image";
import Button from "../button";
import RoundArrowImg from "@/public/images/round-arrow.png";
import SineImg1 from "@/public/images/sine-img-1.png";
import SineImg2 from "@/public/images/sine-img-2.png";

export default function hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        alt="hero background image"
        src={HeroBgImg}
        // className='h-screen w-full object-cover bg-cover bg-no-repeat object-center -z-10'
        className=" w-full h-full object-cover bg-cover bg-no-repeat object-center -z-10"
        loading="lazy"
      />

      <div className="absolute w-[50%] h-full top-0 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col h-full justify-center items-center text-center">
          <div className="relative">
            <p className="font-mousememoirs font-normal text-2xl text-primary">
              Learn. Earn. Collect. Achieve...
            </p>
            <Image
              src={SineImg1}
              alt="sine img"
              className="absolute -top-6 -left-8"
            />
          </div>
          <div className="relative">
            <h1 className="font-normal text-[56px] leading-tight">
              Unlock the Future of Learning with GRADES NFT
            </h1>
            <Image
              src={SineImg2}
              alt="sing img"
              className="absolute -top-6 -right-6"
            />
          </div>
          <p className="font-abeezee italic text-[#3C3C3C] mt-2">
            Welcome to GRADES NFT, where education and innovation converge. Our
            unique ecosystem allows kids to learn, earn, and collect NFTs as
            they progress through their academic journey. Empower your child&apos;s
            education with a system that rewards achievement and fosters a love
            for learning.
          </p>
          <div className="relative">
            <Button className="bg-primary text-background mt-10">
              View Collection
            </Button>
            <Image src={RoundArrowImg} alt="img" className="absolute top-0 -left-28"/>
          </div>
        </div>
      </div>
    </section>
  );
}
