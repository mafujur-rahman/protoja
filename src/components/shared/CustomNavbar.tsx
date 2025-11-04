"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import CustomNavButton from "../gsap/nav-button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathName = usePathname();

  const shouldHideNavbar = /^\/blogs\/[^\/]+$/.test(pathName) || pathName.startsWith("/admin-dashboard");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide top, show bottom
        setIsHidden(true);
      } else {
        // Scrolling up - show top, hide bottom
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = () => (
    <div
      className={`px-4 sm:px-6 md:px-20 $ max-w-[1440px] ${
        shouldHideNavbar === true ? "hidden" : "block"
      } mx-auto`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1712_1840)">
              <rect
                y="0.107422"
                width="33.7847"
                height="33.7847"
                rx="16.8923"
                fill="#F76F00"
              />
              <path
                d="M24.1375 14.3124C24.1375 15.3933 23.7409 16.4197 23.0722 17.2283C22.4113 18.0215 21.486 18.5891 20.1874 18.7912C19.6198 17.8271 18.71 17.3139 17.6447 16.9095C17.9091 16.6607 18.1346 16.4819 18.3212 16.2719C18.9044 15.611 19.0522 14.849 18.7022 14.0403C18.3523 13.2394 17.707 12.8195 16.8361 12.7806C16.0118 12.7495 15.2265 13.2627 14.9155 14.0325C14.5733 14.8645 14.7133 15.6188 15.312 16.2875C15.5064 16.5052 15.7241 16.7074 15.9574 16.9406C15.693 17.065 15.4364 17.1817 15.1876 17.3061C14.5189 17.6327 13.9824 18.1148 13.578 18.7368C13.5469 18.7835 13.5236 18.8301 13.5158 18.869V21.2328C13.0571 20.9918 12.5283 20.8596 11.9762 20.8596C11.3464 20.8596 10.7632 21.0307 10.2578 21.3339V10.5101C10.2578 10.0047 10.53 9.75586 11.0509 9.75586H19.1221C20.8483 9.75586 21.968 10.2613 22.7767 11.07C23.6321 11.9175 24.1375 13.0916 24.1375 14.3124Z"
                fill="#EDEDED"
              />
              <path
                d="M12.0319 26.2611C13.3203 26.2611 14.3647 25.2167 14.3647 23.9284C14.3647 22.6401 13.3203 21.5957 12.0319 21.5957C10.7436 21.5957 9.69922 22.6401 9.69922 23.9284C9.69922 25.2167 10.7436 26.2611 12.0319 26.2611Z"
                fill="#161616"
              />
              <circle
                opacity="0.2"
                cx="28.7894"
                cy="10.6819"
                r="18.5081"
                fill="#3C3C3C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1712_1840">
                <rect
                  y="0.107422"
                  width="43.7847"
                  height="43.7847"
                  rx="16.8923"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="text-white text-2xl font-bold ml-4">Protoja</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "SERVICE", path: "/service" },
              { name: "WORKS", path: "/works" },
              { name: "PRICING", path: "/pricing" },
              { name: "ABOUT US", path: "/about-us" },
              { name: "BLOG", path: "/blogs" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-white hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  <span className="flex text-xl items-center">
                    {item.name === "HOME" ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-1.5"></span>
                    ) : null}
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CustomNavButton
            href={"/contact"}
            buttonBg="#F76F00"
            textColor="#1E1E1E"
            label={"Let's Work"}
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-4 py-5 space-y-4">
            {[
              { name: "HOME", path: "/" },
              { name: "SERVICE", path: "/service" },
              { name: "WORKS", path: "/works" },
              { name: "PRICING", path: "/pricing" },
              { name: "ABOUT US", path: "/about-us" },
              { name: "BLOG", path: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-white hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  {item.name === "HOME" ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-1.5"></span>
                  ) : null}
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full ${
          shouldHideNavbar === true ? "hidden" : "block"
        } z-50 transition-transform duration-300 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-md shadow-lg"
            : "py-4 bg-[rgba(22,22,22,0.2)] backdrop-blur-sm"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <NavContent />
      </nav>

      {/* Bottom Navbar */}
      <nav
        className={`fixed bottom-0 md:w-full z-40 transition-transform duration-300 ${
          scrolled ? "py-3 bg-transparent shadow-lg" : "py-4 "
        } ${isHidden ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="sm:px-6 md:px-20 hidden md:block mx-auto">
          <div className="flex max-w-[590px] mx-auto justify-center items-center">
            <div className="max-w-[608px] h-[90px] mx-auto bg-cover bg-no-repeat bg-[url('/footer-2.png')]  rounded-full flex items-center justify-between px-6">
              <div className=" md:flex mx-auto items-center justify-center">
                <ul className="flex md:space-x-12">
                  {[
                    { name: "HOME", path: "/" },
                    { name: "SERVICE", path: "/service" },
                    { name: "WORKS", path: "/works" },
                    { name: "ABOUT US", path: "/about-us" },
                    { name: "BLOG", path: "/blog" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="text-white hover:text-orange-500 transition-colors text-sm font-medium"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Image src={"/f-1.png"} width={90} height={90} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
