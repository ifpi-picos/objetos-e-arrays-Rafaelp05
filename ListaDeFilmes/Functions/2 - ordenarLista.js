export function ordenarFilme(lista){
    lista.sort((a, b) => a.Nome.localeCompare(b.Nome) )
}