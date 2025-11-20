const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Phí tư vấn</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          399.000 VNĐ
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Khung giờ trống:
        </p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thứ hai
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 10:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thứ năm
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 10:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Chủ nhật
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 10:00 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Đặt lịch hẹn</button>
    </div>
  );
};

export default SidePanel;
