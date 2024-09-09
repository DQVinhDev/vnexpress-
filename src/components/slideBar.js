// src/components/Sidebar.js
import React from "react";

function SildeBar() {
  return (
    <slide className="shadow-sm font-sans">
      <div className="container flex justify-around text-gray-700 items-center  shadow-sm ">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 48 48"
        >
          <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
          <path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path>
          <path
            fill="#B71C1C"
            d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"
          ></path>
          <path fill="#D84315" d="M18 28H30V44H18z"></path>
          <path fill="#01579B" d="M21 17H27V23H21z"></path>
          <path
            fill="#FF8A65"
            d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
          ></path>
        </svg>

        <p className="newlest">
          <a
            data-medium="Menu-MoiNhat"
            href="/tin-tuc-24h"
            title="Mới nhất"
            data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-MoiNhat&amp;vn_term=Desktop"
            data-itm-added="1"
            className="hover:text-red-600"
          >
            Mới nhất
          </a>
        </p>

        <span className="relative group thoisu" data-id="1001005">
          <div className="group-hover:block p-2 ">
            <a
              title="Thời sự"
              href="/thoi-su"
              data-medium="Menu-ThoiSu"
              data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-ThoiSu&amp;vn_term=Desktop"
              data-itm-added="1"
              className="hover:text-red-600 "
            >
              Thời sự
            </a>
            <ul className="absolute hidden bg-white p-2 group-hover:block shadow-vne mt-2 border-t-2 border-red-600">
              <li>
                <a
                  title="Chính trị"
                  href="https://vnexpress.net/thoi-su/chinh-tri"
                  className=" block text-left mr-3 p-1 text-gray-700  w-48 hover:underline"
                >
                  Chính trị
                </a>
              </li>
              <li>
                <a
                  title="Dân sinh"
                  href="https://vnexpress.net/thoi-su/dan-sinh"
                  className=" block text-left p-1 text-gray-700  hover:underline"
                >
                  Dân sinh
                </a>
              </li>
              <li>
                <a
                  title="Lao động - Việc làm"
                  href="https://vnexpress.net/thoi-su/lao-dong-viec-lam"
                  className=" block text-left p-1 text-gray-700  hover:underline"
                >
                  Lao động - Việc làm
                </a>
              </li>
              <li>
                <a
                  title="Giao thông"
                  href="https://vnexpress.net/thoi-su/giao-thong"
                  className=" block text-left p-1 text-gray-700  hover:underline"
                >
                  Giao thông
                </a>
              </li>
              <li>
                <a
                  title="Mekong"
                  href="https://vnexpress.net/thoi-su/mekong"
                  className="block text-left p-1 text-gray-700  hover:underline"
                >
                  Mekong
                </a>
              </li>
              <li>
                <a
                  title="Quỹ Hy vọng"
                  href="https://vnexpress.net/thoi-su/quy-hy-vong"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Quỹ Hy vọng
                </a>
              </li>
            </ul>
          </div>
        </span>

        <span className="relative group thoisu" data-id="1001005">
          <div className="group-hover:block p-2 ">
            <a
              title="Thời sự"
              href="/thoi-su"
              data-medium="Menu-ThoiSu"
              data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-ThoiSu&amp;vn_term=Desktop"
              data-itm-added="1"
              className="hover:text-red-600 "
            >
              Góc nhìn
            </a>
            <ul className="absolute hidden bg-white p-2 group-hover:block shadow-vne mt-2 border-t-2 border-red-600">
              <li>
                <a
                  title="Bình luận nhiều"
                  href="https://vnexpress.net/goc-nhin/binh-luan-nhieu"
                  data-medium="Menu-BinhLuanNhieu"
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                >
                  Bình luận nhiều
                </a>
              </li>

              <li>
                <a
                  title="Chính trị &amp; chính sách"
                  href="https://vnexpress.net/goc-nhin/chinh-tri-chinh-sach"
                  data-medium="Menu-ChinhTriChinhSach"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Chính trị &amp; chính sách
                </a>
              </li>

              <li>
                <a
                  title="Y tế &amp; sức khỏe"
                  href="https://vnexpress.net/goc-nhin/y-te-suc-khoe"
                  data-medium="Menu-YTeSucKhoe"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Y tế &amp; sức khỏe
                </a>
              </li>

              <li>
                <a
                  title="Kinh doanh &amp; quản trị"
                  href="https://vnexpress.net/goc-nhin/kinh-doanh-quan-tri"
                  data-medium="Menu-KinhDoanhQuanTri"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Kinh doanh &amp; quản trị
                </a>
              </li>

              <li>
                <a
                  title="Giáo dục &amp; tri thức"
                  href="https://vnexpress.net/goc-nhin/giao-duc-tri-thuc"
                  data-medium="Menu-GiaoDucTriThuc"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Giáo dục &amp; tri thức
                </a>
              </li>

              <li>
                <a
                  title="Môi trường"
                  href="https://vnexpress.net/goc-nhin/moi-truong"
                  data-medium="Menu-MoiTruong"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Môi trường
                </a>
              </li>

              <li>
                <a
                  title="Văn hóa &amp; lối sống"
                  href="https://vnexpress.net/goc-nhin/van-hoa-loi-song"
                  data-medium="Menu-VanHoaLoiSong"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Văn hóa &amp; lối sống
                </a>
              </li>

              <li>
                <a
                  title="Covid 19"
                  href="https://vnexpress.net/goc-nhin/covid-19"
                  data-medium="Menu-Covid19"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Covid 19
                </a>
              </li>

              <li>
                <a
                  title="Tác giả"
                  href="https://vnexpress.net/goc-nhin/tac-gia"
                  data-medium="Menu-TacGia"
                  className="flex text-left p-1 text-gray-700  hover:underline"
                >
                  Tác giả
                </a>
              </li>
            </ul>
          </div>
        </span>

        {/* Thế giới  */}

        <span className="relative group" data-id="1001005">
          <div className="group-hover:block p-2 ">
            <a
              title="Thời sự"
              href="/thoi-su"
              data-medium="Menu-ThoiSu"
              data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Menu-ThoiSu&amp;vn_term=Desktop"
              data-itm-added="1"
              className="hover:text-red-600 "
            >
              Thế giới
            </a>
            <ul className="absolute hidden bg-white p-2 group-hover:block shadow-vne mt-2 border-t-2 border-red-600">
              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Tư liệu
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline"
                  href="#"
                >
                  Phân tích
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline"
                  href="#"
                >
                  Người Việt 5 châu
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline"
                  href="#"
                >
                  Cuộc sống đó đây
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline"
                  href="#"
                >
                  Quân sự
                </a>
              </li>
            </ul>
          </div>
        </span>

        {/* Video */}
        <span className="relative group" data-id="1001005">
          <div className="group-hover:block p-2 ">
            <a className="hover:text-red-600 " href="#">
              Video
            </a>
            <ul className="absolute hidden bg-white p-2 group-hover:block shadow-vne mt-2 border-t-2 border-red-600">
              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Thời sự
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Nhịp sống
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Food
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Pháp luật
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Giải trí
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Thế giới
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Khoa học
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Thể thao
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Giáo dục
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Xe
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Số hóa
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Du lịch
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Sức khỏe
                </a>
              </li>

              <li>
                <a
                  className="flex text-left p-1 text-gray-700  hover:underline w-48"
                  href="#"
                >
                  Chủ đề
                </a>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </slide>
  );
}

export default SildeBar;
