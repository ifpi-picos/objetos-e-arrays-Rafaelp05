console.log('Insira o nome de 5 filmes!')
let nomes = prompt('Digite aqui:')

const arrayFilm = nomes.split(', ')

for(let i = 0; i < 5; i++){
    console.log(arrayFilm[i])
}