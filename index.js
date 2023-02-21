const express = require('express') //мы проимпортировали express
const app = express() // создали приложение
const port = 3000 // указали порт

app.get('/', (req, res) => { //здесь настроили приложение, настроили роуты, маршруты
    res.send('Hello World!')
})

app.get('/samurais', (req, res) => {
    res.send('Hello Samurais!')
})

app.post('/samurais', (req, res) => {
    res.send('We have created samurai!')
})

app.listen(port, () => { // тут говорим приложению слушай данный порт, как стартанешь колбеком уведоми нас о старте
    console.log(`Example app listening on port ${port}`)
})