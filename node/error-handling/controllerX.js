const fs = require('fs/promises')

// importamos el controlador de errores
const catchedAsync = require('./catchedAsync')

// definimos el controlador como una funcion asincrona
const controller = async (req, res, next) => {
    // esperamos y guardamos los datos del arc en data
    const data =await fs.readFile('texto.txt', 'utf-8')
    // los devolvemos
    res.json(data)
}

// verificamos errores y exportamos
module.exports = {
    controller: catchedAsync(controller)
}