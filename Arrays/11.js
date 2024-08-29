console.log('Insira o nome de 5 filmes!')
let nomes = prompt('Digite aqui:')

const arrayFilm = nomes.split(', ')

for (let filme of arrayFilm){
    console.log(filme)
}