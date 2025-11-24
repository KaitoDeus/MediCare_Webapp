import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"
import bcrypt from "bcryptjs";

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const { password, ...rest } = req.body;

    let updateData = { ...rest };

    // Nếu có password mới → hash rồi lưu
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "cập nhật thành công!",
      data: updatedUser
    });

  } catch (error) {
    console.log("Lỗi khi gọi updateUser", error);
    res.status(500).json({ success: false, message: "cập nhật thất bại!" });
  }
};


// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id

  try {
    await User.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'đã xóa thành công!' })


  } catch (error) {
    console.log("Lỗi khi gọi deleteUser", error)
    res.status(500).json({ success: false, message: 'đã xóa thất bại!' })
  }
}

// get user by id
export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findById(id).select("-password")

    res.status(200).json({ success: true, message: 'người dùng được tìm thấy!', data: user })


  } catch (error) {
    console.log("Lỗi khi gọi updateUser", error)
    res.status(404).json({ success: false, message: 'không tìm thấy người dùng!' })
  }
}

// get all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password")

    res.status(200).json({ success: true, message: 'người dùng được tìm thấy!', data: users })


  } catch (error) {
    console.log("Lỗi khi gọi updateUser", error)
    res.status(404).json({ success: false, message: 'không tìm thấy người dùng!' })
  }
}

//
export const getUserProfile = async (req, res) => {
  const userId = req.userId

  try {
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' })
    }

    const { password, ...rest } = user._doc

    res.status(200).json({ success: true, message: 'Thông tin hồ sơ đang được nhận', data: { ...rest } })

  } catch (err) {
    res.status(500).json({ success: false, message: 'Có gì đó không ổn, không thể lấy được' })
  }
}

//
export const getMyAppointments = async (req, res) => {
  try {

    // step 1: retrieve appointments form booking for specific user
    const bookings = await Booking.find({ user: req.userId })

    // step 2: extract doctor ids from appointment bookings
    const doctorIds = bookings.map(el => el.doctor.id)

    // step 3: retrieve doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')

    res.status(200).json({ success: true, message: 'Cuộc hẹn đang diễn ra', data: doctors })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Có gì đó không ổn, không thể lấy được' })
  }
}