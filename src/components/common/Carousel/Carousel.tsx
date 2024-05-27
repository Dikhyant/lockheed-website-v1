import React, { ReactNode } from "react";

type TCaroselProps = {
  carouselItems: ReactNode[];
};

const Carousel: React.FC<TCaroselProps> = ({ carouselItems }) => {
  return (
    <div className="w-full h-[487.612px] relative">
      <div className="w-full h-full">
        {carouselItems.map((item, index) => {
          return item;
        })}
      </div>
      <a className="bg-white rounded-full w-[50px] h-[50px] absolute bottom-[30px] right-[90px] hover:bg-brand-medium-persian-blue bg-arrow-left-solid-blue hover:cursor-pointer hover:bg-arrow-left-solid-white bg-no-repeat bg-center bg-[length:1rem]"></a>
      <a className="bg-white rounded-full w-[50px] h-[50px] absolute bottom-[30px] right-[30px] hover:bg-brand-medium-persian-blue bg-arrow-right-solid-blue hover:cursor-pointer hover:bg-arrow-right-solid-white bg-no-repeat bg-center bg-[length:1rem]"></a>
    </div>
  );
};

export default Carousel;
