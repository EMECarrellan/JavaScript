/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"*/

const listaCompra = ["Huevos","Harina","Yogures","Azúcar","Sal",
]

listaCompra.splice(0, 0, "Aceite de girasol")
listaCompra.splice(0, 1)

/*- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const listaPelis = [
    { titulo: "Pulp Fiction", director: "Quentin Tarantino", fecha: 1994 },
    { titulo: "Alicia en el País de las Maravillas", director: "Clyde Geronimi", fecha: 1951 },
    { titulo: "Little Nicky", director: "Steven Brill", fecha: 2000 },
]

const pelisNuevas = listaPelis.filter(obj => obj.fecha > 2010)
const directores = listaPelis.map(directores => directores.director)
const titulos = listaPelis.map(titulos => titulos.titulo)

const directoresTitulos = directores.concat(titulos)
const directoresTitulosFP = [...directores, ...titulos]
console.log(directoresTitulosFP)