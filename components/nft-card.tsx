import React from "react";
import Image from "next/image";
import EthIcon from "@/public/icons/eth-icon.svg";
import PinIcon from "@/public/icons/pin-icon.svg";
import AvailableIcon from "@/public/icons/avaliable-icon.svg";
import NotAvailableIcon from "@/public/icons/not-available-icon.svg";
import UserImg from "@/public/images/user-img.png";
import Button from "@/components/button"

const NftCard = ({ status, name, userName, price, available, image }:any) => {
  const StatusIcon = available ? AvailableIcon : NotAvailableIcon;
  const buttonText = available ? "Buy" : "Sold Out";
  const buttonColor = available ? "bg-primary" : "bg-gray";

  return (
    <div className="p-6 border border-black rounded-xl">
      <div className="relative flex flex-col items-center gap-4">
        <Image src={PinIcon} alt="pin icon" className="absolute -top-[50px] w-[22px]" />
        <div className="relative">
          <Image src={image} alt="NFT img" className="w-[242px] h-[270px] rounded-lg" />
          <div className="absolute top-2 left-2 px-3 py-2 rounded-full bg-background flex items-center justify-center gap-1">
            <Image src={StatusIcon} alt="status icon" className="w-[17px]" />
            <p className="text-[13px] font-abeezee text-black uppercase">
              {status}
            </p>
          </div>
        </div>
        {/* <h1 className="font-normal font-abeezee text-2xl text-black text-nowra text-center bg-pink-500 w-full"> */}
        <h1 className="font-normal font-abeezee text-2xl text-black text-nowrap">
          {name}
        </h1>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 w-[130px] h-full">
            <Image src={UserImg} alt="user img" className="w-[34px] h-[34px]" />
            <h2 className="text-[#676767] text-sm font-abeezee overflow-hidden capitalize">
              {userName}
            </h2>
          </div>
          <div className="h-full flex items-center gap-2">
            <Image src={EthIcon} alt="Ethereum icon img" className="w-[14px] h-7" />
            <h2 className="text-base font-abeezee font-medium text-black">
              {price} ETH
            </h2>
          </div>
        </div>
        <Button className={`${buttonColor} text-background w-full capitalize`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default NftCard;
