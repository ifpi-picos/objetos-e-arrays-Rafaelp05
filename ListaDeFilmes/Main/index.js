import { adicionarFilme } from "../Functions/1 - adicionarFilme"
import { ordenarFilme } from "../Functions/2 - ordenarLista"
import { pesquisarFilme } from "../Functions/3 - pesquisarFilme"
import { exibirLista } from "../Functions/4 - exibirFilme"
import { marcarFilme } from "../Functions/5 - marcarFilme"
import { removerFilme } from "../Functions/6 - removerFilme"

let texto =`1 - Adicionar um filme a lista
2 - Ordenar lista de filmes
3 - Pesquisar um filme na lista
4 - Exibir lista de filme
5 - Marcar um filme como assitido
6 - Remover um filme
7 - Encerrar o programa`

console.log('Lista de Filmes')

let lista = []
let filmeA = []

let i = true
while(i){
    console.log(texto)

    let opcao = Number(prompt('Escolha uma opção:'))

    switch(opcao){
        case 1:
            (adicionarFilme(lista))
            break;

        case 2:
            (ordenarFilme(lista))
            break;

        case 3:
            (pesquisarFilme(lista))
            break;

        case 4:
            (exibirLista(lista, filmeA))
            break;

        case 5:
            (marcarFilme(lista, filmeA))
            break;

        case 6:
            (removerFilme(lista))
            break;

        case 7:
            console.log('Obrigado por usar o programa!')
            i = false
            break;
        
    }
}