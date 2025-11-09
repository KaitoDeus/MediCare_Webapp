import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = user => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  })
}

// register
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body

  try {
    let user = null

    if (role === 'patient') {
      user = await User.findOne({ email })
    }
    else if (role === 'doctor') {
      user = await Doctor.findOne({ email })
    }

    // check if user exist
    if (user) {
      return res.status(400).json({ message: "user đã tồn tại!" })
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if (role === 'patient') {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      })
    }

    if (role === 'doctor') {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role
      })
    }

    await user.save()

    res.status(200).json({ success: true, message: 'user đã được tạo thành công!' })

  } catch (error) {
    console.log("Lỗi khi gọi register", error)
    res.status(500).json({ success: false, message: 'Lỗi hệ thống' })
  }
}

// login
export const login = async (req, res) => {
  const { email } = req.body

  try {
    let user = null

    const patient = await User.findOne({ email })
    const doctor = await Doctor.findOne({ email })

    if (patient) {
      user = patient
    }
    if (doctor) {
      user = doctor
    }

    // check if user exist or not
    if (!user) {
      return res.status(404).json({ message: "không tìm thấy user" })
    }

    // compare password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

    if (!isPasswordMatch) {
      return res.status(404).json({ status: false, message: "thông tin đăng nhập không hợp lệ" })
    }

    // get token
    const token = generateToken(user)

    const { password, role, appointments, ...rest } = user._doc

    res.status(200).json({ status: true, message: "Đăng nhập thành công!", token, data: { ...rest }, role })
  } catch (error) {
    console.log("Lỗi khi gọi login", error)
    res.status(500).json({ success: false, message: 'Lỗi hệ thống' })
  }
}