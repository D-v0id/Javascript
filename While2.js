const listanumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listapares = []
const listaimpares = []

let contador = 0

while (contador < listanumeros.length) {
    if (listanumeros[contador] % 2 === 0) {
        listapares.push(listanumeros[contador])
    }
    else {
        listaimpares.push(listanumeros[contador])
    }
    //console.log(listanumeros[contador])
    contador += 1

}
console.log(listaimpares)
console.log(listapares)