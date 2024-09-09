import Article from "./Article";
import React, { useState } from "react";
import Bongda from "./Bongda";

function Main1Content() {
  const [startIndex, setStartIndex] = useState(0); // Track the starting index of visible cards
  const cardsToShow = 4; // Show 5 cards at a time
  const bongDaData = [
    {
      time: "Ngày mai, 17:10",  
      team1: "Australia",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Australia.jpg",
      team2: "Bahrain",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1547.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },

    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
    {
      time: "Ngày mai, 17:35",
      team1: "Nhật Bản",
      imgTeam1:
        "https://s1.vnecdn.net/vnexpress/restruct/i/v933/flag/Nhat_Ban.png",
      team2: "Trung Quốc",
      imgTeam2: "https://is.vnecdn.net/objects/teams/1566.png",
    },
  ];
  const handleNext = () => {
    if (startIndex + cardsToShow < bongDaData.length) {
      setStartIndex(startIndex + cardsToShow);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - cardsToShow);
    }
  };

  return (
    <main>
      <div className="flex  ml-52 ">
        <div className=" w-[400px]">
          <Article
            content={
              "Iran thề sẽ khiến Israel hứng đòn đau sau các vụ ám sát, nhưng chủ yếu bằng lời đe dọa không rõ ràng, dường như để chờ đợi hòa đàm Gaza và bầu cử tổng thống Mỹ."
            }
            title={"Lý do Iran mập mờ về đòn trừng phạt Israel "}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/15/afp-20240510-34rb63h-v1-highre-7195-8770-1723700290.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=u7KMT83TH3sLWsmscH6JBg"
            }
          />
          <Article
            content={
              "Đến bây giờ mong mỏi lớn nhất của Quế Trâm là một cuộc sống bình thường nhưng cô biết đó là điều quá khó với một người từng làm 'sugar baby'."
            }
            title={"Hối hận muộn màng của những 'sugar baby'"}
            imgSrc={
              "https://i1-giadinh.vnecdn.net/2024/08/21/nvsgbb-1724175032-1724175374-8098-1724175603.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=bX-hy7jQLefdJxYuHN-bmA"
            }
          />
          <Article
            content={
              "Zalo giảm dung lượng lưu trữ miễn phí từ 1 GB xuống 500 MB, nhưng không thông báo trước cho người dùng ứng dụng nhắn tin."
            }
            title={"Zalo giảm một nửa dung lượng lưu trữ miễn phí"}
            imgSrc={
              "https://i1-sohoa.vnecdn.net/2024/08/20/LQ-02187-5397-1724166713.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=sdL4SvNamKe6nNUAk3_ouQ"
            }
          />
          <Article
            content={
              "Tiền đạo hưởng lương cao nhất thế giới Cristiano Ronaldo chưa đoạt danh hiệu chính thức nào cùng Al Nassr, trong khi còn nhiều đồng đội đang muốn tìm bến đỗ mới."
            }
            title={"Ronaldo vỡ mộng tại Al Nassr "}
            imgSrc={
              "https://i1-thethao.vnecdn.net/2024/08/21/ronaldo-1724211829-5558-1724211963.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=xOoI6ZE19Hamm4GzCBy3vQ"
            }
          />
          <Article
            content={
              "Người dân vội vã rời Pokrovsk sau yêu cầu sơ tán của giới chức Ukraine trong lúc lực lượng Nga đang tiến nhanh về đô thị trọng yếu ở tỉnh Donetsk."
            }
            title={
              "Tình cảnh tại thành phố trọng yếu Pokrovsk khi lực lượng Nga tiến gần"
            }
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/20/5563187178137268451a-ukraine-1-7691-2372-1724143229.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=2SgKvtvS0ijw-4e1ouuQow"
            }
          />
          <Article
            content={
              "Sau cơn mưa kéo dài, quốc lộ 18 đoạn qua bản Tài Phố, xã Quảng Đức, huyện Hải Hà bị sạt lở mái taluy âm khiến phương tiện không thể qua lại."
            }
            title={"Quốc lộ 18 bị chia cắt vì sạt lở"}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/2-1724199000-3162-1724199011.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=zoj4Cm4cHUC9OG4OXwmP8w"
            }
          />
          <Article
            content={
              "Thu nhập hàng trăm triệu đồng một tháng, sở hữu chung cư, ôtô, sổ tiết kiệm, nhưng anh Tuấn, 41 tuổi, luôn ám ảnh về tương lai 'tay trắng', lâu ngày dẫn đến bệnh rối loạn lo âu."
            }
            title={"Rối loạn tâm thần bởi nỗi sợ 'bị nghèo trở lại' "}
            imgSrc={
              "https://i1-suckhoe.vnecdn.net/2024/08/20/a9fcbc27acd2088c51c3-172405492-9034-4812-1724141088.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=PESgMmNH2ox03pAEfzJ_6Q"
            }
          />
          <Article
            content={
              "Chính thức trở thành ứng viên tổng thống đảng Dân chủ, bà Harris đang nắm lợi thế tranh cử, nhưng sẽ đối mặt nhiều thách thức về kinh tế và chính sách."
            }
            title={
              "Thách thức chờ đợi bà Harris trong chặng nước rút tranh cử "
            }
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/20/afp-20240727-366f6r3-v2-highre-8501-2659-1724150965.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=OlrbHo5ud0p7j1vY6WhCYA"
            }
          />
          <Article
            content={
              "Biểu giá bán lẻ điện dự kiến còn 5 bậc thay vì 6, giá cho các nhóm được điều chỉnh để giảm tình trạng hộ gia đình phải bù chéo cho sản xuất kinh doanh."
            }
            title={"Bộ trưởng Công Thương: Biểu giá điện mới sẽ giảm bù chéo"}
            imgSrc={
              "https://i1-kinhdoanh.vnecdn.net/2024/08/21/nguyenhongdien-1724210400-1724-4940-1577-1724210571.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=lKR6hkLQr42qJAIuRDiBJg"
            }
          />
          <Article
            content={
              "Ukraine đăng video tấn công căn cứ Nga tại tỉnh Kursk bằng bom lượn, loại vũ khí thường được Moskva sử dụng để tập kích mục tiêu của Kiev."
            }
            title={"Khoảnh khắc tiêm kích Ukraine ném bom lượn vào tỉnh Kursk "}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/5563187178137268466a-ukraine-1-2845-8232-1724200537.jpg?w=180&h=108&q=100&dpr=1&fit=crop&s=zHCBi8yLk2KFTGbKy3gUYg"
            }
          />
          <Article
            content={
              "Hàng trăm phụ huynh kéo đến trường Tiểu học Tây Mỗ 3 vì lo lắng con không được vào học, dù trường ở ngay đối diện khu chung cư."
            }
            title={"Hàng trăm phụ huynh quây trường để xin học cho con"}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/z5752107155791-761be69c0e54e03-7980-1520-1724219605.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=Xu0Nsd7dEA7socAT_YNv7Q"
            }
          />
          <Article
            content={
              "Ôtô 7 chỗ chạy trên cao tốc Hà Nội - Thái Nguyên, khi đến TP Phổ Yên đã đâm vào xe tải đang đỗ ở làn sát dải phân cách khiến tài xế tử nạn."
            }
            title={"Đâm vào xe tải đỗ trên cao tốc, tài xế tử nạn "}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/454729964-8647970215236841-648-5939-7327-1724214582.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=4qRm8gwXt_--azebroL17Q"
            }
          />
          <Article
            content={
              "Bị đưa ra xét xử về cáo buộc lừa đảo hơn 240 triệu đồng, cô đồng bói cau Trương Thị Hương kêu oan, nói 'không nhớ, không biết' các bị hại đã chuyển tiền."
            }
            title={"Cô đồng bói cau khai 'không nhớ' đã nhận tiền giải hạn "}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/z5751640298237-5317d4191ba02dd-8986-4340-1724214425.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=M6Q8X_dgtpu2sF6awqBl4Q"
            }
          />
          <Article
            content={
              "Pickleball phát triển nhanh đến nỗi lấn át tennis, môn thể thao có lịch sử và sự phổ biến lâu đời, tạo ra những tranh cãi gay gắt trong đời sống thể thao Mỹ."
            }
            title={"Tranh cãi giữa pickleball và tennis ở Mỹ"}
            imgSrc={
              "https://i1-thethao.vnecdn.net/2024/08/21/airh7ayohngubkvfwhq5tmgfri-172-6944-6266-1724207426.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=MpkdoS4d_w0UWXdTPyTRrw"
            }
          />
          <Article
            content={
              "Giá khởi điểm quá thấp, mức trúng cao nhất hơn 130 triệu đồng một m2 và tổ chức xuyên đêm được xem là những điểm bất thường tại phiên đấu giá đất ở Hoài Đức."
            }
            title={
              "Những bất hợp lý từ phiên đấu giá đất xuyên đêm ở Hoài Đức "
            }
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/20/454419150-1402737400405290-636-5223-6365-1724157757.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=eqJCjh7fgrzcZcob6v_JUw"
            }
          />
          <Article
            content={
              "Ông Obama phát biểu tại đại hội đảng Dân chủ, nói ngọn đuốc đã được truyền lại cho bà Harris và nước Mỹ sẵn sàng có nữ tổng thống đầu tiên."
            }
            title={"Ông Obama nói nước Mỹ đã sẵn sàng có nữ tổng thống"}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/08/21/73c515b5c7ac4e24bc1073f48903fb-6184-1367-1724216243.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=iMvD5DltGo_UVEnYtPu8qA"
            }
          />
          <Article
            content={
              "PSG đề nghị đội tuyển Nga để thủ môn Matvey Safonov thi đấu với Thái Lan thay vì Việt Nam, trong loạt trận giao hữu tháng 9."
            }
            title={"PSG không muốn thủ môn Nga bắt trận đấu Việt Nam"}
            imgSrc={
              "https://i1-thethao.vnecdn.net/2024/09/04/matvey-safonov-nga-jpeg-172543-8772-4295-1725432225.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=bnAf0-kqwG1ykX36yRylfg"
            }
          />
          <Article
            content={
              "Sau mưa lớn, nước lũ kèm theo cát đỏ từ phía đồi tiếp tục tràn xuống đường, uy hiếp người đi đường trên tuyến nối trung tâm Phan Thiết ra Mũi Né, chiều 4/9."
            }
            title={"Lũ cát đỏ tràn xuống đường nối Phan Thiết - Mũi Né"}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/09/04/F8DBEB3CCE724C4F91524A386615AE-2126-6756-1725451709.png?w=220&h=132&q=100&dpr=1&fit=crop&s=MqlLAhnxBXFaZO7IRHVD1g"
            }
          />
          <Article
            content={
              "Tổng thống Zelensky cho biết Ukraine cần 'nguồn năng lượng mới' khi ông thúc đẩy đợt cải tổ chính phủ lớn nhất, với hàng loạt phó thủ tướng, bộ trưởng từ chức."
            }
            title={"Ông Zelensky nêu lý do loạt bộ trưởng từ chức"}
            imgSrc={
              "https://i1-vnexpress.vnecdn.net/2024/09/04/afp-20240517-34rq8bc-v1-highre-2366-4903-1725452747.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=eewZB_hz1KHw6EAXdflgnQ"
            }
          />
        </div>

        <div className=" w-[680px]">
          <div>
            <hgroup className="container flex justify-around p-3 font-[arial] ">
              <h2 className="text-[18px] font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Kinh doanh</a>
              </h2>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Quốc tế</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Doanh nghiệp</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Hàng hóa</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Vĩ mô</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Ebank</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Hậu trường kinh doanh</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-kinhdoanh.vnecdn.net/2024/08/24/453749897-907109504792796-8577-6015-7489-1724471959.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=g8CrhWYu3B5yBNov-KTGcA"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Vua Nệm vẫn chưa thoát lỗ
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Hệ thống bán lẻ nệm lớn nhất cả nước lỗ gần 13 tỷ đồng trong
                    nửa đầu năm, dù đã trả hết 150 tỷ đồng nợ trái phiếu.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                Giá vàng giảm, chứng khoán Mỹ lập đỉnh mới
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Mỗi ounce vàng giảm hơn 1%, trong khi chỉ số DJIA lập kỷ lục mới
                sau khi Mỹ công bố báo cáo lạm phát.
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                So găng Winmart và Bách Hóa Xanh sau khi cùng báo lãi
              </h3>
              <div className=" mt-[52px]  mr-[20px] inline-flex hover:cursor-pointer">
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
                <span className="pl-2 text-xs flex text-blue-400">31</span>
              </div>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                'Xuất khẩu rau quả chế biến có thể lập kỷ lục 1,4 tỷ USD năm
                nay'
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Bảo hiểm xe máy bắt buộc bồi thường gần 42 tỷ nửa đầu năm
              </h3>
            </div>
          </div>
          <div className="flex shadow-sm text-xs pb-3">
            <div className="pt-3 pl-2 ">
              <table className="border-spacing-0 border border-gray-300 h-[78px] w-[287px]">
                <thead>
                  <tr className="border border-gray-300 ">
                    <th className=" px-2 py-2 text-left border border-gray-300 ">
                      Giá vàng
                    </th>
                    <th className=" px-2 py-2 text-right border border-gray-300 font-normal">
                      Mua
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      Bán
                    </th>
                  </tr>
                  <tr className="px-2 py-2 border border-gray-300  ">
                    <th className="px-2 py-2 text-left border border-gray-300 font-normal">
                      Thế giới (USD/ounce)
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal ">
                      2.503,3
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300  font-normal">
                      2.504,3
                    </th>
                  </tr>
                  <tr className="border border-gray-300  ">
                    <th className="px-2 py-2 text-left border border-gray-300 font-normal">
                      Vàng SJC (triệu đồng/lượng)
                    </th>
                    <th className=" px-2 py-2 text-right border border-gray-300 font-normal">
                      79
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      81
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="pt-3 pl-1">
              <table className="border-spacing-0 border border-gray-300 h-[78px] w-[382px] ">
                <thead>
                  <tr className="border border-gray-300 ">
                    <th className=" px-2 py-2 text-left border border-gray-300 ">
                      Lãi suất tiết kiệm (%/năm)
                    </th>
                    <th className=" px-2 py-2 text-center border border-gray-300 font-normal">
                      1
                    </th>
                    <th className="px-2 py-2 text-center border border-gray-300 font-normal">
                      3
                    </th>
                    <th className="px-2 py-2 text-center border border-gray-300 font-normal">
                      6
                    </th>
                    <th className="px-2 py-2 text-center border border-gray-300 font-normal">
                      9
                    </th>
                    <th className="px-2 py-2 text-center border border-gray-300 font-normal">
                      12
                    </th>
                  </tr>
                  <tr className="px-2 py-2 border border-gray-300  ">
                    <th className="px-2 py-2 text-left border border-gray-300 font-normal">
                      Online
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal ">
                      3,85
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300  font-normal">
                      4,3
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300  font-normal">
                      5,55
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300  font-normal">
                      5,7
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300  font-normal">
                      6,2
                    </th>
                  </tr>
                  <tr className="border border-gray-300  ">
                    <th className="px-2 py-2 text-left border border-gray-300 font-normal">
                      Tại quầy
                    </th>
                    <th className=" px-2 py-2 text-right border border-gray-300 font-normal">
                      3,7
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      4
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      5,4
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      5,4
                    </th>
                    <th className="px-2 py-2 text-right border border-gray-300 font-normal">
                      5,8
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          {/* bất động sản */}
          <div>
            <hgroup className="container flex justify-around p-3 font-[arial] ">
              <h2 className="text-[18px] font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Bất động sản</a>
              </h2>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Chính sách</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Thị trường</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Dự án</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Không gian sống</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Tư vấn</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-vnexpress.vnecdn.net/2024/08/31/donganh-1725092376-4876-1725092419.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=JUcbZykEwhrWOgYsACWm9A"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Hà Nội gia hạn tìm nhà đầu tư khu đô thị hơn 33.000 tỷ ở
                    Đông Anh
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Do chỉ có một đơn vị đăng ký, Hà Nội tiếp tục tìm nhà đầu tư
                    cho khu đô thị hơn 33.000 tỷ ở Đông Anh đến ngày 12/9.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                Xu hướng làm vườn treo trong nhà phố
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Vườn treo với lối thiết kế phủ kín mảng tường bằng hệ cây cảnh
                đang được nhiều người ưa chuộng vì đáp ứng về một không gian
                xanh ...
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Khó mua chung cư giá rẻ Đồng Nai
              </h3>
              <div className=" mt-[52px]  mr-[20px] inline-flex hover:cursor-pointer">
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
                <span className="pl-2 text-xs flex text-blue-400">31</span>
              </div>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Nhà phố 86 m2 với hệ khung bằng thép tiền chế'
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Người dân New York tốn hơn nửa thu nhập để thuê nhà
              </h3>
            </div>
          </div>
          {/* thể thao */}
          <div>
            <hgroup className="container flex justify-around p-3 font-[arial] ">
              <h2 className="text-[18px] font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Thể thao</a>
              </h2>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Bóng đá</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Tennis</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Marathon</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Lịch thi đấu</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>VnExpress Marathon</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-thethao.vnecdn.net/2024/08/31/240831novakdjokoviccc1210a1-17-7423-5890-1725086288.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=NDoip_QNHJudTKbJEjiJXQ"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Djokovic: 'Tôi chơi quá tệ'
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Novak Djokovic thừa nhận bản thân trải qua trận tệ nhất ở
                    Grand Slam, khi thua 4-6, 4-6, 6-2, 4-6 dưới tay Alexei
                    Popyrin tại Mỹ Mở rộng ...
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                William Saliba - chiếc Rolls Royce của Arsenal
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Được chia sẻ trách nhiệm phòng ngự, nhưng trung vệ William
                Saliba vẫn là bệ phóng để Arsenal hướng ...
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Djokovic nối gót Alcaraz rời Mỹ Mở rộng
              </h3>
              <div className=" mt-[52px]  mr-[20px] inline-flex hover:cursor-pointer">
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
                <span className="pl-2 text-xs flex text-blue-400">31</span>
              </div>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Bóng chuyền nữ Việt Nam dự World Cup 2025
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Liverpool được dự đoán thắng Man Utd ở vòng 3 Ngoại hạng Anh
              </h3>
            </div>
          </div>
          {/* lịch thi đấu*/}
          <div className="container flex justify-between p-2 font-[arial] text-sm">
            <div>Lịch thi đấu: </div>
            <div>Nguồn</div>
          </div>
          <div className="container flex">
            <button
              className="bg-gray-100 hover:bg-gray-400 text-black py-2 px-4 rounded"
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              &lt;
            </button>
            <div className="flex">
              {bongDaData
                .slice(startIndex, startIndex + cardsToShow)
                .map((card, index) => (
                  <Bongda
                    key={index}
                    time={card.time}
                    team1={card.team1}
                    imgTeam1={card.imgTeam1}
                    team2={card.team2}
                    imgTeam2={card.imgTeam2}
                  />
                ))}
            </div>
            <button
              className="bg-gray-100 hover:bg-gray-400 text-black py-2 px-4 rounded"
              onClick={handleNext}
              disabled={startIndex + cardsToShow >= bongDaData.length}
            >
              &gt;
            </button>
          </div>
          {/*  giai tri */}
          <div>
            <hgroup className="container flex   pl-5 p-3 font-[arial] ">
              <h2 className="text-[18px]  font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Giải trí</a>
              </h2>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Giới sao</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Phim</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Nhạc</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Thời trang</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-giaitri.vnecdn.net/2024/09/04/visore-ines-de-ramon-ipa-1725434733-1725438340.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=VoTmguj-KlOL5qWTm9MkCg"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Bạn gái kín tiếng của Brad Pitt
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Người yêu kém Brad Pitt gần 30 tuổi - Ines de Ramon - là nhà
                    thiết kế trang sức có cuộc sống kín đáo, biết năm ...
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                'Đứa trẻ được nuôi trong chuồng chó' - sang chấn tâm lý tuổi thơ
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                "Đứa trẻ được nuôi trong chuồng chó" nêu kiến thức về lĩnh vực
                tâm thần nhi với mong muốn ngăn ngừa ...
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Cuộc đời như phim của 'nữ hiệp' màn ảnh Hoa ngữ
              </h3>
              <div className=" mt-[52px]  mr-[20px] inline-flex hover:cursor-pointer">
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
                <span className="pl-2 text-xs flex text-blue-400">31</span>
              </div>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Sắc vóc tuổi 24 của vợ Bùi Tiến Dũng
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Uyển Ân - từ vai phụ mờ nhạt đến diễn viên tiềm năng
              </h3>
            </div>
          </div>
          {/* sức khỏe */}
          <div>
            <hgroup className="container flex  p-3 pl-5 font-[arial] ">
              <h2 className="text-[18px] font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Sức khỏe</a>
              </h2>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Tin tức</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Các bệnh</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Sức khỏe</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Vaccine</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-suckhoe.vnecdn.net/2024/09/04/pexels-shvetsa-4226219-1725441-6272-2023-1725441155.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=Ti8CVyAfkFqFe6LH480hqw"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Bác sĩ bị tố cáo vì để con gái 13 tuổi khoan hộp sọ bệnh
                    nhân
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Một bác sĩ phẫu thuật thần kinh đang bị điều tra vì cáo buộc
                    cho phép con gái 13 tuổi khoan lỗ trên hộp sọ ...
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                Tử vong sau ca mổ thay khớp háng do sự cố gây tê
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Bác sĩ Rachel Gibson, 47 tuổi, ngừng tim sau ca phẫu thuật thay
                khớp háng tại Bệnh viện Spire Lea ...
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Biến chứng lao khiến khí quản hẹp như sợi chỉ
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Những bệnh tình dục có thể lây qua nụ hôn
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Hai người suy đa tạng do nhiễm vi khuẩn 'ăn thịt người'
              </h3>
            </div>
          </div>
          {/* Đời sống*/}
          <div>
            <hgroup className="container flex  font-[arial] p-3 pl-5 ">
              <h2 className="text-[18px] font-semibold  underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Đời sống</a>
              </h2>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Bài học sống</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Tổ ấm</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Tiêu dùng</a>
              </span>
              <span className="hover:text-blue-500 pl-5 cursor-pointer">
                <a>Cooking</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-giadinh.vnecdn.net/2024/09/04/77a0e21e-02d5-4fc9-bd99-a6efe3-9946-9270-1725440605.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=ZVQvbUhAxn7-b6V7OCsvaw"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Cách sưởi ấm hôn nhân không còn tình yêu
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Nhà triết học người Pháp Michel Montaigne cho rằng tình yêu
                    khiến cho con người mất trí và hôn nhân khiến họ nhận ra sự
                    mất mát đó.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                Bún lòng xào nghệ kiểu Huế
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Bát bún nổi bật bởi sắc vàng ươm bắt mắt, lòng giòn dai, có chút
                béo ngậy quyện với bún mềm thấm vị ngọt ngon từ lòng, vị the cay
                ...
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Người Mỹ ngày càng thích đi ăn một mình
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Tái hôn ở tuổi 93, ông lão phá thỏa thuận tặng nhà cho bạn
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Chàng trai Mỹ tìm được 'cô vợ trong mơ' khi tới Việt Nam
              </h3>
            </div>
          </div>
          {/* Giáo dục */}
          <div>
            <hgroup className="container flex justify-around p-3 font-[arial]">
              <h2 className="text-[18px] font-semibold font-sans underline hover:decoration-blue-500 decoration-[#9f224e] underline-offset-4 decoration-2 cursor-pointer hover:text-blue-500">
                <a>Giáo dục</a>
              </h2>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Tin tức</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Tuyển sinh</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Chân dung</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Du học</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Giáo dục 4.0</a>
              </span>
              <span className="hover:text-blue-500 cursor-pointer">
                <a>Trắc nghiệm</a>
              </span>
            </hgroup>
          </div>
          <div className="container flex ">
            <div className=" flex shadow-sm p-5 w-[460px]">
              <div className="flex">
                <img
                  className="w-[225px]  "
                  src="https://i1-vnexpress.vnecdn.net/2024/09/04/truong-1725440110-8757-1725440203.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=aZuPixU8Rz2IQi9sF_5JmQ"
                />

                <div className=" ">
                  <h3 className="pl-4 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                    Trường học nào là di tích lịch sử quốc gia đặc biệt?
                  </h3>
                  <p className=" text-left ml-5 text-[13px] color-[#4F4F4F]">
                    Ngôi trường này nằm trên khuôn viên hơn 10.000 m2, từng đào
                    tạo nhiều nhà lãnh đạo nổi tiếng, là trường học duy ...
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[220px] shadow-sm p-5">
              <h3 className="font-[Merriweather] text-left font-bold text-[16px] pb-1 hover:text-blue-500 hover:cursor-pointer">
                Thêm một đại học dự kiến tổ chức thi riêng
              </h3>
              <p className=" text-left  text-[13px] color-[#4F4F4F]">
                Trường Đại học Sư phạm Hà Nội 2 (Vĩnh Phúc) dự kiến tổ chức kỳ
                thi đánh giá năng lực để xét tuyển đầu vào.
              </p>
            </div>
          </div>
          <div className="container flex pt-2 shadow-sm">
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Bộ Giáo dục: Không khai giảng ở những nơi mưa lớn do bão Yagi
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Tân sinh viên sốc vì giá phòng trọ
              </h3>
            </div>
            <div className="flex ">
              <div class="ml-5 mt-2 p-1  left-[-15px] w-[6px] h-[6px] rounded-full bg-[#ababab] before:content-['']"></div>
              <h3 className=" pl-2 font-[Merriweather] text-left font-bold text-[16px] pb-4 hover:text-blue-500 hover:cursor-pointer">
                Chủ tịch TP HCM yêu cầu xử lý triệt để việc lạm thu
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main1Content;
