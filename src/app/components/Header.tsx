import React from 'react'

export const Header = () => {
  return (
    <div className="w-[1436px] h-[716px]">
  <div className="w-[1436px] h-[716px]">
    <div className="w-[1436px] h-[716px] absolute left-px top-[136px] rounded-[5px] bg-white border border-[#dedede]">
      <div className="w-[1436px] h-[716px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden">
          <img
          src='shop1.jpeg'
           className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden bg-cover bg-no-repeat bg-center" />
          <div className="flex flex-col justify-start items-center absolute left-[197.5px] top-12 overflow-hidden gap-20 py-28">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px] py-12">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[599px] relative overflow-hidden gap-[35px]">
                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
                  SUMMER 2020
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-[58px] font-bold text-left text-white">
                  NEW COLLECTION
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50">
                  <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50">
                    We know how large objects will act,{" "}
                  </span>
                  <br />
                  <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50">
                    but things on a small scale.
                  </span>
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                      SHOP NOW
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[415px] h-[280px] overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-6 h-[44.47px] absolute left-[1381px] top-[283px] overflow-hidden" />
    </div>
  </div>
</div>
  )
}

export default Header;