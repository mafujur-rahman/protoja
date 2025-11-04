import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const RequestAdemoButton = () => {
  return (
    <button>
      <Link
        href="/contact"
        className="px-4 sm:px-5 md:px-6 py-[10px] md:py-3 gap-2 bg-white text-black rounded-full flex items-center text-base md:text-xl font-medium hover:bg-gray-100 transition-colors"
      >
        <Image src={'/about-us/whatsapp.svg'} width={24} height={24} alt="" />
        Chat with us
      </Link>
    </button>
  );
};

export default RequestAdemoButton;
