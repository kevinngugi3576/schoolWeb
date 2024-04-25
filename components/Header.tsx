"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { navigation } from "@/app/constants";
import { ModeToggle } from "./ModeToggle";
import HamburgerMenu from "@/components/mobileMenu/Header";

import { useRouter } from "next/navigation";
import Hamburger from "hamburger-react";

const Header = () => {
  const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState<any>(false);

  const ToggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };
  const HandleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div
      className={`relative top-0 left-0  z-50 w-full border-b  backdrop-blur-lg lg:backdrop-blur-sm
      `}
    >
      <div className="flex items-center px-12 lg:px-8 max-lg:py-4 ">
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={100}
          className="hover:animate-spin"
        />
        <h1 className="text-2xl font-bold uppercase ">ST.Anthony Highschool</h1>
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          }  relative bottom-0 left-0 top-5 lg:static lg:flex lg:mx-auto`}
        >
          <div className="relative flex items-center justify-center m-auto z-2 lg:flex-row ">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`block relative font-code text-md uppercase  transition-color hover:text-pink-900 shadow-indigo-500/50
                  ${item.onlyMobile ? "lg:hidden" : ""}
                 px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold transtion  duration-150 ease-in-out hover:-translate-y-3
                } `}
              >
                {item.title}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-white bg-gradient-to-r mr-9   hover:  transtion hover:-translate-y-3 uppercase  from-cyan-400  to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              signin
            </button>

            <ModeToggle />
          </div>
          <HamburgerMenu />
        </nav>
        <div className="ml-auto lg:hidden">
          <Hamburger onToggle={ToggleNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Header;
