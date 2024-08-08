export function pesquisarItem(itens){
    let opcao = prompt('Procure por um item:').trim()
    let item = itens.findIndex((compra) => compra === opcao)
    if(item < 0){
        console.log('Item não encontrado!')
    }else{
        console.log('Item na lista!')
    }
}