const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json(
    [
      {
        name: 'alvin',
        email: 'alvin@gmail.com'
      },
      {
        name: 'alvin',
        email: 'alvin@gmail.com'
      },
      {
        name: 'maria',
        email: 'maria@gmail.com'
      },
    ]
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})