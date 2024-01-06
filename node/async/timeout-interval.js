const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // settimeout permite que cierta accion se realice con delay
    const saludar = (nombre) => {
        console.log(nombre)
    }
    setTimeout(saludar, 1000, 'Juan')

    // setinterval, realiza la funcion cada x tiempo
    const z = setInterval(saludar, 1500, "Jose")

    // podemos configurar para que el interval deje de funcionar
    // despues de x tiempo, con clearinterval
    setTimeout(() => {clearInterval(z)}, 10000)
})

app.listen(3000, () => {
    console.log('Escuchando en http://localhost:3000')
})