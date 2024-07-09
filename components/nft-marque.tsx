// import React from "react";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";
// import EmojiImage1 from "@/public/images/emoji-1.png";
// import EmojiImage2 from "@/public/images/emoji-2.png";

// export default function NftMarque() {
//   return (
//     <div className="w-full">
//       <div className="relative w-full border-t border-b">
//         <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
//         <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
//         <Marquee>
//           <div className="flex gap-14 items-center whitespace-nowrap">
//             <div className="flex gap-14 py-6 lg:py-8 items-center whitespace-nowrap">
//               <h1 className="text-3xl lg:text-5xl font-bubblegum">
//                 NFT Marketplace
//               </h1>
//               <Image src={EmojiImage1} alt="star img" loading="lazy" />
//             </div>
//             <div className="flex gap-14 py-6 lg:py-8 items-center whitespace-nowrap">
//               <h1 className="text-3xl lg:text-5xl font-bubblegum">
//                 NFT Marketplace
//               </h1>
//               <Image src={EmojiImage2} alt="star img" loading="lazy" />
//             </div>
//             <div className="flex gap-14 py-6 lg:py-8 items-center whitespace-nowrap">
//               <h1 className="text-3xl lg:text-5xl font-bubblegum">
//                 NFT Marketplace
//               </h1>
//               <Image src={EmojiImage1} alt="star img" loading="lazy" />
//             </div>
//           </div>
//         </Marquee>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import EmojiImage1 from "@/public/images/emoji-1.png";
import EmojiImage2 from "@/public/images/emoji-2.png";

const marqueeItems = [
  { text: "NFT Marketplace", emoji: EmojiImage1 },
  { text: "NFT Marketplace", emoji: EmojiImage2 },
  { text: "NFT Marketplace", emoji: EmojiImage1 },
  { text: "NFT Marketplace", emoji: EmojiImage2 },
];

export default function NftMarquee() {
  return (
    <div className="w-full">
      <div className="relative w-full border-t border-b">
        <Marquee>
          <div className="flex gap-14 items-center whitespace-nowrap pr-14">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-14 py-6 lg:py-8 items-center whitespace-nowrap"
              >
                <h1 className="text-3xl lg:text-5xl font-bubblegum">
                  {item.text}
                </h1>
                <Image src={item.emoji} alt={`emoji ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
