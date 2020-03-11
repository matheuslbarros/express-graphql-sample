import TodoController from '../controllers/todo';

export default {
  Query: {
    findTodo: (root, { params }) => TodoController.find(params),
    findOneTodo: (root, { id }) => TodoController.findOne(id),
  },
  Mutation: {
    createTodo: (root, { todo }) => TodoController.create(todo),
    updateTodo: (root, { todo }) => TodoController.update(todo),
    removeTodo: (root, { id }) => TodoController.remove(id),
  },
}
