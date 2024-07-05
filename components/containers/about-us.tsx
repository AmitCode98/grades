import React from "react";
import AboutUsBgImg from "@/public/images/about-grades-bg-img.png";
import Image from "next/image";


export default function AboutUs() {
  return (
    <section className="relative h-full w-full py-12 lg:py-16">
      <div className="container">
        <Image
          src={AboutUsBgImg}
          alt="about us background image"
          className=""
        />
      </div>
      
    </section>
  );
}
