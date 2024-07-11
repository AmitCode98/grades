// "use client";
// import React from "react";
// import Lottie from "lottie-react";
// import Link from "next/link";
// import Image from "next/image";
// import NftCard from "@/components/nft-card";
// import NftImg1 from "@/public/images/nft-img.png";
// import NftImg2 from "@/public/images/nft-img2.png";
// import Button from "../button";
// import NftMarque from "../nft-marque";
// import RainbowBgImg from "@/public/images/rainbow-bg-color-img.png";
// import AstronautImg from "@/public/images/astronaut-img.png";
// import RoundNftImg from "@/public/images/round-nft-img.png";
// import CompanyLogo from "@/public/images/Grades-Logo.png";
// import RainbowAnimation from "@/public/images/rotating-rainbow-animation.json";
// // import NftImg3 from "@/public/images/nft-img3.png";
// // import NftImg4 from "@/public/images/nft-img4.png";

// const nftData = [
//   {
//     status: "Available Now",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 1.47,
//     available: true,
//     image: NftImg1,
//   },
//   {
//     status: "Ended",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 3.23,
//     available: false,
//     image: NftImg2,
//   },
//   {
//     status: "Available Now",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 1.19,
//     available: true,
//     image: NftImg1,
//   },
//   {
//     status: "Available Now",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 5.1,
//     available: true,
//     image: NftImg1,
//   },
//   {
//     status: "Ended",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 2.22,
//     available: false,
//     image: NftImg1,
//   },
//   {
//     status: "Available Now",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 3.3,
//     available: true,
//     image: NftImg2,
//   },
//   {
//     status: "Available Now",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 1,
//     available: true,
//     image: NftImg1,
//   },
//   {
//     status: "Ended",
//     name: "Immortal Dynasty #1c",
//     userName: "Nancy Rodriguez",
//     price: 5.17,
//     available: false,
//     image: NftImg2,
//   },
// ];

// export default function NftMarketplace() {
//   return (
//     <section className="relative h-full w-full py-12 lg:py-16">
//       <NftMarque />
//       <div className="relative w-full h-[375px] flex flex-col items-center overflow-hidden border-b">
//         <div className="flex h-full w-full items-center">
//           <div className="bg-red-60 w-full h-full ">
//             <Lottie
//               animationData={RainbowAnimation}
//               loop={true}
//               // className="absolute  bottom-12 w-[70%] left-[50%] translate-x-[-50%]"
//               className="h-full w-full object-cover bg-cover "
//             />
//             {/* <div className="absolute flex bottom-10 left-24 border"> */}
//               <Image src={AstronautImg} alt="img" className="w-[150px] absolute bottom-10 left-24"/>
//               <Link href="/">
//                 <Image
//                   src={CompanyLogo}
//                   alt="logo"
//                   className="w-[110px] lg:w-[300px] absolute top-10 left-[250px] "
//                 />
//               </Link>
//             {/* </div> */}
//           </div>
//           <div className="w-full h-full  flex items-center justify-end border-l  ">
//             <div className="flex flex-col justify-center items-center gap-20 w-[60%] mr-20">
//               <h1 className="font-normal font-bubblegum text-[40px]">
//                 Look Our Collection
//               </h1>
//               <p className="font-normal font-abeezee text-base text-center">
//                 A brand new wave of collectibles is about to hit the Grades
//                 Blockchain. There are a set of more than 1000 unique NFT
//                 Collections you have been waiting for.
//               </p>
//             </div>
//           </div>
//         </div>
//         <Image
//           src={RoundNftImg}
//           alt="img"
//           className="absolute  bottom-[-50%] transform -translate-x-1/2 custom-rotate z-20"
//         />
//       </div>
//       <div className="container flex flex-col items-center gap-20 mt-20">
//         <div className="grid grid-cols-4 gap-7">
//           {nftData.map((nft, index) => (
//             <NftCard
//               key={index}
//               status={nft.status}
//               name={nft.name}
//               userName={nft.userName}
//               price={nft.price}
//               available={nft.available}
//               image={nft.image}
//             />
//           ))}
//         </div>
//         <Button className=" bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
//           Explore Collections
//         </Button>
//         {/* <Button className=" bg-[#1cbbbbbb] text-lg text-black font-bubblegum w-[290px]">Explore Collections</Button> */}
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import NftCard from "@/components/nft-card";
import NftImg1 from "@/public/images/nft-img.png";
import NftImg2 from "@/public/images/nft-img2.png";
import Button from "../button";
import NftMarque from "../nft-marque";
import AstronautImg from "@/public/images/astronaut-img.png";
import RoundNftImg from "@/public/images/round-nft-img.png";
import CompanyLogo from "@/public/images/Grades-Logo.png";
import RainbowAnimation from "@/public/images/rotating-rainbow-animation.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="hidden lg:block w-full">
        <div className="relative w-full h-[375px] flex flex-col items-center overflow-hidden border-b">
          <div className="flex h-full w-full items-center">
            <div className="w-full h-full">
              <Lottie
                animationData={RainbowAnimation}
                loop={true}
                className="h-full w-full object-cover"
              />
              <Image
                src={AstronautImg}
                alt="Astronaut"
                className="w-[150px] absolute bottom-10 left-24"
              />
              <Link href="/">
                <Image
                  src={CompanyLogo}
                  alt="Company Logo"
                  className="w-[110px] lg:w-[300px] absolute top-10 left-[250px]"
                />
              </Link>
            </div>
            <div className="w-full h-full flex items-center justify-end border-l">
              <div className="flex flex-col justify-center items-center gap-20 w-[60%] mr-20">
                <h1 className="font-bubblegum text-[40px]">
                  Look Our Collection
                </h1>
                <p className="font-abeezee text-base text-center">
                  A brand new wave of collectibles is about to hit the Grades
                  Blockchain. There are a set of more than 1000 unique NFT
                  Collections you have been waiting for.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={RoundNftImg}
            alt="Round NFT"
            className="absolute bottom-[-50%] transform -translate-x-1/2 custom-rotate z-20"
          />
        </div>
      </div>
      {/* mobile screen animation section */}
      <div className="container py-10  border-b w-full lg:hidden">
        <div className=" relative flex">
          <Image
            src={AstronautImg}
            alt="img"
            className="w-[68px] absolute -top-4"
          />
          <div className="w-full flex flex-col items-end gap-14">
            <h1 className="font-bubblegum text-3xl">Look Our Collection</h1>
            <p className="font-abeezee text-base text-center">
              A brand new wave of collectibles is about to hit the Grades
              Blockchain. There are a set of more than 1000 unique NFT
              Collections you have been waiting for.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <div className="container flex flex-col items-center gap-20 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
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
          <Button className="bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
            Explore Collections
          </Button>
        </div>
      </div>
      {/* mobile nft card section */}
      <div className=" container lg:hidden w-full h-full">
        <div className=" flex flex-col items-center gap-10  py-10">
          <Swiper
            // modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={50}
            // navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="w-[80%] pt-10"
          >
            {nftData.map((nft, index) => (
              <SwiperSlide key={index}>
                <NftCard
                  status={nft.status}
                  name={nft.name}
                  userName={nft.userName}
                  price={nft.price}
                  available={nft.available}
                  image={nft.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Button className="bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
            Explore Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
