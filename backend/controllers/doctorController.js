import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
  const id = req.params.id

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })

    res.status(200).json({ success: true, message: 'cập nhật thành công!', data: updatedDoctor })


  } catch (error) {
    console.log("Lỗi khi gọi updateDoctor", error)
    res.status(500).json({ success: false, message: 'cập nhật thất bại!' })
  }
}

export const deleteDoctor = async (req, res) => {
  const id = req.params.id

  try {
    await Doctor.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'đã xóa thành công!' })


  } catch (error) {
    console.log("Lỗi khi gọi deleteDoctor", error)
    res.status(500).json({ success: false, message: 'đã xóa thất bại!' })
  }
}

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password")

    res.status(200).json({ success: true, message: 'bác sĩ được tìm thấy!', data: doctor })


  } catch (error) {
    console.log("Lỗi khi gọi updateDoctor", error)
    res.status(404).json({ success: false, message: 'không tìm thấy bác sĩ!' })
  }
}

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password")
    }
    else {
      doctors = await Doctor.find({ isApproved: "approved" }).select("-password")
    }

    res.status(200).json({ success: true, message: 'bác sĩ được tìm thấy!', data: doctors })


  } catch (error) {
    console.log("Lỗi khi gọi updateDoctor", error)
    res.status(404).json({ success: false, message: 'không tìm thấy bác sĩ!' })
  }
}