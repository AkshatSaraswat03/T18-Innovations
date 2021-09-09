const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  subject: {
    type: String,
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Student'
  }]
  
}, {
  timestamps: true
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher
