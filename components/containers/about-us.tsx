import React from "react";
import AboutUsBgImg from "@/public/images/about-grades-bg-img.png";
import MobileAboutUsBgImg from "@/public/images/mobile-about-grades-bg-img.png"
import Image from "next/image";


export default function AboutUs() {
  return (
    <section className="relative h-full w-full pt-12">
      <div className="container flex items-center justify-center">
        <Image
          src={AboutUsBgImg}
          alt="about us background image"
          className="hidden lg:block"
        />
        <Image
          src={MobileAboutUsBgImg}
          alt="about us background image"
          className="w-full lg:hidden"
        />
      </div>
      
    </section>
  );
}
