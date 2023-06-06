import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNotificationState,
  setCloseNotification,
} from "../store/NotificationSlice";
import { notifications } from "../data/data";
import { AiOutlineLeft } from "react-icons/ai";

const Notification = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(
      setCloseNotification({
        notificationState: false,
      })
    );
  };

  const ifNotificationState = useSelector(selectNotificationState);
  return (
    <div
      className={`scroll xsm:w-full xsm:z-[19] h-full pt-[23px] xsm:pt-[13px] fixed top-0 xsm:left-0 text-white left-[74px] xl:w-[32vw] lg:w-[36vw] sm:w-[50vw] w-[29vw] duration-300 transition-all ease-linear z-[1] overflow-y-auto opacity-100 bg-black
    ${
      ifNotificationState
        ? "opacity-100 translate-x-0 visible"
        : "opacity-0 translate-x-[-200px] invisible"
    }`}
    >
      <div className="ml-[23px] xsm:relative">
        <span onClick={onClose} className="hidden absolute xsm:block">
          <AiOutlineLeft className="text-white h-6 w-6" />
        </span>
        <h1 className="font-bold text-[24px] leading-tight xsm:text-[18px] xsm:font-semibold text-center">
          Notifications
        </h1>
        <p className="font-bold mt-[15px] mb-[20px] text-[16px] leading-tight">
          This week
        </p>
      </div>
      <div className="hidden xsm:block w-full fixed border-t-[1px] border-[#262626] top-[45px]"></div>
      <div className="w-full">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={` ${
              index === 0 || index === 4
                ? "border-b-[1px] border-[#262626] pb-[15px]"
                : ""
            } cursor-pointer `}
          >
            <div className="flex my-[15px] gap-[10px] w-full items-center justify-between px-[23px]">
              <div
                className={`flex ${
                  index === 1 || index === 5 ? "hidden" : ""
                } p-[2px] h-[55px] w-[55px] rounded-full gradient-bcg items-center justify-center`}
              >
                <img
                  className="h-full w-full rounded-full object-cover border-[2px] border-black"
                  src={item.img}
                  alt="profile/img"
                />
              </div>
              <p
                className={`flex-1 text-[14px] leading-tight ${
                  index === 1 || index === 5
                    ? "font-bold text-[16px] leading-tight"
                    : " first-letter:font-bold"
                }`}
              >
                {item.text}{" "}
                <span className="text-[#a8a8a8] tracking-[3px]">
                  {item.date}
                </span>{" "}
              </p>
              <button
                className={`${
                  index === 1 || index === 5 ? "hidden" : ""
                } bg-[#0095f6] font-semibold rounded-lg text-[14px] leading-tight px-[20px] py-[7px]`}
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
