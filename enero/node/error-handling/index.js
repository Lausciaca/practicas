// una Uncaught exceptions, es un error que no es propiamente manejado
const express = require('express')
const app = express()


// importamos el controlador
const { controller } = require('./controllerX')

app.get('/', controller)

const server = app.listen(1234, () => {
    let connectedPort = server.address().port
    console.log(` CONECTADO EN EL PUERTO ${connectedPort} `)
    console.log(` Pagina: http://localhost:${connectedPort} `)
})
