import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL server!')
})

app.listen(8080, () => console.log('Server is running on localhost:8080/graphql'))
