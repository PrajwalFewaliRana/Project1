import React from "react";
import img from "../assets/instagram.png";
import { AiOutlineHeart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setOpenNotification } from "../store/NotificationSlice";
import {
  selectInstagramState,
  setCloseInstagram,
  setOpenInstagram,
} from "../store/InstagramSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const ifInstagramState = useSelector(selectInstagramState);
  const onOpen = () => {
    dispatch(
      setOpenNotification({
        notificationState: true,
      })
    );
  };

  const onInstagramToggle = () => {
    if (ifInstagramState) {
      dispatch(
        setCloseInstagram({
          instagramState: false,
        })
      );
    } else {
      dispatch(
        setOpenInstagram({
          instagramState: true,
        })
      );
    }
  };

  return (
    <div className="hidden xsm:items-center px-[15px] xsm:justify-between border-b-[1px] border-[#262626] h-[60px]  bg-black w-full xsm:flex ">
      <div className="flex items-center" onClick={onInstagramToggle}>
        <img
          className={`w-[110px] h-[85px] hidden xsm:block xxsm:hidden `}
          src="/name.png"
          alt="instaName/logo"
        />
        <img className={`h-6 w-6 hidden xxsm:block`} src={img} alt="logo/img" />
        <FiChevronDown className="text-white h-5 w-5 xxsm:hidden " />
      </div>
      <div className="flex items-center gap-[15px]">
        <input
          className="w-[280px] outline-none caret-white bg-[#73737357] px-[18px] py-[5px] rounded-md"
          type="text"
          placeholder="Search"
        />
        <AiOutlineHeart onClick={onOpen} className="text-white h-8 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
