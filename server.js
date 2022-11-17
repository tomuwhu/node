const express = require('express')
const app = express()
const port = 3000
app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
app.post('/', (req, res) => {
    p = Math.round(Math.random()*10+1)
    console.log(req.body, p)
    res.send({x: Number(req.body.x) + p})
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})