import React from "react";
import { useSelector } from "react-redux";
import { selectMoreState } from "../store/MoreSlice";
import { more } from "../data/data";

const More = () => {
  const ifMoreState = useSelector(selectMoreState);

  return (
    <div
      className={`fixed text-[#f6f6f6cb] bottom-[80px] left-[10px] w-[20vw] duration-300 transition-all ease-linear rounded-2xl z-[10] h-[64vh] opacity-100 bg-[#262626]
    ${
      ifMoreState
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-[300px] invisible"
    }`}
    >
      <div className="p-[10px]">
        {more.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center p-[12px] hover:bg-[#636363] rounded-lg gap-[10px]"
          >
            <div className="text-[24px]">{item.icon}</div>
            <div className="text-[14px] leading-tight">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="w-full h-[7px] bg-[#353535]"></div>
      <div className="p-[10px] ">
        <button className="px-[12px] py-[15px] text-start w-full hover:bg-[#636363] rounded-lg text-[14px] leading-tight text-[#f6f6f6cb]">
          Switch accounts
        </button>
      </div>
      <div className="w-full h-[2px] bg-[#353535]"></div>
      <div className="p-[10px] ">
        <button className="px-[12px] py-[15px] text-start w-full hover:bg-[#636363] rounded-lg text-[14px] leading-tight text-[#f6f6f6cb]">
          Log out
        </button>
      </div>
    </div>
  );
};

export default More;
