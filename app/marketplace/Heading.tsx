import React from 'react'
import Image from 'next/image'

const Heading = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-white dark:bg-gray-800 p-4 mt-0 md:mt-20">
<div className="border border-gray-200 p-4 rounded-md shadow-lg shadow-orange-300 flex items-end justify-center w-full">
<span className="text-4xl md:text-6xl font-semibold dark:text-white">M</span>
        <Image src='/marketplace/Layer7.png' height={50} width={50} alt='A' className="animate-bounce" />
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">R</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">K</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">E</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">T</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">P</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">L</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">A</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">C</span>
        <span className="text-4xl md:text-6xl font-semibold dark:text-white">E</span>
      </div>
      <p className="text-gray-700 text-center text-sm md:text-base lg:text-lg max-w-md">
        Collect and trade unique academic-themed NFTs, celebrating educational achievements. Join us and be part of this exclusive digital art revolution!
      </p>
    </div>
  )
}

export default Heading
