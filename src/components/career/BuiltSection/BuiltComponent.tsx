import React from "react";
import { cn } from "../../../utils/misc";

interface IBuiltComponentProps {
  coverImageUrl: string;
  text: string;
  subText: string;
  className?: string;
}

const BuiltComponent: React.FC<IBuiltComponentProps> = ({
  coverImageUrl,
  text,
  subText,
  className,
}) => {
  return (
    <div className={cn("w-full relative", className)}>
      <div
        className="w-full h-[40vh] md:h-[500px]"
        style={{
          background: `url(${coverImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="hidden md:block absolute top-0 w-full h-full gradient-bottom-left-top-right"></div>
      <div className="relative md:absolute bottom-0 w-full bg-black md:bg-transparent md:w-3/4 pl-[15px] sm:pl-12 pb-4 sm:pb-12 pt-2 sm:pr-[15px]">
        <h1 className="mb-2 sm:pt-8 md:pt-0 font-din-light text-[40px] font-medium text-white leading-[51.2px]">
          {text}
        </h1>
        <h6
          className="hidden sm:block text-base font-medium text-white leading-6 mb-2 text-left"
          dangerouslySetInnerHTML={{ __html: subText }}
        />
      </div>
    </div>
  );
};

export default BuiltComponent;
