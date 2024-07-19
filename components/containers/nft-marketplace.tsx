"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Link from "next/link";
import Button from "../button";
import NftMarque from "../nft-marque";
import AstronautImg from "@/public/images/astronaut-img.png";
import RoundNftImg from "@/public/images/round-nft-img.png";
import CompanyLogo from "@/public/images/Grades-Logo.png";
import RainbowAnimation from "@/public/images/rotating-rainbow-animation.json";
import PinImg from "@/public/icons/pin-icon.svg"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MediaRenderer, useReadContract } from "thirdweb/react";
import { getNFTs, totalSupply, ownerOf, getNFT } from "thirdweb/extensions/erc721";
import client from "../../app/client";
import { NFT_COLLECTION } from "../../const/contracts";
import { NFT } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";

const nftsPerPage = 8;

export default function NftMarketplace() {
  const [page, setPage] = useState(1);
  const [collectionNFTs, setCollectionNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalNFTCount, setTotalNFTCount] = useState<number>(0);

  const { data: contractMetadata, isLoading: isMetadataLoading } = useReadContract(getContractMetadata, {
    contract: NFT_COLLECTION,
  });

  useEffect(() => {
    const fetchTotalSupply = async () => {
      const total = await totalSupply({ contract: NFT_COLLECTION });
      setTotalNFTCount(Number(total));
    };

    fetchTotalSupply();
  }, []);

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      try {
        const nfts = await getNFTs({
          contract: NFT_COLLECTION,
          start: (page - 1) * nftsPerPage,
          count: nftsPerPage,
        });

        const nftsWithOwners = await Promise.all(
          nfts.map(async (nft) => {
            let owner;
            try {
              owner = await ownerOf({
                contract: NFT_COLLECTION,
                tokenId: nft.id,
              });
            } catch (e) {
              owner = null;
            }
            return { ...nft, owner };
          })
        );

        setCollectionNFTs(nftsWithOwners);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [page]);

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
                width={150}
                height={150}
              />
              <Link href="/">
                <Image
                  src={CompanyLogo}
                  alt="Company Logo"
                  className="w-[110px] lg:w-[300px] absolute top-10 left-[250px]"
                  width={300}
                  height={300}
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
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="container py-10 border-b w-full lg:hidden">
        <div className="relative flex">
          <Image
            src={AstronautImg}
            alt="img"
            className="w-[68px] absolute -top-4"
            width={68}
            height={68}
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
          {loading || isMetadataLoading ? (
            <div className="mx-auto flex flex-wrap items-center justify-center">
              {Array.from({ length: nftsPerPage }).map((_, i) => (
                <div
                  className="!h-60 !w-60 animate-pulse rounded-lg bg-gray-800"
                  key={i}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              {collectionNFTs.map((nft, index) => (
                <NFTComponent
                  key={index}
                  nft={nft}
                  tokenId={nft.id}
                  owner={nft.owner}
                />
              ))}
            </div>
          )}
          <Link href="/marketplace/collection">
            <Button className="bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
              Explore Collections
            </Button>
          </Link>
        </div>
      </div>
      <div className="container lg:hidden w-full h-full">
        <div className="flex flex-col items-center gap-10 py-10">
          <Swiper
            loop={true}
            spaceBetween={50}
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
            {collectionNFTs.map((nft, index) => (
              <SwiperSlide key={index}>
                <NFTComponent
                  nft={nft}
                  tokenId={nft.id}
                  owner={nft.owner}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Link href="/marketplace/collection">
            <Button className="bg-[#fdcb44] text-lg text-black font-bubblegum w-[290px]">
              Explore Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

type NFTComponentProps = {
  nft: NFT;
  tokenId: bigint;
  owner: string | null;
};

function NFTComponent({ nft, tokenId, owner }: NFTComponentProps) {
  const [nftData, setNFTData] = useState<NFT | null>(nft);

  useEffect(() => {
    if (nftData?.id !== tokenId) {
      getNFT({
        contract: NFT_COLLECTION,
        tokenId: tokenId,
      }).then((fetchedNft: NFT) => setNFTData(fetchedNft));
    }
  }, [tokenId, nftData?.id]);

  if (!nftData) {
    return <LoadingNFTComponent />;
  }

  const truncatedOwner = owner
    ? `${owner.slice(0, 6)}...${owner.slice(-4)}`
    : "Not Claimed";

  return (
    <div className={`hover:shadow-lg flex flex-col w-[300px] h-[459px] justify-stretch border border-2 rounded-lg text-black ${
      owner ? "bg-white border-black" : "bg-[#E4E4E4] border-[#C1C1C1]"
    }`}>
      <div className="relative w-full h-[31px]">
        <Image src={PinImg} alt="Pin" className="absolute top-[-14px] left-1/2 transform -translate-x-1/2" width={19} height={31} />
      </div>
      <div className={`relative w-full h-[308px] text-black flex justify-center items-center ${owner ? "bg-white" : "bg-[#E4E4E4]"
        }`}>
      {nft.metadata.image && (
    <>
      {/*
      <MediaRenderer
        src={nft.metadata.image}
        client={client}
        className="p-4 w-[347px] h-[308px] object-center rounded-md"
      />
      */}
      <MediaRenderer
        src="/marketplace/300.png" // This is a hardcoded image path
        client={client}
        className="p-4 w-[347px] h-[308px] object-center rounded-md"
      />
    </>
  )}
      </div>
      <div className="flex items-center justify-between flex-1 w-full px-3">
        <div className="flex flex-col justify-center py-3">
          <p className="max-w-full overflow-hidden text-lg text-black text-ellipsis whitespace-nowrap">
            {nftData.metadata.name}
          </p>
          <p className="text-sm font-semibold text-black/60">
            #{nftData.id.toString()}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <p
          className={`fold-bold relative inline-block h-full w-3/4 rounded border-2 px-5 py-1 text-base font-bold text-black transition duration-100 ${
            owner ? "bg-green-500 text-white border-black" : "bg-[#E4E4E4] text-black border-[#C1C1C1]"
          }`}
        >
          {owner ? `Owner: ${truncatedOwner}` : "Not Claimed"}
        </p>
      </div>
    </div>
  );
}

function LoadingNFTComponent() {
  return (
    <div className="w-full h-[350px] bg-gray-800 animate-pulse"></div>
  );
}
