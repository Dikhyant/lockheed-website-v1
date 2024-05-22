import React from "react";
import Header from "../components/common/Header/Header";
import Banner from "../components/common/Banner/Banner";
import SearchJobsForm from "../components/SearchJobsForm/SearchJobsForm";
import CareerAccordion from "../components/CareerAccordion/CareerAccordion";
import BuiltSection from "../components/career/BuiltSection/BuiltSection";

const CareerPage: React.FC<any> = () => {
  return (
    <div className="h-[200vh] bg-white">
      <Header />
      <Banner />
      <SearchJobsForm />
      <CareerAccordion />
      <BuiltSection />
      <div className="max-w-[1600px] mx-auto py-12 flex justify-center">
        <a className="inline-block bg-arrow-right-solid-white bg-no-repeat bg-[right_1em_center] bg-[length:1rem] font-din text-white text-base font-bold leading-6 uppercase pl-[15px] pt-3 pr-12 pb-[15px] bg-brand-medium-persian-blue border-brand-medium-persian-blue border-2">
          Why join us? Learn more
        </a>
      </div>
    </div>
  );
};

export default CareerPage;
