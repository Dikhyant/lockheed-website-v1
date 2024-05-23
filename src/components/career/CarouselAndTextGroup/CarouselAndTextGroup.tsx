import React from "react";

type ICarouselAndTextGroupProps = {
  title: string;
  bigText: string;
  smallText: string;
  buttonText: string;
};

const CarouselAndTextGroup: React.FC<ICarouselAndTextGroupProps> = ({
  title,
  bigText,
  smallText,
  buttonText,
}) => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1600px] w-full mx-auto px-12 pt-12 pb-36">
        <div className="w-full pr-12 text-right">
          <a className="text-white underline font-din text-base font-normal leading-6 w-fit ml-auto">
            Back to Top
          </a>
        </div>

        <div className="flex flex-wrap">
          <div className="basis-6/12 mt-12 px-[15px]">
            <div className="inline-block font-din uppercase text-white text-base font-extralight leading-6 mb-[161.7px]">
              {title}
            </div>
            <h2 className="font-din-light text-white text-[34px] font-medium leading-[46px] mt-14 mb-6">
              {bigText}
            </h2>
            <p className="font-din text-white text-base font-normal leading-6 mb-4 w-3/4">
              {smallText}
            </p>
            <a className="inline-block text-white uppercase font-din text-base font-bold leading-6 bg-arrow-right-solid-white bg-no-repeat bg-[right_1em_center] bg-[length:1rem] bg-brand-medium-persian-blue pl-[15px] pt-3 pr-12 pb-[15px] border-brand-medium-persian-blue border-2">
              {buttonText}
            </a>
          </div>
          <div className="basis-6/12"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselAndTextGroup;
