export function removerItem(itens){
    let opcao = prompt('Qual item deseja remover?').trim()
    let index = itens.indexOf(opcao)
    if (index < 0){
        console.log('Item não encontrado.')
    }else{
        itens.splice(index, 1)
    }
}