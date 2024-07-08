import React from "react";
import Image from "next/image";
import BlueGradientImg from "@/public/images/blue-gradient-img.png";
import MobileBlueGradientImg from "@/public/images/mobile-blue-gradient-img.png";
import UniqueEcosystemImg from "@/public/images/Unique-Ecosystem-img.png";
import NftCollectionImg from "@/public/images/Nft-Collection-img.png";
import GradePopImg from "@/public/images/Grade-Pop-img.png";
import RewardingImg from "@/public/images/Rewarding-Game-img.png";
import MobileRewardingImg from "@/public/images/Mobile-Rewarding-Game-img.png";
import Button from "../button";

export default function NftCollection() {
  return (
    <section className="relative h-full w-full flex flex-col items-center ">
      <Image src={BlueGradientImg} alt="img" className="hidden lg:block" />
      <Image src={MobileBlueGradientImg} alt="img" className="lg:hidden" />

      <div className="bg-blue w-full pb-20">
        <div className="container flex flex-col items-center text-center gap-10">
          <p className="text-base lg:text-2xl font-normal w-full lg:w-[85%]">
            The &quot;Grades&quot; NFT collection represents a pioneering initiative that
            combines the allure of digital collectibles with the profound impact
            of education, creating a unique ecosystem where learning and
            collecting merge into a singular, rewarding experience.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6">
            <div className="grid grid-cols-2 w-full lg:w-1/2 gap-4 lg:gap-6">
              <div className="bg-[#FFDFE3] flex flex-col items-center gap-9 lg:gap-[72px] py-3 rounded-3xl overflow-hidden">
                <Image src={UniqueEcosystemImg} alt="img" />
                <h1 className="text-3xl lg:text-5xl font-normal  text-center">
                  Unique Ecosystem
                </h1>
              </div>
              <div className="bg-[#FFE9AF] flex flex-col items-center gap-9 lg:gap-[72px] py-3 rounded-3xl overflow-hidden">
                <Image src={NftCollectionImg} alt="img" />
                <h1 className="text-3xl lg:text-5xl font-normal text-center">
                  GRADES NFT Collection
                </h1>
              </div>
            </div>
            <div className=" relative bg-[#B3D5FF] p-5 flex justify-start items-center rounded-3xl w-full lg:w-1/2 overflow-hidden">
              <div className=" flex flex-col gap-5 items-start z-20 w-full  lg:w-[50%]">
                <Image src={GradePopImg} alt="img" className="" />
                <p className="text-base font-abeezee text-[#3A3A3A] text-start  w-[85%] ">
                  Connect your wallet to start playing & compete on leaderboard
                </p>
                <Button className="bg-primary text-background">
                  Connect Wallet
                </Button>
              </div>
              <Image src={MobileRewardingImg} alt="img" className="  absolute -right-5 lg:hidden "/>
              <Image src={RewardingImg} alt="img" className=" absolute -right-5  h-full hidden lg:block"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// Hannan Optimized code 

// import React from "react";
// import Image from "next/image";
// import BlueGradientImg from "@/public/images/blue-gradient-img.png";
// import UniqueEcosystemImg from "@/public/images/Unique-Ecosystem-img.png";
// import NftCollectionImg from "@/public/images/Nft-Collection-img.png";
// import GradePopImg from "@/public/images/Grade-Pop-img.png";
// import RewardingImg from "@/public/images/Rewarding-Game-img.png";
// import Button from "../button";

// export default function NftCollection() {
//   return (
//     <section className="relative h-full w-full flex flex-col items-center">
//       <Image src={BlueGradientImg} alt="img" className="" />

//       <div className="bg-blue w-full pb-20">
//         <div className="container flex flex-col items-center text-center gap-10">
//           <p className="text-2xl font-normal w-[85%]">
//             The &quot;Grades&quot; NFT collection represents a pioneering initiative that
//             combines the allure of digital collectibles with the profound impact
//             of education, creating a unique ecosystem where learning and
//             collecting merge into a singular, rewarding experience.
//           </p>
//           <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6">
//             <div className="grid md:grid-cols-2 md:w-1/2 gap-6">
//               <div className="bg-[#FFDFE3] flex flex-col items-center gap-[72px] py-3 rounded-3xl overflow-hidden">
//                 <Image src={UniqueEcosystemImg} alt="img" />
//                 <h1 className="text-5xl font-normal  text-center">
//                   Unique Ecosystem
//                 </h1>
//               </div>
//               <div className="bg-[#FFE9AF] flex flex-col items-center gap-[72px] py-3 rounded-3xl overflow-hidden">
//                 <Image src={NftCollectionImg} alt="img" />
//                 <h1 className="text-5xl font-normal text-center">
//                   GRADES NFT Collection
//                 </h1>
//               </div>
//             </div>
//             <div className="bg-[#B3D5FF] flex flex-col md:flex-row justify-center items-center rounded-3xl w-full md:w-1/2 overflow-hidden">
//               <div className="flex flex-col gap-5 items-center">
//                 <Image src={GradePopImg} alt="img" className="" />
//                 <p className="text-base font-abeezee text-[#3A3A3A]">
//                   Connect your wallet to start playing & compete on leaderboard
//                 </p>
//                 <Button className="bg-primary text-background">
//                   Connect Wallet
//                 </Button>
//               </div>
//               <Image src={RewardingImg} alt="img" className="bg-cover"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }