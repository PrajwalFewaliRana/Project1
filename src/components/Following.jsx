import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../arrow.css";

const Following = ({ personsapi }) => {
  const splideOptions = {
    perPage: 8,
    perMove: 1,
    rewind: false,
    keyboard: "global",
    gap: "0.1rem",
    pagination: false,
    padding: "0.1rem",
    breakpoints: {
      1200: { perPage: 8 },
      991: { perPage: 8 },
      768: { perPage: 8 },
      620: { perPage: 6 },
      425: { perPage: 5.5 },
      370: { perPage: 5 },
    },
  };
  return (
    <div className="flex gap-2 xsm:gap-5 lg:gap-0 lg:w-[90%] 1xsm:w-full w-full lg:mx-auto ">
      <Splide options={splideOptions} className="h-auto w-full ">
        {personsapi.map((item, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center gap-[2px]">
              <div className=" flex p-[2px] h-[65px] w-[65px] rounded-full gradient-bcg items-center justify-center">
                <div className="w-full h-full rounded-full border-[2px] border-black">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={item.profile}
                    alt="following/profile"
                    type="image/jpg"
                  />
                </div>
              </div>

              <p className="text-white lowercase text-[12px] leading-[16px] font-normal ">
                {item.name}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Following;
