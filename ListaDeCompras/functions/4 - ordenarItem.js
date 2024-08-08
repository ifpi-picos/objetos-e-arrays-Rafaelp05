export function ordenarItem(itens){
    itens.sort((a, b) => a.localeCompare(b))
    console.log('Lista ordenada!')
}