import React from "react";

const Banner: React.FC<any> = () => {
  return (
    <div className="max-w-[1600px] w-full mx-auto relative">
      <div className="gradient-bottom-left-top-right w-full h-full absolute z-10"></div>
      <div className="h-[40vh] md:h-[500px] bg-Employer-Band-Canberra-home-1920 bg-no-repeat bg-[50%_50%] bg-cover"></div>
      <div className="relative bottom-0 max-w-full w-full max-md:h-[139.6px] bg-black md:bg-transparent md:absolute md:w-3/4 pl-[15px] pb-4 md:pl-12 md:pb-12 pt-2 pr-[15px] text-white z-20">
        <div className="w-fit text-6 md:text-[40px] font-din-light leading-[47px] md:leading-[76px] font-normal">
          A career that's&nbsp;
          <span className="text-[40px] md:text-[70px] italic font-bold">
            built
          </span>
          <br />
          <span className="float-right text-6 md:text-[40px] font-normal">
            for&nbsp;
            <span className="text-[40px] md:text-[70px] italic font-bold">
              you.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
