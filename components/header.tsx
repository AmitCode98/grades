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
  { label: "home", path: "/" },
  { label: "marketplace", path: "/marketplace" },
  { label: "dashboard", path: "/dashboard" },
  { label: "about", path: "/about" },
];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down
        setShowNavbar(false);
      } else {
        // If scrolling up
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
    <header
      className={`fixed w-full p-5 transition-transform duration-300 z-40 ${
        lastScrollY > 50 && "backdrop-blur-md"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container flex justify-between items-center">
        <Link href="/">
          <Image src={CompanyLogo} alt="logo" className="w-48" />
        </Link>
        <ul className="flex uppercase gap-12 font-abeezee text-lg text-black">
          {navItems.map(({ label, path }) => (
            <li
              key={label}
              className="hover:text-primary cursor-pointer hover:border-b hover:border-b-primary"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 text-lg font-abeezee">
          <span className="cursor-pointer">Get Notified</span>
          <Button className="bg-background text-primary">Log in</Button>
        </div>
      </nav>
    </header>
  );
}
