// middleware que permite manejar los errores por express en funciones asincronas

// definis funcion que recibe otra funcion
const catchedAsync = (fn) => {
    // devolves funcion que invoca a un middleware con los param de fn
    return (req, res, next) => {
        // a la funcion que pasaste se la invoca y se ejecuta
        // en caso de error se pasa al siguiente middle para manejarlo
        fn(req, res).catch(err => next(err))
    }
}

// se exporta la funcion
module.exports = catchedAsync