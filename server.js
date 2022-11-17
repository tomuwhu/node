const express = require('express')
var session = require('express-session')
const app = express()
const port = 3000
app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'titkos92384793248fartdsfjho489',
  resave: true, saveUninitialized: true
}))
app.post('/', (req, res) => {
  n = Math.round(Math.random()*(2**Number(req.body.x))+1)
  req.session.p = n + req.session.p || 100
  res.send({x: req.session.p})
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})