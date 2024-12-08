import React from 'react'
import Link from "next/link";


export const Group11 = () => {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[682px]">
  <div className="w-[1440px] h-[682px] absolute left-0 top-[4045px] overflow-hidden bg-white">
    <div className="flex justify-end items-center w-[1439px] absolute left-0 top-0 overflow-hidden gap-[30px]">
      <div className="flex-grow-0 flex-shrink-0 w-[704px] h-[682px] relative">
        <div className="w-[704px] h-[682px] absolute left-0 top-0 overflow-hidden">
          <div className="w-[632px] h-[491.99px] absolute left-9 top-[117px]">
            <img
              src="hhhh.jpeg"
              className="w-[725px] h-[774px] absolute left-[-137.85px] top-[-211.85px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[573px] relative overflow-hidden gap-[30px]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#bdbdbd]">
          SUMMER 2020
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
          <span className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
            Part of the Neural{" "}
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
            Universe
          </span>
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500">
          <span className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500">
            We know how large objects will act,{" "}
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500">
            but things on a small scale.
          </span>
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]">
            <Link href="Team1">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
              BUY NOW
            </p>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] border border-[#2dc071]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#2dc071]">
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Group11