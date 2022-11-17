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
    p = Math.round(Math.random()*10+1) + ( req.session.p || 100 )
    req.session.p = p
    res.send({x: Number(req.body.x) + p})
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})