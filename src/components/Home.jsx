import React from "react";
import { personsapi } from "../data/data";
import Following from "./Following";

const Home = () => {
  return (
    <div className=" w-[47vw] ml-[45px] mt-[48px] ">
      <Following personsapi={personsapi} />
      <div className="mt-[39px] w-full px-[87px]">
        {personsapi.map((item, index) => (
          <div
            key={index}
            className="w-full border-b-[.3px] border-[#8e8e8e3a] mb-[20px]"
          >
            <div className="flex w-full justify-between items-center ">
              <div className="w-full flex items-center gap-2">
                <div className="gradient-bcg h-[40px] w-[40px] p-[2px] rounded-full">
                  <img
                    className="rounded-full h-full w-full border-[2px] border-black object-cover"
                    src={item.profile}
                    alt=""
                  />
                </div>
                <p className="text-[#fafafa] font-semibold text-[14px] leading-[18px] lowercase cursor-default hover:text-[#a8a8a8]">
                  {item.name}
                </p>
                <div className="flex items-center gap-[2px] cursor-default">
                  <span className="text-[#ccc] text-[5px]">{item.icon1}</span>
                  <p className="text-[#a8a8a8] text-[14px] leading-[18px] font-normal">
                    {item.time}
                  </p>
                </div>
              </div>
              <div className="text-white text-[21px] cursor-pointer hover:text-[#8e8e8e]">
                {item.icon2}
              </div>
            </div>
            <div className="w-full h-[97vh] rounded-xl my-2 border-[#323232] border-[1px]">
              <img
                className="w-full h-full rounded-xl object-cover"
                src={item.posts}
                alt="img/posts"
              />
            </div>
            <div className="w-full flex justify-between items-center my-[10px]">
              <div className="flex items-center gap-[14px]">
                <span className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer ">
                  {item.icon4}
                </span>
                <span className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer ">
                  {item.icon5}
                </span>
                <span className="text-white font-bold text-[22px] hover:text-[#8e8e8e] cursor-pointer ">
                  {item.icon6}
                </span>
              </div>
              <div className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer ">
                {item.icon7}
              </div>
            </div>
            <p className="text-white font-semibold text-[14px] leading-[18px]">
              {item.likes}
            </p>
            <p className="text-[#8e8e8e] roboto text-[14px] leading-[18px] font-normal tracking-wider my-[10px] cursor-pointer">
              View all comments
            </p>
            <div className="flex justify-between items-center mb-[20px]">
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-transparent outline-none border-none caret-white"
              />
              <span className="text-[#8e8e8e] text-[14px] cursor-pointer hover:text-[#8e8e8ed2]">{item.icon8}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
