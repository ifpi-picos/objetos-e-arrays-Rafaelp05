export function adicioarItem(itens){
    let item = prompt('Adicione um item:').trim()
    itens.push(item)
    console.log('Item adicionado!')
}