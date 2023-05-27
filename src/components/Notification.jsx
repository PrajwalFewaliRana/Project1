import React from "react";
import { useSelector } from "react-redux";
import { selectNotificationState } from "../store/NotificationSlice";

const Notification = () => {
  const ifNotificationState = useSelector(selectNotificationState);
  return (
    <div
      className={`h-full fixed top-0 left-[74px] w-[29vw] duration-300 transition-all ease-linear z-[1] overflow-y-auto opacity-100 bg-black
    ${
      ifNotificationState
        ? "opacity-100 translate-x-0 visible"
        : "opacity-0 translate-x-[-200px] invisible"
    }`}
    >
      <div className="w-full border-b-[1px] border-[#262626] px-[15px] py-[25px]">
        <h1 className="text-white font-semibold text-[24px] leading-tight mb-[45px] ml-[10px]">Search</h1>
        <input className="w-full outline-none caret-white bg-[#73737357] px-[18px] py-[8px] rounded-md" type="text" placeholder="Search" />
      </div>
      <div className="">
        <h1 className="text-white font-semibold p-[20px] ml-[5px]">Recent</h1>
        <div className= "flex justify-center translate-y-[175px]">
          <p className="text-[#929191] font-semibold text-[14px] leading-tight">No recent searches</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
