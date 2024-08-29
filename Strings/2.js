function sobrenome(){
    let nome  = prompt('Digite seu nome completo:')

    let NomeSobre = nome.split(' ')

    console.log(NomeSobre[0], NomeSobre[NomeSobre.length-1])


}

sobrenome()