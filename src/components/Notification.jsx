import React from "react";
import { useSelector } from "react-redux";
import { selectNotificationState } from "../store/NotificationSlice";
import { notifications } from "../data/data";

const Notification = () => {
  const ifNotificationState = useSelector(selectNotificationState);
  return (
    <div
      className={`scroll h-full pt-[23px] fixed top-0 text-white left-[74px] w-[29vw] duration-300 transition-all ease-linear z-[1] overflow-y-auto opacity-100 bg-black
    ${
      ifNotificationState
        ? "opacity-100 translate-x-0 visible"
        : "opacity-0 translate-x-[-200px] invisible"
    }`}
    >
      <div className="ml-[23px]">
        <h1 className="font-bold text-[24px] leading-tight">Notifications</h1>
        <p className="font-bold mt-[15px] mb-[20px] text-[16px] leading-tight">This week</p>
      </div>
      <div className="w-full">
        {
          notifications.map((item,index)=>(
            <div key={index} className={` ${index === 0 || index===4 ? "border-b-[1px] border-[#262626] pb-[15px]" : ""} cursor-pointer `}>
              <div className="flex my-[15px] gap-[10px] w-full items-center justify-between px-[23px]">
              <div className={`flex ${ index === 1 || index === 5 ? "hidden" :  "" } p-[2px] h-[55px] w-[55px] rounded-full gradient-bcg items-center justify-center`}>
                <img className="h-full w-full rounded-full object-cover border-[2px] border-black" src={item.img} alt="profile/img" />
              </div>
              <p className={`flex-1 text-[14px] leading-tight ${index === 1 || index === 5 ? "font-bold text-[16px] leading-tight" :  " first-letter:font-bold" }`}>{item.text} <span className="text-[#a8a8a8] tracking-[3px]">{item.date}</span> </p>
              <button className={`${ index === 1 || index === 5 ? "hidden" :  "" } bg-[#0095f6] font-semibold rounded-lg text-[14px] leading-tight px-[20px] py-[7px]`}>{item.btn}</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Notification;
