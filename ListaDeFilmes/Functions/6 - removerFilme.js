export function removerFilme(lista){
    console.table(lista)
    let remover = prompt('Qual filme deseja remover?')
    let filmeRemovido = lista.findIndex((lista) => remover === lista.Nome)
    lista.splice(filmeRemovido, 1)
    console.log('Filme removido da lista.')
}