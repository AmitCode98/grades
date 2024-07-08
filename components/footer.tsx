import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterBgImg from "@/public/images/footer-bg-img.png";
import CompanyLogo from "@/public/images/Grades-Logo.png";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordIcon from "@/public/icons/discord-icon.svg";
import XIcon from "@/public/icons/x-icon.svg";

const socialIcons = [
  { src: TelegramIcon, alt: "Telegram icon", href: "https://telegram.org" },
  { src: DiscordIcon, alt: "Discord icon", href: "https://discord.com" },
  { src: XIcon, alt: "X icon", href: "https://x.com" },
  { src: InstagramIcon, alt: "Instagram icon", href: "https://instagram.com" },
];

const marketplaceLinks = ["Help", "How it Works", "Articles", "Explore"];
const otherLinks = ["Token", "API", "Big Bounty", "Become Partners"];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="relative container w-full bg-background py-6 flex justify-center border-b">
        <Image src={FooterBgImg} alt="Footer background image" className="" />
        <div className="container w-full h-full absolute top-0">
          <div className="grid grid-cols-2 w-full h-full">
            <div className="w-full flex flex-col gap-[125px]">
              <Link href="/">
                <Image
                  src={CompanyLogo}
                  alt="Company logo"
                  className="w-48 pt-6"
                />
              </Link>
              <div className="flex flex-col gap-10">
                <h1 className="text-[40px] font-abeezee">
                  Follow Us On Social Media
                </h1>
                <p className="text-sm font-abeezee w-[80%]">
                  A brand new wave of collectibles is about to hit the Grades
                  Blockchain. There are a set of more than 1000 unique NFT
                  Collections you have been waiting for.
                </p>
              </div>
            </div>
            <div className="w-full border-l border-l-black">
              <div className="flex flex-col items-end gap-16 pt-16 w-full">
                <div className="flex gap-8">
                  {socialIcons.map((icon, index) => (
                    <Link
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        className="w-9 h-9 cursor-pointer"
                      />
                    </Link>
                  ))}
                </div>
                <div className="flex gap-[140px]">
                  <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-abeezee">MARKETPLACE</h1>
                    <div className="flex flex-col gap-4 text-base font-abeezee cursor-pointer">
                      {marketplaceLinks.map((link, index) => (
                        <p key={index}>{link}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-abeezee">Links</h1>
                    <div className="flex flex-col gap-4 text-base font-abeezee cursor-pointer">
                      {otherLinks.map((link, index) => (
                        <p key={index}>{link}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-6">
            <div className="border rounded-2xl p-4 flex items-center justify-between">
              <p className="font-abeezee text-sm">© 2024 Grades</p>
              <div className="flex gap-7">
                <p className="text-sm">Privacy Policy</p>
                <p className="text-sm">Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
