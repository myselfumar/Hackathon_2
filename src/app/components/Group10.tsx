import React from 'react'
import Link from "next/link";

export const Group10 = () => {
  return (
    <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[709px]">
  <div className="w-[1440px] h-[709px] absolute left-0 top-[3336px] rounded-[5px] bg-white border border-[#dedede]">
    <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
      <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[711px] absolute left-0 top-0 overflow-hidden bg-[#23856d]" />
        <div className="flex flex-col justify-start items-start w-[1036px] h-[711px] absolute left-[209px] top-0 overflow-hidden gap-20 py-28">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[599px] overflow-hidden gap-[30px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[509px] relative overflow-hidden gap-[30px] pt-[60px]">
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">SUMMER 2020</p>
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-[58px] font-bold text-left text-white">
                Vita Classic Product
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[341px] text-sm text-left text-white">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[34px]">
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                  $16.48
                
                </p>
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]">
                  <Link href="Product1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                    ADD TO CART
                  </p>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[510px] relative overflow-hidden">
              <img
                src="3.png"
                className="flex-grow-0 flex-shrink-0 w-[443px] h-[685px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-6 h-[44.47px] absolute left-[1381px] top-[401px] overflow-hidden" />
  </div>
</div>
  )
}

export default Group10