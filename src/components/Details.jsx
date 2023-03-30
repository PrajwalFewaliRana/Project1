import React from "react";
import { suggestions } from "../data/data";
import { links } from "../data/data";

const Details = () => {
  return (
    <div className="ml-[58px] mt-[55px] w-full pr-[48px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[18px]">
          <img
            src="https://scontent.fktm14-1.fna.fbcdn.net/v/t39.30808-6/293802847_592924525739239_1187001828201115566_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QURpTezdbd4AX9oBqTM&_nc_oc=AQmzAowaCIgj2dH_xM0az-yzgja65c2JjKYKVS9cSXk6xgZRiyPpmjnuVR7fvvJX9Y8&_nc_ht=scontent.fktm14-1.fna&oh=00_AfDirDEZNiPsNiz9FCXT2q3Xnf0-NZNn2krr52T0-Y0rHA&oe=64272152"
            alt="person/profile"
            className="cursor-pointer h-[57px] w-[57px] rounded-full object-cover"
          />
          <div className="self-center ">
            <h1 className="text-[#fafafa] cursor-pointer font-semibold text-[14px] leading-[18px] ">
              prajwalmagar2021 <br />
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
        {
          links.map((item,index)=>(
            
              index===8 ? 
              <div key={index} className="flex items-center ">
              <div className="text-[#737373] font-normal text-[12px] leading-[20px] cursor-pointer">{item.name}</div>
              <p className="text-[#737373] text-[2px] mx-[3px]">{item.icon}</p>
              </div> :
              <div key={index} className="flex items-center ">
              <a className="text-[#737373] font-normal text-[12px] leading-[20px] hover:underline active:text-[#73737371] cursor-pointer" href={item.link} target={"_blank"}>{item.name}</a>
              <p className="text-[#737373] text-[2px] mx-[3px]">{item.icon}</p>
              </div>
          ))
        }
      </div>
      <div className="text-[#737373] text-[12px] leading-[16px] font-normal mt-[20px]">© 2023 INSTAGRAM FROM META</div>
    </div>
  );
};

export default Details;
