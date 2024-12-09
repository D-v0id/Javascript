//const listacontatos = ["paulo", "selina", "roger", "zeca", "josue"]
const listacontatos = ["paulo", "selina", "roger", "josue"]

let encontrausuario = false
let atingiufimdalista = false
let IndiceUsuario = 0

while (!encontrausuario && !atingiufimdalista) {
    const UsuarioAtual = listacontatos[IndiceUsuario]
    if (UsuarioAtual.startsWith('z')) {
        encontrausuario = true
        console.log(`usuario encontrado ${UsuarioAtual}`)
    }
    IndiceUsuario += 1

    if (IndiceUsuario === listacontatos.length) {
        atingiufimdalista = true
        console.log(`usuario não encontrado`)
    }
}
