// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import CompanyLogo from "@/public/images/Grades-Logo.png";
// import Button from "./button";

// export default function header() {
//   return (
//     <header className=" w-full py-5">
//       <nav className="container w-full  flex justify-between items-center">
//         <Link href={"/"}>
//           <Image src={CompanyLogo} alt="logo" className="w-[200px]" />
//         </Link>
//         <ul className="flex uppercase gap-[48px] font-abeezee text-lg text-black ">
//           <li className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary">home</li>
//           <li className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary">MARKETPLACE</li>
//           <li className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary">DASHBOARD</li>
//           <li className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary">ABOUT</li>
//         </ul>
//         <div className="flex items-center gap-[22px] text-lg font-abeezee">
//           <span className="cursor-pointer">Get Notified</span>
//           <Button className="bg-background text-primary">Log in</Button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import CompanyLogo from "@/public/images/Grades-Logo.png";
// import Button from "./button";

// const navItems = {
//   home: "/",
//   marketplace: "/marketplace",
//   dashboard: "/dashboard",
//   about: "/about",
// };

// export default function Header() {
//   return (
//     <header className="w-full py-5">
//       <nav className="container flex justify-between items-center">
//         <Link href="/">
//           <Image src={CompanyLogo} alt="logo" className="w-48" />
//         </Link>
//         <ul className="flex uppercase gap-12 font-abeezee text-lg text-black">
//           {Object.entries(navItems).map(([label, path]) => (
//             <li
//               key={label}
//               className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary"
//             >
//               <Link href={path}>{label}</Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-6 text-lg font-abeezee">
//           <span className="cursor-pointer">Get Notified</span>
//           <Button className="bg-background text-primary">Log in</Button>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "@/public/images/Grades-Logo.png";
import Button from "./button";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "MARKETPLACE", path: "/marketplace" },
  { label: "DASHBOARD", path: "/dashboard" },
  { label: "ABOUT", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('HOME');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full p-5 transition-transform duration-300 z-40 ${lastScrollY > 50 && "backdrop-blur-md"} ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="container flex justify-between items-center">
        <Link href="/">
          <Image src={CompanyLogo} alt="logo" className="md:w-48 w-16" />
        </Link>
        <div className="flex items-center -mr-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
            type="button"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-10 list-none ${isOpen ? 'block' : 'hidden'} absolute left-0 top-16 w-full md:static md:w-auto`}>
          {navItems.map(({ label, path }) => (
            <li key={label} className="relative">
              <Link href={path}
                  className={`text-base font-normal text-black list-none hover:text-gray-900 ${active === label ? 'active' : ''}`}
                  onClick={() => setActive(label)}
                >
                  {label}
              </Link>
              {active === label && <img src="/images/Vector.png" alt="Vector" className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 md:block hidden" />}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-6 text-lg font-abeezee">
        <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-5 py-1 text-base font-bold text-black transition duration-100 ">Log in</span>
    </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
