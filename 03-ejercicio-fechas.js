let hoy = new Date();
console.log(hoy)

const cumple = new Date(1994, 4, 28);
console.log(cumple)

const hoyMasTarde = hoy > cumple;
console.log(hoyMasTarde)

const diaCumple = cumple.getDate();
const mesCumple = cumple.getMonth() + 1;
const anyoCumple = cumple.getFullYear();

console.log(diaCumple)
console.log(mesCumple)
console.log(anyoCumple)