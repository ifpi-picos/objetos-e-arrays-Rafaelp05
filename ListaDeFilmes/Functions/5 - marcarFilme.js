export function marcarFilme(lista, filmeA){
    console.table(lista)
    let escolha = Number(prompt('Marque um filme como assistido de acordo com seu index:'))
    let filmeVisto = lista.splice(escolha, 1)
    filmeA.push(filmeVisto)
    console.log('Filme adicionado aos assistidos.')
}