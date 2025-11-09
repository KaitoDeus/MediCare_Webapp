import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from './config/db.js'
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
  origin: true
}

app.get('/', (req, res) => {
  res.send("Api is working")
})

// database connection
// mongoose.set('strictQuery', false)
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     console.log("Kết nối CSDL thành công!")
//   } catch (error) {
//     console.log("Kết nối CSDL thất bại: ", error.message)
//     process.exit(1)
//   }
// }

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

// routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)


// connectDB and listen
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
})
