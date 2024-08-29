export function pesquisarFilme(lista){
    let filmeP = prompt('Nome do filme:').trim()
    let filmeEncontrado = lista.findIndex((filme) => filmeP === filme.Nome)

    if(filmeEncontrado >= 0){
        console.log('O filme na lista.')
    }
    else{
        console.log('O filme não está na lista.')
    }
}