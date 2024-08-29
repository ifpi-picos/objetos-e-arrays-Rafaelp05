const carro = [
{
    nome: 'Civic',
    ano: 1995,
},
{
    nome: 'Marea',
    ano: 2000,
},
{
    nome: 'Gol',
    ano: 2011,
}
]

const carrosSemi = carro.filter((carro) => {return carro.ano > 2010})

console.log(carrosSemi)