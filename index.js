import express from 'express'
import graphql from 'express-graphql'
import schema from './src/data/schema'
import database from './src/database'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL server!')
})

app.use('/graphql', graphql({
  schema: schema,
  graphiql: true,
}))

database.connect().then(() => {
  app.listen(8080, () => console.log('Server is running on localhost:8080/graphql'))
})
