import React from "react";

const HeroCard = () => {
  return (
    <div className="h-[565px] w-full bg-[#003145] relative">
      <div className="h-[100%] w-[80%] flex justify-between items-center  mx-auto ">
        <div className="w-[60%] h-[80%] my-auto flex flex-col justify-center gap-9">
          <div className="text-5xl leading-[56px] font-semibold text-white pl-12 border-l-8 border-l-[#FFCE5C]">
            Accelerate Innovation with Global AI Challenges
          </div>
          <div className="text-white pl-12 text-lg">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <div className="pl-12">
            <button className="rounded-[10px] w-[50%] border-2 bg-white text-black font-semibold text-lg leading-[18px] px-[18px] pt-[15px] pb-[14px]">
              Create Challenge
            </button>
          </div>
        </div>
        <div>
          <img src="/assets/icons/PicsArt_04-14-04.42 1.svg" alt="rocketlogo" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
