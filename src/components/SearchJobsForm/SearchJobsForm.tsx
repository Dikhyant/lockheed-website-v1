import React from "react";

const searchRadiusOptionValues = [5, 15, 25, 35, 50];

const SearchJobsForm: React.FC<any> = () => {
  return (
    <form className="px-[15px] lg:px-5 bg-brand-medium-teal-blue font-din max-w-[1600px] mx-auto">
      <div className="lg:flex lg:flex-wrap">
        <div className="w-full lg:max-w-[20%] lg:w-1/5 lg:py-[15px] flex-auto">
          <h2 className="font-din py-[10px] leading-8 lg:leading-[38px] mt-[15px] lg:mt-[23px] text-white font-extralight text-[38px]">
            Search Jobs
          </h2>
        </div>
        <p className="mb-[15px] lg:m-0 lg:p-[15px] lg:max-w-[23%] lg:w-[23%] flex-auto">
          <label className="block font-din text-white text-[17px] font-bold mb-2 leading-6">
            Keyword Search
          </label>
          <input
            type={"search"}
            className="w-full bg-white border-brand-silver border h-[42px] leading-[42px] text-xs px-[5px]"
            maxLength={150}
          />
        </p>
        <p className="mb-[15px] lg:m-0 lg:p-[15px] lg:max-w-[23%] lg:w-[23%] flex-auto">
          <label className="block font-din text-white text-[17px] font-bold mb-2 leading-6">
            Location
          </label>
          <input
            type={"text"}
            className="w-full bg-white border-brand-silver border h-[42px] leading-[42px] text-xs px-[5px]"
            maxLength={150}
          />
        </p>
        <p className="mb-[15px] lg:m-0 lg:p-[15px] lg:max-w-[23%] lg:w-[23%] flex-auto">
          <label className="block font-din text-white text-[17px] font-bold mb-2 leading-6">
            Search radius
          </label>
          <select className="w-full bg-white border-brand-silver border h-[42px] leading-[42px] text-xs px-[5px]">
            {searchRadiusOptionValues.map((value) => {
              return <option value={5}>{value} miles</option>;
            })}
          </select>
        </p>
        <div className="lg:max-w-full w-full lg:w-[100px] lg:text-right lg:py-[15px] flex-auto">
          <button className="uppercase inline-block font-bold bg-brand-granite py-2 pl-[15px] pr-12 mt-2 mb-[26px] lg:mt-[30px] leading-6 text-[13px] text-white lg:float-right border-brand-granite border-[1.6px] bg-arrow-right-solid-white bg-no-repeat bg-[right_1em_center] bg-[length:1rem]">
            Search
          </button>
        </div>
        <p className="max-w-full w-full lg:pt-[15px]"></p>
      </div>
    </form>
  );
};

export default SearchJobsForm;
