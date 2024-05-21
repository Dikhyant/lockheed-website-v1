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
    <div
      className={cn("w-full h-[500px] relative", className)}
      style={{
        background: `url(${coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full h-full gradient-bottom-left-top-right"></div>
      <div className="absolute bottom-0 w-3/4 pl-12 pb-12 pt-2 pr-[15px]">
        <h1 className="mb-2 font-din-light text-[40px] font-medium text-white leading-[51.2px]">
          {text}
        </h1>
        <h6
          className="text-base font-medium text-white leading-6 mb-2 text-left"
          dangerouslySetInnerHTML={{ __html: subText }}
        />
      </div>
    </div>
  );
};

export default BuiltComponent;
