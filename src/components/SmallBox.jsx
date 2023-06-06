import React from "react";
import { useSelector } from "react-redux";
import { selectInstagramState } from "../store/InstagramSlice";
import { BiUserCheck } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const SmallBox = () => {
  const ifInstagramState = useSelector(selectInstagramState);
  return (
    <div
      className={`fixed top-[40px] py-[10px] px-[15px] left-[120px] duration-300 transition-all ease-linear rounded-md z-[10] opacity-100 bg-[#302f2f]
    ${
      ifInstagramState
        ? "opacity-100 translate-x-0 visible"
        : "opacity-0 translate-y-[-100px] invisible"
    }`}
    >
      <div className="flex items-center w-full justify-between text-white mb-[15px] gap-[10px]">
        <p>Following</p>
        <BiUserCheck className="h-5 w-5" />
      </div>
      <div className="flex items-center w-full justify-between text-white gap-[10px]">
        <p>Favourites</p>
        <AiOutlineStar className="h-5 w-5" />
      </div>
    </div>
  );
};

export default SmallBox;
