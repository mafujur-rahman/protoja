import Top from "@/components/home/Top";
import Faq from "@/components/home/Faq";
import UnlockYourDesign from "@/components/home/unlock-your-design";
import PricingPlan from "@/components/home/PricingPlan";
import Trending from "@/components/home/Trending";
import ProtoJaPartnerShip from "@/components/home/ProtojaPartnerShip";
import OurCapacity from "@/components/home/OurCapacity";
import Monial from "@/components/home/Monial";
import BuldingBrands from "@/components/home/BuldingBrands";
import BuildingBrandsCard from "@/components/home/BuildingBrandsCard";
import ServicePage from "@/components/service/service-page";
import NewService from "@/components/home/NewService";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-800">
        <Top />
      </div>
      <div className="bg-[#272727]">
        <BuldingBrands />
        <BuildingBrandsCard />
      </div>
      <div className="bg-[#272727]">
        <ServicePage />
      </div>
      <PricingPlan />
      <NewService />
      <ProtoJaPartnerShip />
      <OurCapacity />
      <Monial />
      <Faq/>
      <Trending />
      <UnlockYourDesign/>
    </>
  );
}
