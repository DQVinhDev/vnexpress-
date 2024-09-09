// src/components/MainContent.js
import React from "react";
import Article1 from "./Article1";

function MainContent() {
  return (
    <main>
      <div className=" container    font-sans pt-8 ">
        <div className="   pb-3 justify-around w-3/4 ml-52 ">
          <div className=" shadow-sm flex w-[780px] pb-3">
            <div className="w-[520px] h-[312px]">
              <img
                className="w-[100%] "
                src="https://i1-vnexpress.vnecdn.net/2024/08/17/afp-20230719-33pg2aa-v1-highre-4117-7243-1723868063.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=tKG8eUPyFw4AgYoh1yzheQ"
              />
            </div>
            <div className="text-left w-[260px] ml-8 ">
              <h3 className="font-[Merriweather] font-semibold text-xl pb-4 hover:text-blue-500 hover:cursor-pointer">
                Ukraine nêu lý do tấn công vào tỉnh biên giới Nga
              </h3>
              <p className=" text-gray-700 text-sm  pb-3 hover:cursor-pointer">
                Ukraine cho biết các lực lượng nước này tấn công vào tỉnh biên
                giới Kursk của Nga nhằm buộc Moskva phải đàm phán theo các điều
                khoản "công bằng".
              </p>
              <p className=" text-gray-700 text-sm pb-3 hover:cursor-pointer">
                "Ukraine muốn đàm phán theo các điều khoản chúng tôi đưa ra.
                Chúng tôi hoàn ...
              </p>
              <p className="text-gray-700 text-sm  hover:cursor-pointer">
                <span className="text-gray-400">2h trước</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 bg-white"></div>
      </div>
      <div className=" container  shadow-sm  pb-10 font-sans pt-1 ">
        <div className="  flex justify-between w-3/4 ml-52 ">
          <ul className="flex ">
            <li className="flex-1 px-2 w-[250px]">
              <h3 className=" font-[Merriweather] text-left font-semibold text-base pb-4 hover:text-blue-500 hover:cursor-pointer">
                Cựu cục trưởng đăng kiểm Trần Kỳ Hình khóc, xin khoan hồng
              </h3>
              <img
                className="w-[250px] h-[150px]"
                src="https://i1-vnexpress.vnecdn.net/2024/08/17/a6785287a451000f5940-172386061-4257-2348-1723863586.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=W4A_bqAx_P1Fo-5HbrjU3Q"
              />
            </li>
            <li className="flex-1 w-[250px] px-2">
              <h3 className=" font-[Merriweather] text-left font-semibold text-base pb-4 hover:text-blue-500 hover:cursor-pointer">
                Cuộc sống của người Nga dưới chính quyền quân sự Ukraine
              </h3>
              <img
                className="w-[250px] h-[150px]"
                src="https://i1-vnexpress.vnecdn.net/2024/08/17/Sudzha-5-1723871703.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=43uEMO7FmMeR0eGKbxOA4w"
              />
            </li>
            <li className="flex-1 px-2  w-[250px]">
              <p className="font-bold font-[arial] text-sm text-left text-[#9f224e]">
                Góc nhìn
              </p>
              <h3 className="font-[Merriweather] text-left font-bold text-base pb-4 hover:text-blue-500 hover:cursor-pointer">
                Nhìn kỹ mặt mẹ
              </h3>
              <div className="text-gray-700 text-sm pb-3 hover:cursor-pointer text-left">
                Tuần trước, tôi nhận tin nhắn của Như: 'Mẹ em nặng, chắc khó qua
                anh ạ'.
              </div>
              <div className="container flex  ">
                <div className="flex w-3/4   justify-start">
                  <div className=" flex  pt-5">
                    <p className="text-[#757575] size-[14px] italic relative contents">
                      Lưu Đình Long
                    </p>
                    <div className="absolute mt-7  flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="comment"
                        className="w-[12px] h-[12px] flex mt-[2px]"
                      >
                        <g>
                          <path d="M25,2H7A6,6,0,0,0,1,8V18a6,6,0,0,0,6,6h8.68l9.74,6.82a1,1,0,0,0,1.56-1l-.85-6A6,6,0,0,0,31,18V8A6,6,0,0,0,25,2Zm4,16a4,4,0,0,1-4,4,1,1,0,0,0-1,1.14l.67,4.72-8.11-5.68A1,1,0,0,0,16,22H7a4,4,0,0,1-4-4V8A4,4,0,0,1,7,4H25a4,4,0,0,1,4,4Z"></path>
                          <path d="M25 7H12a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2zM25 12H7a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2zM25 17H7a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2z"></path>
                        </g>
                      </svg>
                      <span className="pl-2 text-xs flex text-blue-400">
                        31
                      </span>
                    </div>
                  </div>
                </div>

                <img
                  className="rounded-full w-[72px] h-[72px] border-2 bg-gray-200 "
                  src="https://i1-vnexpress.vnecdn.net/2018/12/31/luudinhlongpng-1546193143.png?w=100&h=100&q=100&dpr=1&fit=crop&s=a97nx82DyNmRiLa0d6oWMQ"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex w-1/4 bg-white"></div>
      </div>
    </main>
  );
}

export default MainContent;
