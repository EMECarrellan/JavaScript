function funcion(){
    return true;
}

async function delayPromesa() {
    return setTimeout(() => console.log("Hola, soy una promesa"), 5000)
}

function* generadora() {
    let id = 0;
    while(true) {
        yield id += 2
    }
}
const pares = generadora();