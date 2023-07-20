const express = require('express')
const app = express()

app.use(express.static('public'));

app.all('/', (req, res) => {
    console.log("Just got a request!")
    setTimeout(()=>{res.send('Yo!!!!')}, 10000)
})
app.listen(process.env.PORT || 3000)