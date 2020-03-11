import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('todos', todoSchema)
