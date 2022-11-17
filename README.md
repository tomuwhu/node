# node

## minimal node full-stack a 11i-nek

Futtatás:

```
npm start
```

Szerver oldal:
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

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express & jQuery</title>
</head>
<body>
    <button id="b1">katt</button>
    <div id="o">-</div>
</body>
</html>
```

```css
body {
    background-color: aquamarine;
}
div#o {
    text-align: center;
    font-size: 30px;
}
```