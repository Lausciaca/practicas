const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'texto.txt')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer el archivo');
        } else {
            res.send(data);
        }
    })
})

const server = app.listen(0, () => {
    console.log('Escuchando en http://localhost:' + server.address().port)
})