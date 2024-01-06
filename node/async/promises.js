const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const promiseX = new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/')
        .then((data) => resolve(data.json()))
        .catch((err) => reject(err))
    })
    
    promiseX.then((data) => res.json(data))
})

app.listen(3000, () => {
    console.log('Escuchando en http://localhost:3000')
})