const express = require('express')
const app = express()

const path = require('path')

app.get('/', (req, res) => {
    // separador, devuelve el que se usa por defecto en el SO
    // console.log(path.sep)

    // join, te permite unir rutas separadas para crear una sola
    const ruta = path.join('node', 'files', path.basename(__filename))
    // con basename se puede saber el nombre final de una ruta
    console.log(ruta)

    // resolve, devuelve rutas absolutas
    const rutaAbsoluta = path.resolve(ruta)
    console.info(rutaAbsoluta)

    // process.cwd devuelve la carpeta origen desde la que estamos trabajando
    res.send(process.cwd())
})

app.listen(3000, () => {
    console.log(`Conectado en el puerto 3000`)
    console.log(`http://localhost:3000`)
})