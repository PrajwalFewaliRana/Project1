import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

const Message = () => {
  return (
    <div className="flex h-screen xl:translate-x-0 translate-x-[-170px] text-white">
      <div className="sm:w-[13vw] pl-[20px] border-r-[1px] border-[#262626] ">
        <div className="w-full flex items-center justify-between sm:justify-center mt-[40px] pr-[30px]">
          <div className="h-[17px] rounded-lg w-[22vw] bg-[#26262641] sm:hidden"></div>
          <div className="cursor-pointer fill-white">
            <BsPencilSquare className="h-6 w-6" />
          </div>
        </div>
        <div className="font-semibold sm:hidden flex items-center justify-between mt-[30px] pr-[20px]">
          <p className="text-[16px] leading-tight">Messages</p>
          <p className="cursor-pointer text-[#838181] text-[14px] leading-tight">
            Requests
          </p>
        </div>
        <div className="flex sm:hidden h-[80%] text-[15px] leading-tight items-center justify-center">
          No message found.
        </div>
      </div>
      <div className="w-[65vw] h-screen flex flex-col items-center justify-center text-white">
        <div className="h-[100px] w-[100px] rounded-full border-[2px] border-white flex items-center justify-center">
          <RiMessengerLine className="h-[60px] w-[60px]" />
        </div>
        <p className="font-semibold text-[20px] leading-[28px] mt-[15px]">
          Your messages
        </p>
        <p className="text-[#979595] text-[14px] leading-tight py-[8px]">
          Send private photos and messages to a friend or group.
        </p>
        <button className="bg-[#0095f6] font-semibold py-[7px] px-[15px] rounded-lg text-[14px] leading-tight mt-[10px]">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Message;
