const EventEmitter = require('events')

// instanciamos la clase
const eventEmitter = new EventEmitter()

// declaramos que pase cuando el evento sea iniciado,
// elegimos su nombre y callback
eventEmitter.on('eventoX', () => {
    console.log('started')
})
// lanzamos el evento
eventEmitter.emit('eventoX')


// podemos agregar parametros
eventEmitter.on('suma', (num1, num2) => {
    console.log(num1 + num2)
})
eventEmitter.emit('suma', 10, 5)


// const suma = (num1, num2) => {
//     console.log(num1 + num2)
// } 
// suma(5, 10)