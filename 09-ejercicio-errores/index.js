const logger = require('./logger')
const miFuncion = val => {
    if (typeof val === "number") {
        return ++val
    }
    throw new Error("El valor debe ser un número")
}

const numero = "Q";

try {
    const unomas = miFuncion(numero)
    console.log(unomas)
    console.log("No tenemos errores")
} catch(e) {
    console.error(`${e}`)
    console.error("ERROR")
}