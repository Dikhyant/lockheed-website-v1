import React from "react";
import CarouselAndTextGroup from "../CarouselAndTextGroup/CarouselAndTextGroup";

const FeaturedCareers: React.FC<any> = () => {
  return (
    <CarouselAndTextGroup
      title={" Featured Careers   ___"}
      bigText={"Your unique skillset can help redefine defense technology."}
      smallText={
        "Here, we don't just embrace the future, we engineer it. And to deliver the transformative solutions our customers rely on, we're hiring across a wide array of exciting, high-growth career fields."
      }
      buttonText={"View all career areas"}
    />
  );
};

export default FeaturedCareers;
