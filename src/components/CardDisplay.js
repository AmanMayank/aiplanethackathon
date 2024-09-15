import React from "react";

const CardDisplay = () => {
  return (
    <div className="h-[324px] w-[100%] bg-[#002A3B] pt-[72px] pb-[98px] px-[238px]">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="text-white font-semibold text-2xl leading-[40px]">
          Explore Challenges
        </div>
        <div className="flex w-[100%] gap-6 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] h-[50px] rounded-xl pl-[67px] pt-[15px] pb-[17px]"
          ></input>
          <img
            src="/assets/icons/carbon_search.svg"
            alt="search"
            className="absolute pl-[38px] pt-[15px] pb-[17px]"
          />
          <div className="h-[50px] pl-[23px] pr-4 py-3 bg-white font-normal text-lg leading-[26px] flex items-center gap-3 rounded-xl">
            Filter
            <span>
              <img src="/assets/icons/Caret.svg" alt="down" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
