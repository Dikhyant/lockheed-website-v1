import React from "react";

type TCarouselItemProps = {
  imageMaxSmUrl: string;
  imageSmUrl: string;
  imageMdUrl: string;
  imageLgUrl: string;
  imageXlUrl: string;
  text: string;
  subtext: string;
};

const CarouselItem: React.FC<TCarouselItemProps> = ({
  imageLgUrl,
  imageMaxSmUrl,
  imageMdUrl,
  imageSmUrl,
  imageXlUrl,
  text,
  subtext,
}) => {
  return (
    <div className="w-full h-full relative">
      <picture>
        <source media="(max-width: 480px)" srcSet={imageMaxSmUrl} />
        <source media="(min-width: 1280px)" srcSet={imageXlUrl} />
        <source media="(min-width: 990px)" srcSet={imageLgUrl} />
        <source media="(min-width: 768px)" srcSet={imageMdUrl} />
        <source media="(min-width: 480px)" srcSet={imageSmUrl} />
        <img alt={text} className="w-full h-full" />
      </picture>
      <a className="absolute bottom-0 w-full p-[30px] gradient-180">
        <div className="w-full border-t-[rbga(255,255,255,0.5)] border-t h-[26px]"></div>
        <div className="text-brand-seashell font-din-med underline text-base font-normal leading-6">
          {text}
        </div>
        <div className="text-brand-seashell font-din text-base font-normal leading-6 underline">
          {subtext}
        </div>
      </a>
    </div>
  );
};

export default CarouselItem;
