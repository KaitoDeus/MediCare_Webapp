import User from "../models/UserSchema.js"

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

    res.status(200).json({ success: true, message: 'cập nhật thành công!', data: updatedUser })


  } catch (error) {
    console.log("Lỗi khi gọi updateUser", error)
    res.status(500).json({ success: false, message: 'cập nhật thất bại!' })
  }
}

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