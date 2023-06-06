import React from "react";
import { useSelector } from "react-redux";
import { selectSearchState } from "../store/SearchSlice";

const Search = () => {
  const ifSearchState = useSelector(selectSearchState);
  return (
    <div
      className={`fixed top-0 left-[74px] sm:w-[40vw] w-[29vw] duration-300 transition-all ease-linear rounded-r-2xl z-[1] border-r-[1px] border-[#262626] h-screen opacity-100 bg-black
    ${
      ifSearchState
        ? "opacity-100 translate-x-0 visible"
        : "opacity-0 translate-x-[-200px] invisible"
    }`}
    >
      <div className="w-full border-b-[1px] border-[#262626] px-[15px] py-[25px]">
        <h1 className="text-white font-semibold text-[24px] leading-tight mb-[45px] xl:mb-[20px] ml-[10px]">
          Search
        </h1>
        <input
          className="w-full outline-none caret-white bg-[#73737357] px-[18px] py-[8px] rounded-md"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <h1 className="text-white font-semibold p-[20px] ml-[5px]">Recent</h1>
        <div className="flex justify-center translate-y-[175px] xl:translate-y-[100px]">
          <p className="text-[#929191] font-semibold text-[14px] leading-tight">
            No recent searches
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
