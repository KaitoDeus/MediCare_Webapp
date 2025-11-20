import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name || "",
      email: doctorData?.email || "",
      password: doctorData?.password || "",
      phone: doctorData?.phone || "",
      bio: doctorData?.bio || "",
      gender: doctorData?.gender || "",
      specialization: doctorData?.specialization || "",
      ticketPrice: doctorData?.ticketPrice || 0,
      qualifications: doctorData?.qualifications || [],
      experiences: doctorData?.experiences || [],
      timeSlots: doctorData?.timeSlots || [],
      about: doctorData?.about || "",
      photo: doctorData?.photo || null,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Cập nhật thất bại");
      }

      toast.success(result.message || "Cập nhật thành công!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // tái sử dụng thêm item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // tái sử dụng input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  // tái sử dụng deleting item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "Bác sĩ",
      university: "UTH",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Ngoại khoa",
      hospital: "Bệnh viện Quận Bình Thạnh",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "Chủ nhật",
      startingTime: "10:00",
      endingTime: "04:30",
    });
  };

  const handleTimeSlot = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-2xl mb-10">
        Thông tin cá nhân
      </h2>

      <form className="space-y-6" onSubmit={updateProfileHandler}>
        {/* Họ tên */}
        <div>
          <label htmlFor="name" className="form__label">
            Họ tên*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Họ tên đầy đủ"
            className="form__input"
          />
        </div>

        {/* Email readonly */}
        <div>
          <label htmlFor="email" className="form__label">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Địa chỉ email"
            className="form__input form__input-readonly"
            readOnly
          />
        </div>

        {/* SĐT */}
        <div>
          <label htmlFor="phone" className="form__label">
            Số điện thoại*
          </label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Số điện thoại"
            className="form__input"
          />
        </div>

        {/* Tiểu sử */}
        <div>
          <label htmlFor="bio" className="form__label">
            Tiểu sử*
          </label>
          <input
            id="bio"
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Tiểu sử"
            maxLength={100}
            className="form__input"
          />
        </div>

        {/* Giới tính - Chuyên môn - Giá đặt */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="gender" className="form__label">
              Giới tính
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form__input bg-white"
            >
              <option value="">Chọn</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div>
            <label htmlFor="specialization" className="form__label">
              Chuyên môn
            </label>
            <select
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="form__input bg-white"
            >
              <option value="">Chọn</option>
              <option value="surgeon">Bác sĩ ngoại khoa</option>
              <option value="neurologist">Bác sĩ thần kinh</option>
              <option value="dermatologist">Bác sĩ da liễu</option>
            </select>
          </div>

          <div>
            <label htmlFor="ticketPrice" className="form__label">
              Giá đặt
            </label>
            <input
              id="ticketPrice"
              type="number"
              name="ticketPrice"
              value={formData.ticketPrice}
              onChange={handleInputChange}
              placeholder="100"
              className="form__input"
            />
          </div>
        </div>

        {/* Trình độ học vấn */}
        <div className="mb-5">
          <p className="form__label flex items-center justify-between">
            Trình độ học vấn*
          </p>
          {formData.qualifications.map((item, index) => (
            <div key={index} className="mb-5 border p-4 rounded-md">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="form__label">Ngày bắt đầu</label>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form__input"
                  />
                </div>
                <div>
                  <label className="form__label">Ngày kết thúc</label>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form__input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="form__label">Bằng cấp</label>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form__input"
                  />
                </div>
                <div>
                  <label className="form__label">Đại học</label>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form__input"
                  />
                </div>
              </div>

              <button
                onClick={(e) => deleteQualification(e, index)}
                type="button"
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Thêm
          </button>
        </div>

        {/* Kinh nghiệm làm việc */}
        <div className="mb-5">
          <p className="form__label flex items-center justify-between">
            Kinh nghiệm làm việc*
          </p>
          {formData.experiences.map((item, index) => (
            <div key={index} className="mb-5 border p-4 rounded-md">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="form__label">Ngày bắt đầu</label>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form__input"
                  />
                </div>
                <div>
                  <label className="form__label">Ngày kết thúc</label>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form__input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="form__label">Vị trí</label>
                  <input
                    type="text"
                    name="position"
                    value={item.position}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form__input"
                  />
                </div>
                <div>
                  <label className="form__label">Bệnh viện</label>
                  <input
                    type="text"
                    name="hospital"
                    value={item.hospital}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form__input"
                  />
                </div>
              </div>

              <button
                onClick={(e) => deleteExperience(e, index)}
                type="button"
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Thêm
          </button>
        </div>

        {/* Khung thời gian */}
        <div className="mb-5">
          <p className="form__label flex items-center justify-between">
            Khung thời gian*
          </p>
          {formData.timeSlots.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-4 mb-4 gap-5 border p-4 rounded-md"
            >
              <div>
                <label className="form__label">Ngày</label>
                <select
                  name="day"
                  value={item.day}
                  onChange={(e) => handleTimeSlot(e, index)}
                  className="form__input"
                >
                  <option value="">Chọn</option>
                  <option value="sunday">Chủ nhật</option>
                  <option value="monday">Thứ hai</option>
                  <option value="tuesday">Thứ ba</option>
                  <option value="wednesday">Thứ tư</option>
                  <option value="thursday">Thứ năm</option>
                  <option value="friday">Thứ sáu</option>
                  <option value="saturday">Thứ bảy</option>
                </select>
              </div>

              <div>
                <label className="form__label">Thời gian bắt đầu</label>
                <input
                  type="time"
                  name="startingTime"
                  value={item.startingTime}
                  onChange={(e) => handleTimeSlot(e, index)}
                  className="form__input"
                />
              </div>

              <div>
                <label className="form__label">Thời gian kết thúc</label>
                <input
                  type="time"
                  name="endingTime"
                  value={item.endingTime}
                  onChange={(e) => handleTimeSlot(e, index)}
                  className="form__input"
                />
              </div>

              <div className="flex items-center">
                <button
                  onClick={(e) => deleteTimeSlot(e, index)}
                  type="button"
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-7"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Thêm
          </button>
        </div>

        {/* Thông tin */}
        <div className="mb-5">
          <label className="form__label">Thông tin*</label>
          <textarea
            name="about"
            rows="5"
            value={formData.about}
            placeholder="Viết thông tin của bạn"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

        {/* Tải ảnh */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex 
                  items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                  bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
            >
              Tải ảnh lên
            </label>
          </div>
        </div>

        {/* Cập nhật */}
        <div className="mt-7">
          <button
            type="submit"
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
