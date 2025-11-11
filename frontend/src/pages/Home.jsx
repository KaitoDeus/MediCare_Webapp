import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/About.jsx";
import ServiceList from "../components/services/ServiceList.jsx";
import DoctorList from "../components/doctors/doctorList.jsx";
import FaqList from "../components/faq/FaqList.jsx";
import Testimonial from '../components/testimonial/Testimonial.jsx';

const Home = () => {
  return (
    <div>
      {/* ======== Hero Section ======== */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ======== Hero Content ======== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Tư vấn y tế Medicare tại nhà
                </h1>
                <p className="text__para">
                  Nền tảng hỗ trợ tư vấn sức khỏe trực tuyến giúp bạn kết nối
                  với bác sĩ mọi lúc, mọi nơi. Đặt lịch khám, nhận chẩn đoán và
                  theo dõi tình trạng sức khỏe ngay tại nhà với dịch vụ
                  Medicare.
                </p>

                <button className="btn">Đặt lịch ngay</button>
              </div>

              {/* ======== Hero Counter ======== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Năm kinh nghiệm</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Chi nhánh trên toàn quốc</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para"> Độ uy tín</p>
                </div>
              </div>
            </div>

            {/* ======== Hero Content ======== */}
            <div className="flex gap-[30px] justfiy-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== Hero Section End ======== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h3 className="heading text-center">
              Chuyên cung cấp dịch vụ y tế chất lượng cao
            </h3>
            <p className="text__para text-center">
              Chúng tôi cam kết tận tâm vì sức khoẻ công đồng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Bác sĩ
                </h3>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text center">
                  Chúng tôi cam kết tận tâm vì sức khoẻ công đồng
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                    mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Vị trí của chúng tôi
                </h3>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text center">
                  Chúng tôi cam kết tận tâm vì sức khoẻ công đồng
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                    mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Đặt lịch
                </h3>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text center">
                  Chúng tôi cam kết tận tâm vì sức khoẻ công đồng
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] 
                    mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== About Section End ======== */}
      <About />

      {/* ======== Services Section ======== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Dịch vụ của chúng tôi</h2>
            <p className="text__para text-center">
              Chất lượng chăm sóc toàn cầu, tiếp cận mọi cá nhân. Hệ thống của
              chúng tôi cam kết mang lại dịch vụ chăm sóc sức khỏe chuyên môn và
              vượt trội.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ======== Services Section End ======== */}

      {/* ======== Feature Section ======== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======== Feature Content ======== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Nhận điều trị <br /> bất cứ lúc nào.
              </h2>

              <ul className="pl-4">
                <li className="text_para">1. Đặt lịch hẹn.</li>
                <li className="text_para">
                  2. Tìm kiếm bác sĩ và liên hệ với phòng khám của họ.
                </li>
                <li className="text_para">
                  3. Xem danh sách bác sĩ đang nhận bệnh nhân và có chấp nhận
                  đặt lịch trực tuyến để chọn thời gian hẹn khám.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Tìm hiểu thêm</button>
              </Link>
            </div>

            {/* ======== Feature Images ======== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="Video Call Icon" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-3 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Nhận tư vấn
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== Feature Section End ======== */}
      {/* ======== Our great doctors ======== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Bác sĩ của chúng tôi</h2>
            <p className="text__para text-center">
              Đội ngũ chuyên gia y tế hàng đầu, được tuyển chọn kỹ lưỡng. Mỗi
              thành viên trong đội ngũ đều được chứng nhận, sẵn sàng cung cấp tư
              vấn tận tâm và đáng tin cậy ngay từ xa.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* ======== Our great doctors end ======== */}

      {/* ======== faq section ======== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Thông tin có thể bạn quan tâm 
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ======== faq section end ======== */}

      {/* ======== testimonial ======== */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Mọi người chia sẻ gì về chúng tôi</h2>
          <p className="text__para text-center">
            Lắng nghe trải nghiệm thực tế từ những bệnh nhân đã sử dụng dịch vụ của chúng tôi.
             Xem cách chúng tôi mang lại sự chăm sóc chuyên môn và sự hài lòng cho mọi người.
          </p>
        </div>
          <Testimonial />
        </div>
      </section>
      {/* ======== testimonail end ======== */}
      
    </div>
  );
};

export default Home;
