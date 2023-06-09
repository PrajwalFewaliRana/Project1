import React, { useState } from "react";
import { personsapi } from "../data/data";
import Following from "./Following";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostButtonClick = () => {
    console.log("Post button clicked");
  };

  return (
    <div className="xl:mr-[5px] lg:w-[90vw] xsm:w-screen xsm:mt-[20px] mt-[48px] ml-[45px] xl:ml-[85px] eg:ml-[50px] lg:mx-0 ex:ml-[20px]">
      <div className="w-[47vw] xl:w-[50vw] lg:min-w-[70vw] 1xsm:w-full lg:mx-auto sm:w-full">
        <Following personsapi={personsapi} />
        <div className="mt-[39px] w-full xsm:w-[100%] lg:w-[80%] 1xsm:px-[20px] xxsm:px-0 px-[87px] lg:mx-auto xsm:mx-0">
          {personsapi.map((item, index) => (
            <div
              key={index}
              className=" w-full border-b-[.3px] border-[#8e8e8e3a] mb-[20px]"
            >
              <div className="flex w-full xsm justify-between items-center ">
                <div className="w-full flex items-center gap-2">
                  <div className="gradient-bcg h-[40px] w-[40px] p-[2px] rounded-full">
                    <img
                      className="rounded-full h-full w-full  border-[2px] border-black object-cover"
                      src={item.profile}
                      alt=""
                    />
                  </div>
                  <p className="text-[#fafafa] font-semibold text-[14px] leading-[18px] lowercase cursor-default hover:text-[#a8a8a8]">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-[2px] cursor-default">
                    <span className="text-[#ccc] text-[5px]">{item.icon1}</span>
                    <p className="text-[#a8a8a8] text-[14px] leading-[18px] font-normal">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="text-white text-[21px] cursor-pointer hover:text-[#8e8e8e]">
                  {item.icon2}
                </div>
              </div>
              <div className="w-full h-[97vh] rounded-xl my-2 border-[#323232] border-[1px]">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src={item.posts}
                  alt="img/posts"
                />
              </div>
              <div className="w-full flex justify-between items-center my-[10px]">
                <div className="flex items-center gap-[14px]">
                  <span
                    title="like"
                    className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer "
                  >
                    {item.icon4}
                  </span>
                  <span
                    title="Comment"
                    className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer "
                  >
                    {item.icon5}
                  </span>
                  <span
                    title="Share Post"
                    className="text-white font-bold text-[22px] hover:text-[#8e8e8e] cursor-pointer "
                  >
                    {item.icon6}
                  </span>
                </div>
                <div
                  title="Save"
                  className="text-white font-normal text-[28px] hover:text-[#8e8e8e] cursor-pointer "
                >
                  {item.icon7}
                </div>
              </div>
              <p className="text-white font-semibold text-[14px] leading-[18px]">
                {item.likes}
              </p>
              <p className="text-[#8e8e8e] roboto text-[14px] leading-[18px] font-normal tracking-wider my-[10px] cursor-pointer">
                View all comments
              </p>
              <div className="flex justify-between items-center mb-[20px]">
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Add a comment..."
                  className="bg-transparent outline-none text-[15px] leading-tight border-none text-white caret-white"
                />
                <div className="flex items-center gap-[7px]">
                  {inputValue.length > 0 && (
                    <button
                      onClick={handlePostButtonClick}
                      className="text-[#0095f6] font-semibold text-[14px] leading-tight"
                    >
                      Post
                    </button>
                  )}
                  <span
                    title="Emoji"
                    className="text-[#8e8e8e] text-[14px] cursor-pointer hover:text-[#8e8e8ed2]"
                  >
                    {item.icon8}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
