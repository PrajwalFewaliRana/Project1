import React, { useState } from "react";
import { navbarapi } from "../data/data";
import { Link } from "react-router-dom";
import img from "../assets/instagram.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchState,
  setCloseSearch,
  setOpenSearch,
} from "../store/SearchSlice";
import {
  selectNotificationState,
  setCloseNotification,
  setOpenNotification,
} from "../store/NotificationSlice";

const Sidebar = () => {
  const [showName, setShowName] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const ifSearchState = useSelector(selectSearchState);
  const ifNotificationState = useSelector(selectNotificationState);

  const onNotificationToggle = () => {
    if (ifNotificationState) {
      dispatch(
        setCloseNotification({
          notificationState: false,
        })
      );
    } else {
      dispatch(
        setOpenNotification({
          notificationState: true,
        })
      );
    }
  };

  const OnSearchToggle = () => {
    if (ifSearchState) {
      dispatch(
        setCloseSearch({
          searchState: false,
        })
      );
    } else {
      dispatch(
        setOpenSearch({
          searchState: true,
        })
      );
    }
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
    setShowName((prevShowName) => {
      if (index === 1 || index === 5) {
        return !prevShowName;
      } else if (index !== 1 && index !== 4 && index !== 5) {
        return true;
      } else if (index === 4) {
        return false;
      }
      return prevShowName;
    });
  };
  return (
    <div
      className={`${
        showName ? "" : "mr-[170.5px]"
      } h-screen max-w-[20vw] z-[2] pt-3 pl-[15px] pr-[15px] bg-black border-r-[1px] border-[#262626] sticky left-0 top-0 block`}
    >
      <div className="ml-1">
        {showName ? (
          <img
            className="w-[110px] h-[85px]"
            src="/name.png"
            alt="instaName/logo"
          />
        ) : (
          <img
            className="h-6 w-6 my-[25px] mb-[45px] translate-x-[5px]"
            src={img}
            alt="logo/img"
          />
        )}
      </div>
      <div>
        {navbarapi.map((item, index) => (
          <Link
            onClick={() => {
              handleItemClick(index);
              if (index === 1) {
                OnSearchToggle();
              } else if (index === 5) {
                onNotificationToggle();
              }
            }}
            key={item.id}
            to={item.link}
            className={`w-[34vb] ${
              showName ? "border-none" : "w-full"
            } flex items-center gap-4 cursor-pointer rounded-lg hover:bg-[#262626] px-1.5 py-2 group  ${
              index === 0 ? "mt-2" : "mt-3"
            } ${
              activeItem === index
                ? "border-[1px] border-white transition-all duration-200 ease-in"
                : ""
            } `}
          >
            <div className="text-white text-[28px]">{item.icon}</div>
            {showName && (
              <div className="text-white group-focus:font-bold roboto">
                {item.title}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
