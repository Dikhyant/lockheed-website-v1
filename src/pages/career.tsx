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
    </div>
  );
};

export default CareerPage;
