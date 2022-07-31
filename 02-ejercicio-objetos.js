const misDatos = {
    nombre: "Estefanía",
    apellido: "Montes",
    edad: 28,
    altura: 169,
    isDeveloper: false,
}
const miEdad = misDatos.edad

const listaDatos = [
    { ...misDatos },
    datosAmigo1 = {
        nombre: "Enrique José",
        apellido: "Pérez",
        edad: 31,
        altura: 171,
        isDeveloper: false,
    },
    datosAmigo2 = {
        nombre: "Dufresne",
        apellido: "Pérez",
        edad: 1,
        altura: 50,
        isDeveloper: false,
    },
]

const listaOrdenada = [listaDatos.sort((a, b) => b.edad - a.edad)]
console.log(listaOrdenada)