import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("Kết nối CSDL thành công!")
  } catch (error) {
    console.log("Kết nối CSDL thất bại: ", error.message)
    process.exit(1) // exit with error
  }
}