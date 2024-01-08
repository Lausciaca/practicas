const express = require('express')
const app = express()

const fs = require('fs')

// crear archivo
fs.writeFile((__dirname + '/texto-creado.txt'), 'HOLA', (err) =>{
    if (err) throw err
})

app.get('/', (req, res) => {
    // leer archivo creado
    // con __dirname se puede ver la carpeta padre actual de este modulo
    fs.readFile((__dirname + '/texto-creado.txt'), 'utf-8', (err, data) => {
        if (err) throw err
        res.send(data)
    })
    // con filename vemos la ruta del archivo actual
    console.log(__filename)
})

app.listen(3000, () => {
    console.log(`Conectado en el puerto 3000`)
    console.log(`http://localhost:3000`)
})