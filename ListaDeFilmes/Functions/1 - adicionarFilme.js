export function adicionarFilme(lista){
    let Nome = prompt('Digite o nome do filme:').trim()
    let Ano = prompt('Informe o ano de lançamento')

    let filme = {Nome, Ano}

    lista.push(filme)
}