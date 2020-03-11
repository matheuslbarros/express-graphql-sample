import Todo from '../models/todo'

export default {

  find (parameters) {
    return Todo.find(parameters)
  },

  findOne (id) {
    return Todo.findOne({ _id: id })
  },

  create (data) {
    return Todo.create(data)
  },

  update ({ id, ...data }) {
    return Todo.findOneAndUpdate({ _id: id }, data, { new: true });
  },

  remove (id) {
    return Todo.findOneAndRemove({ _id: id });
  },

}
