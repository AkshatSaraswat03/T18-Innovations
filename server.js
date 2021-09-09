const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const studentRoutes = require('./routes/studentRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

dotenv.config()

connectDB()

const app = express()
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }
// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello...")
})


app.use('/api/students', studentRoutes)
app.use('/api/teachers', teacherRoutes)
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server running on port 5000"))
