# node

## minimal node full-stack a 11i-nek

Futtatás:

```
npm start
```

Szerver oldal:

[server.js](https://github.com/tomuwhu/node/blob/main/server.js)

```javascript
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
```

Kliens oldal:

[static/index.js:](https://github.com/tomuwhu/node/blob/main/static/index.js)

```javascript
$(() => {
    $("#b1").click( e => {
        data = {x: Math.round(Math.random()*10+1)}
        $.post("/", data, (res) => {
            $("#o").html(res.x) 
        })
    } )
})
```
[static/index.html:](https://github.com/tomuwhu/node/blob/main/static/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="jquery.min.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
</head>
<body>
    <button id="b1">katt</button>
    <div id="o">-</div>
</body>
</html>
```

[static/index.css](https://github.com/tomuwhu/node/blob/main/static/index.css)

```css
body {
    background-color: aquamarine;
}
div#o {
    text-align: center;
    font-size: 30px;
}
```
