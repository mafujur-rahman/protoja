import React from "react";
import ServiceHero from "./components/hero";
import CompaniesAndIndividual from "./components/companies-and-individual";
import NativeUser from "./components/native-user";
import MobileService from "./components/mobile-service";
import MobileAppSolution from "./components/mobile-app-solution";
import ClientExpectation from "./components/client-expectation";
import UnloackApp from "./components/unlocak-app";
import { Box, Container } from "@mui/material";
import Faq from "@/components/home/Faq";
import UnlockYourDesign from "@/components/home/unlock-your-design";
import ClientSolution from './components/client-solution'

const Service = () => {
  return (
    <>
      <ServiceHero />
      <CompaniesAndIndividual />
      <MobileService />
      <NativeUser />
      <MobileAppSolution />
      <ClientSolution/>
      <ClientExpectation />
      <UnloackApp />
      <Faq />
      <UnlockYourDesign/>
    </>
  );
};

export default Service;
