const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        res.send(data)
    } catch(err) {
        res.json(err)
    }

})

app.listen(3000, () => {
    console.log('Escuchando en http://localhost:3000')
})