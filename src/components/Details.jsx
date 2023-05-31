import React from "react";
import { suggestions } from "../data/data";
import { links } from "../data/data";
import img from "../assets/PRAJWAL.jpg";

const Details = () => {
  return (
    <div className="ml-[58px] mt-[55px] w-full pr-[48px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[18px]">
          <a href="/profile/" className="h-[57px] w-[57px] rounded-full" >
          <img
            src={img}
            alt="person/profile"
            className="cursor-pointer h-full w-full rounded-full object-cover"
          />
          </a>
          
          <div className="self-center ">
            <h1 className="text-[#fafafa] cursor-pointer font-semibold text-[14px] leading-[18px] ">
              <a href="/profile" className="active:text-[#a8a8a8]">prajwalmagar2021</a> <br />
              <span className="text-[#a8a8a8] cursor-pointer font-normal text-[14px] leading-[18px] ">
                PraJwal MaGar
              </span>
            </h1>
          </div>
        </div>
        <p className="text-[#0095f6] font-semibold text-[12px] leading-[16px] cursor-pointer">
          Switch
        </p>
      </div>
      <div className="flex justify-between items-center my-[15px]">
        <p className="text-[#a8a8a8] font-semibold text-[14px] leading-[18px]">
          Suggestions for you
        </p>
        <p className="text-white font-semibold text-[12px] leading-[16px] cursor-pointer hover:text-[#a8a8a8]">
          See All
        </p>
      </div>
      <div className="pl-[2px]">
        {suggestions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-[20px]"
          >
            <div className="flex items-center gap-[12px]  ">
              <img
                className="h-[32px] w-[32px] object-cover rounded-full"
                src={item.img}
                alt=""
              />
              <div className="cursor-pointer">
                <p className="text-[#fafafa] lowercase font-semibold text-[14px] leading-[14px]">
                  {item.name} <br />
                  <span className="text-[#a8a8a8] font-normal text-[12px] leading-[12px]">
                    {item.text}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-[#0095f6] font-semibold text-[12px] leading-[16px] cursor-pointer hover:text-white">
              {item.follow}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-[30px]">
        {links.map((item, index) =>
          index === 8 ? (
            <div key={index} className="flex items-center ">
              <div className="text-[#737373] font-normal text-[12px] leading-[20px] cursor-pointer">
                {item.name}
              </div>
              <p className="text-[#737373] text-[2px] mx-[3px]">{item.icon}</p>
            </div>
          ) : (
            <div key={index} className="flex items-center ">
              <a
                className="text-[#737373] font-normal text-[12px] leading-[20px] hover:underline active:text-[#73737371] cursor-pointer"
                href={item.link}
                target={"_blank"}
              >
                {item.name}
              </a>
              <p className="text-[#737373] text-[2px] mx-[3px]">{item.icon}</p>
            </div>
          )
        )}
      </div>
      <div className="text-[#737373] text-[12px] leading-[16px] font-normal mt-[20px]">
        © 2023 INSTAGRAM FROM META
      </div>
    </div>
  );
};

export default Details;
