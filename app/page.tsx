import Hero from "@/components/containers/hero";
import AboutUs from "@/components/containers/about-us";
import NftCollection from "@/components/containers/nft-collection";
import NftMarketplace from "@/components/containers/nft-marketplace";
import JoinUs from "@/components/containers/join-us";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs/>
      <NftCollection/>
      {/* <NftMarketplace/> */}
      <JoinUs/>
      
    </main>
  );
}
