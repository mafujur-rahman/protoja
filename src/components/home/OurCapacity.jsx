import * as React from "react";
export default function OurCapacity() {
  return (
    <div className="bg-[FAFAFA] p-20 max-w-[1440px] px-4 sm:px-6 md:px-20 mx-auto ">
      <div className="md:flex justify-between">
        <div className="md:w-1/5">
          <p className="md:text-2xl text-black">Our capacity</p>
          <div className="w-full border-t-2 border-[#CBCBCB] mt-4">
            <p className="md:text-xl text-black mt-4">
              Our capabilities, your creative advantage.
            </p>
          </div>
        </div>
        <div className="md:w-3/5">
          <h1
            className="md:text-7xl text-4xl font-bold text-black"
            style={{ lineHeight: "1.5" }}
          >
            Get All-in-One Creative Solutions with Our Tailored Packages
          </h1>
        </div>
      </div>

      <div className="flex max-w-[1440px] mx-auto mt-20 md:h-[550px] rounded-3xl bg-[url('/assets/capacityListBg.svg')] bg-cover md:p-20 justify-between gap-8">
        <div className="w-1/4">
          <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
            {" "}
            {/* Added list-disc and pl-6 */}
            <li className="mt-10">1 Senior UX Consultant</li>
            <li className="mt-10">1 Product Designer</li>
            <li className="mt-10">Personalized recommendations</li>
            <li className="mt-10">24/7 Figma collaboration</li>
            <li className="mt-10">1 Senior UX Consultant</li>
            <li className="mt-10">1 Product Designer</li>
            <li className="mt-10">Personalized recommendations</li>
            <li className="mt-10">24/7 Figma collaboration</li>
          </ul>
        </div>

        <div className="w-1/4">
          <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
            {" "}
            {/* Added list-disc and pl-6 */}
            <li className="mt-10">Website Designs</li>
            <li className="mt-10">Mobile App Designs</li>
            <li className="mt-10">Landing Page Design</li>
            <li className="mt-10">Dashboard Design</li>
            <li className="mt-10">SaaS Design</li>
            <li className="mt-10">Product Design</li>
            <li className="mt-10">Web App Designs</li>
            <li className="mt-10">UX Audit</li>
          </ul>
        </div>

        <div className="w-1/4">
          <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
            {" "}
            {/* Added list-disc and pl-6 */}
            <li className="mt-10">Logo Designs</li>
            <li className="mt-10">Branding & Visual Identity</li>
            <li className="mt-10">eBook & Digital Reports</li>
            <li className="mt-10">Illustration Design</li>
            <li className="mt-10">Brand Identity</li>
            <li className="mt-10">Icon Sets</li>
            <li className="mt-10">Packaging, Merch, Brochures, and any collaterals</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="text-white md:text-xl list-disc pl-6 space-y-4 ">
            {" "}
            {/* Added list-disc and pl-6 */}
            <li className="mt-10">Digital ads & Social media</li>
            <li className="mt-10">Marketing Materials</li>
            <li className="mt-10">Email Templates</li>
            <li className="mt-10">Pitches & Presentations</li>
            <li className="mt-10">Mobile app development</li>
            <li className="mt-10">Product Design</li>
            <li className="mt-10">Wordpress Development</li>
            <li className="mt-10">Front-end Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
