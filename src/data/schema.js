import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Todo {
    id: ID
    title: String
    done: Boolean
  }

  input TodoCreateInput {
    title: String!
    done: Boolean
  }

  input TodoUpdateInput {
    id: ID!
    title: String!
    done: Boolean
  }

  input TodoFindInput {
    id: ID
    title: String
    done: Boolean
  }

  type Query {
    findTodo(params: TodoFindInput): [Todo]
    findOneTodo(id: ID!): Todo
  }

  type Mutation {
    createTodo(todo: TodoCreateInput): Todo
    updateTodo(todo: TodoUpdateInput): Todo
    removeTodo(id: ID!): Todo
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers })
