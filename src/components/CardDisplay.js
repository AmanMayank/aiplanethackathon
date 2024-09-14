import React from "react";

const CardDisplay = () => {
  return (
    <div className="h-[200px] w-[100%] bg-[#002A3B] flex items-center">
      <div className="w-[80%] mx-auto flex justify-between items-center ">
        <div className="flex gap-[22px] pr-16 border-r-[1px] border-white">
          <div className="bg-white p-3">
            <img src="/assets/icons/eos-icons_ai.svg" alt="ai-icon" />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="font-bold text-2xl leading-5">100K+</p>
            <p className="font-medium text-base leading-5">
              AI model submissions
            </p>
          </div>
        </div>
        <div className="flex gap-[22px] pr-16 border-r-[1px] border-white">
          <div className="bg-white p-3">
            <img src="/assets/icons/eos-icons_ai-healing.svg" alt="ai-icon" />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="font-bold text-2xl leading-5">50K+</p>
            <p className="font-medium text-base leading-5">Data Scientists</p>
          </div>
        </div>
        <div className="flex gap-[22px] pr-16">
          <div className="bg-white p-3">
            <img
              src="/assets/icons/eos-icons_data-scientist.svg"
              alt="ai-icon"
            />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="font-bold text-2xl leading-5">100+</p>
            <p className="font-medium text-base leading-5">
              AI Challenges hosted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
