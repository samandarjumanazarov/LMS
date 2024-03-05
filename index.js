const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})