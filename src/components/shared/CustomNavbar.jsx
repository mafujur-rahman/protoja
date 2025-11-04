import Link from "next/link";
import React from "react";
import Logo from "../icons/Logo";
import Image from "next/image";

const CustomNavbar = () => {
  return (
    <nav className="py-2.5 w-full bg-white shadow-md fixed top-0 z-50 md:sticky md:top-0">
      <div className="flex flex-wrap justify-between md:px-20">
        <Link href="/" className="flex ms-1 mt-4">
          <Logo />
          <div>
            <Image
              src="/assets/logoName.png"
              alt="logo"
              width={74.74}
              height={21.75}
              className="ms-1 mt-2"
            />
          </div>
        </Link>

        <div className="flex items-center lg:order-2">
          <div className="flex  text-black mt-4">
            <div>
              <button className="px-2 py-2 bg-orange-500 min-w-[140px] rounded-[100px]">
                Let's work
              </button>
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/scrool/arrowo.png"
                width={220}
                height={220}
                alt="arrow"
                className="w-[39px] h-[39px]"
              />
            </div>
          </div>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 md:ms-96"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 uppercase">
            <Link
              href="/"
              className="block py-2 px-3 text-black lg:p-0 lg:dark:hover:text-neutral-700"
            >
              Home
            </Link>

            <Link
              href="/service"
              className="block py-2 px-3 text-black lg:p-0 lg:dark:hover:text-neutral-700"
            >
              Service
            </Link>

            <Link
              href="/works"
              className="block py-2 px-3 text-black lg:p-0 lg:dark:hover:text-neutral-700"
            >
              Works
            </Link>

            <Link
              href="about-us"
              className="block py-2 px-3 text-black lg:p-0 lg:dark:hover:text-neutral-700"
            >
              About Us
            </Link>

            <Link
              href="#"
              className="block py-2 px-3 text-black lg:p-0 lg:dark:hover:text-neutral-700"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
