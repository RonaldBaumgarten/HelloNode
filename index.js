const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hallo Ali! \r Das hier habe ich schnell nach der Anleitung auf der Express-Seite erstellt, dann als Repository bei GitHub hochgeladen und mit Render (https://render.com/) deployt.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
