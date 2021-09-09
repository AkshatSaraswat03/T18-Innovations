const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Student = require('../models/studentModel')


// to register a new user
//public
// router.post('/', asyncHandler(async (req, res) => {
//   const { name, email, assignedTeacher } = req.body

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



//get all students
//private
router.get('/', asyncHandler(async (req, res) => {
  const students = await Student.find({})
  res.json(students)
}))







// @desc    Get user by class section
// @route   GET /api/users/:id
// @access  Private/Admin
router.get('/:class/:section', asyncHandler(async (req, res) => {
  const students = await Student.find({class: parseInt(req.params.class), section: req.params.section})
  console.log(students)
  res.json(students);
  //console.log(students)
  // if (user) {
  //   res.json(user)
  // } else {
  //   res.status(404)
  //   throw new Error('User not found')
  // }
}))



// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
router.put('/:email', asyncHandler(async (req, res) => {
  const student = await Student.find({email: req.params.email})
  console.log(student)
  // if (student) {
  //   student.name = req.body.name || student.name
  //   student.email = req.body.email || student.email
  //   student.assignedTeacher = req.body.assignedTeacher || student.assignedTeacher

  //   const updatedStudent = await student.save()

  //   res.json({
  //     _id: updatedStudent._id,
  //     name: updatedStudent.name,
  //     email: updatedStudent.email,
  //     assignedTeacher = updatedStudent.assignedTeacher
  //   })
  // } else {
  //   res.status(404)
  //   throw new Error('Student not found !')
  // }
}))

module.exports = router