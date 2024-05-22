import React from "react";
import { builtSectionData } from "./built-section-data";
import BuiltComponent from "./BuiltComponent";

const BuiltSection: React.FC<any> = () => {
  return (
    <div className="flex flex-wrap sm:px-[33px] max-w-[1600px] w-full mx-auto mt-12">
      {builtSectionData.map((data, index) => {
        return (
          <BuiltComponent
            coverImageUrl={data?.coverImageUrl}
            text={data?.text}
            subText={data?.subText}
            className="basis-12/12 lg:basis-4/12 mt-12"
          />
        );
      })}
    </div>
  );
};

export default BuiltSection;
