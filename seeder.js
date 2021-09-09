const mongoose = require('mongoose')
const dotenv = require('dotenv')
const students = require('./Data/students')
const teachers = require('./Data/teachers')
const Student = require('./models/studentModel')
const Teacher = require('./models/teacherModel')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Student.deleteMany()
    await Teacher.deleteMany()

    const createdStudents = await Student.insertMany(students)

    console.log(createdStudents)

    const demoTeachers = teachers.map(teacher => {
      let stds = [];
      createdStudents.forEach(student => {
        if(student.assignedTeacher==teacher.name){
          stds.push(student)
        }   
      });
      //console.log(stds)
      return { ...teacher, students: stds }
    })
    await Teacher.insertMany(demoTeachers)

    console.log("data imported")
    process.exit()

  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}



const destroyData = async () => {
  try {
    await Student.deleteMany()
    await Teacher.deleteMany()

    console.log("data destroyed")
    process.exit()

  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

