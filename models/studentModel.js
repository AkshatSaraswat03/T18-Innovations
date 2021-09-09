const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  class: {
    type: Number,
    required: true,
    default: 1
  },
  section: {
    type: String,
    required: true
  },
  assignedTeacher: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
