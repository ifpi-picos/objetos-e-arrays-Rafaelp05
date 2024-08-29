const pessoas = [
{
    nome: 'João Pedro',
    idade: 17,
},
{
    nome: 'Lucas',
    idade: 16,
},
{
    nome: 'Rafael',
    idade: 18,
},
]

const maiorIda = pessoas.find((pessoa) => pessoa.idade >= 18)

console.log(maiorIda)