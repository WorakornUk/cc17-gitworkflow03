const express = require('express')
const app = express()

app.use('/register', (req, res) => {
  res.json({ msg: 'Register...' })
})


app.listen(8000, ()=>{ console.log('run server')})