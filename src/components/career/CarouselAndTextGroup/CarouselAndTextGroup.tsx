import React from "react";
import Carousel from "../../common/Carousel/Carousel";
import CarouselItem from "./CarouselItem";

type ICarouselAndTextGroupProps = {
  title: string;
  bigText: string;
  smallText: string;
  buttonText: string;
};

type TCarouselItem = React.ComponentProps<typeof CarouselItem>;
type TCarouselProps = React.ComponentProps<typeof Carousel>;

const d = () => {
  return <></>;
};
const c = <></>;

const carouselItemsData: TCarouselItem[] = [
  {
    imageMaxSmUrl:
      "/images/careers/career-areas/2022_12_15LockheedMartin-103.jpg.pc-adaptive.480.medium.jpg",
    imageSmUrl:
      "/images/careers/career-areas/2022_12_15LockheedMartin-103.jpg.pc-adaptive.480.medium.jpg",
    imageMdUrl:
      "/images/careers/career-areas/2022_12_15LockheedMartin-103.jpg.pc-adaptive.480.medium.jpg",
    imageLgUrl:
      "/images/careers/career-areas/2022_12_15LockheedMartin-103.jpg.pc-adaptive.990.medium.jpg",
    imageXlUrl:
      "/images/careers/career-areas/2022_12_15LockheedMartin-103.jpg.pc-adaptive.1280.medium.jpg",
    text: "Cyber Security & Intelligence",
    subtext:
      "Deliver full-spectrum cyber capabilities and cyber resilient systems.",
  },
];

const carouselItems: TCarouselProps["carouselItems"] = carouselItemsData.map(
  (item) => {
    return (
      <CarouselItem
        imageMaxSmUrl={item.imageMaxSmUrl}
        imageSmUrl={item.imageSmUrl}
        imageMdUrl={item.imageMdUrl}
        imageLgUrl={item.imageLgUrl}
        imageXlUrl={item.imageXlUrl}
        text={item.text}
        subtext={item.subtext}
      />
    );
  },
);

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
          <div className="basis-6/12 mt-12 px-[15px]">
            <Carousel carouselItems={carouselItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselAndTextGroup;
