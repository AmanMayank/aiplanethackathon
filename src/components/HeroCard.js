import React from "react";

const HeroCard = () => {
  return (
    <>
      <div className="h-[565px] w-full bg-[#003145] relative">
        <div className="h-[100%] w-[80%] flex justify-between items-center  mx-auto ">
          <div className="w-[60%] h-[80%] my-auto flex flex-col justify-center gap-9">
            <div className="text-5xl leading-[56px] font-semibold text-white pl-12 border-l-8 border-l-[#FFCE5C]">
              Accelerate Innovation with Global AI Challenges
            </div>
            <div className="text-white pl-12 text-lg">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </div>
            <div className="pl-12">
              <button className="rounded-[10px] w-[50%] border-2 bg-white text-black font-semibold text-lg leading-[18px] px-[18px] pt-[15px] pb-[14px]">
                Create Challenge
              </button>
            </div>
          </div>
          <div>
            <img
              src="/assets/icons/PicsArt_04-14-04.42 1.svg"
              alt="rocketlogo"
            />
          </div>
        </div>
      </div>

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

      <div className="w-[100%] h-[902px] bg-white border-2 border-black flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[72px]">
          <div className="font-semibold text-[32px] leading-5">
            Why Participate in{" "}
            <span className="text-[#0FA958]">AI Challenges?</span>
          </div>

          <div className="flex flex-col gap-[39px] w-[80%] ">
            <div className="flex gap-[35px]">
              <div className="bg-[#F8F9FD]">
                <div className="flex flex-col gap-[5px]">
                  <div>
                    <img
                      src="/assets/icons/carbon_notebook-reference.svg"
                      alt="notebook"
                    />
                  </div>
                  <p className="text-2xl leading-[50px] font-semibold">
                    Prove your skills
                  </p>
                  <p>
                    Gain substantial experience by solving real-world problems
                    and pit against others to come up with innovative solutions.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FD]">
                <div className="flex flex-col gap-[5px] ">
                  <div>
                    <img
                      src="/assets/icons/carbon_notebook-reference.svg"
                      alt="notebook"
                    />
                  </div>
                  <p>Prove your skills</p>
                  <p>
                    Gain substantial experience by solving real-world problems
                    and pit against others to come up with innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
