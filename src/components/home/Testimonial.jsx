import * as React from "react";
import Link from "next/link";
import { TextReveal } from "@/components/magicui/text-reveal";
export default function Testimonial() {
  return (
    <div className="bg-[FAFAFA] p-20 max-w-[1920px] mx-auto">
      <div className="flex justify-between">
        <div className="w-1/5">
          <p className="md:text-2xl text-black">PROTOJA PARTNERSHIP</p>
          <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
            <p className="md:text-xl text-black mt-4">
            Reliable, scalable, and expert design support—whenever you need it.
            </p>
          </div>
        </div>
        <div className="w-4/5">
          <TextReveal>
          Build a long-term design team that grows with your business. Get expert UI/UX solutions with flexible pricing, full transparency, and no hidden fees.
          </TextReveal>
        </div>
      </div>

      <div className="">
        {/* <PricingCards/> */}
       
      </div>
    </div>
  );
}
