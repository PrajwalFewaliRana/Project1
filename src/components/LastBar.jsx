import React, { useState } from "react";
import { navbarapi } from "../data/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setOpenCreate } from "../store/CreateSlice";

const LastBar = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(null);

  const onCreateClick = () => {
    dispatch(
      setOpenCreate({
        createState: true,
      })
    );
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div
      className={`xsm:block w-full z-[2] bg-black border-t-[1px] border-[#262626] fixed hidden bottom-0`}
    >
      <div className="flex w-full items-center justify-between xxsm:px-[15px] px-[60px] py-[5px]">
        {navbarapi.map(
          (item, index) =>
            index !== 1 &&
            index !== 8 &&
            index !== 5 && (
              <Link
                onClick={() => {
                  handleItemClick(index);
                  if (index === 6) {
                    onCreateClick();
                  }
                }}
                key={item.id}
                to={item.link}
                className={`flex items-center gap-4 cursor-pointer ${
                  activeItem === index
                    ? "border-[.3px] border-white rounded-lg transition-all duration-200 ease-in"
                    : ""
                }`}
              >
                <div className="text-white text-[28px] p-[5px]">
                  {item.icon}
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default LastBar;
