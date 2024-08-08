///imporatando funções
import { adicioarItem } from "../functions/1 - adicionarItem"
import { removerItem } from "../functions/2 - removerItem"
import { pesquisarItem } from "../functions/3 - pesquisarItem"
import { ordenarItem } from "../functions/4 - ordenarItem"
import { limparItens } from "../functions/6 - limparLista"

///menu
let menu = ('1 - Adicionar um item a lista. \n2 - Remover um item. \n3 - Pesquisar um item. \n4 - Ordenar a lista por nome. \n5 - Exibir lista. \n6 - Limpar a lista. \n7 - Encerrar o programa.')

///array dos itens
let itens = []

///loop do menu
let i = true
while(i){
    console.log(menu)
    
    let opcao = Number(prompt('Escolha uma das opções:'))

     switch(opcao){
         case 1:
             (adicioarItem(itens))
             break;
        
        case 2:
            (removerItem(itens))
            break;

        case 3:
            (pesquisarItem(itens))
            break;

        case 4:
            (ordenarItem(itens))
            break;
        
        case 5:
            console.log(itens)
            break;
        
        case 6: 
            (limparItens(itens))
            break;

        case 7:
            console.log('Obrigado por utilizar o programa!')
            i = false
            break;
    }
}