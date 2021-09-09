const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Teacher = require('../models/teacherModel')


// to register a new teacher
//public
// router.post('/', asyncHandler(async (req, res) => {
//   const { name, email, subject } = req.body

//   const studentExists = await Student.findOne({ email })

//   if (studentExists) {
//     res.status(400)
//     throw new Error('User exists')
//   }

//   const student = await Student.create({
//     name,
//     email,
//     password
//   })

//   if (student) {
//     res.status(201).json({
//       _id: student._id,
//       name: student.name,
//       email: student.email,
//       assignedTeacher: student.assignedTeacher
//     })
//   } else {
//     res.status(400)
//     throw new Error('User not found!!')
//   }

// }))



//get all teachers
router.get('/', asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({})
  res.json(teachers)
}))


// @desc    Get teachers by subject
// @route   GET /api/teachers/:subject
router.get('/:subject', asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({subject:req.params.subject})

  console.log(teachers)
  if (teachers) {
    res.json(teachers)
  } else {
    res.status(404)
    throw new Error('teachers not found')
  }
}))


// @desc    Get students of a teacher
// @route   GET /api/teachers/:subject
router.get('/getstudents/:name', asyncHandler(async (req, res) => {
  const teacher = await Teacher.find({name: req.params.name}).populate('students', 'name email')

  if (teacher) {
    res.json(teacher)
  } else {
    res.status(404)
    throw new Error('teacher not found')
  }
}))




module.exports = router