function carregarDados () {
    return new Promisse((resolve, reject) => {
        console.log('Estamos carregando os dados...')
        setTimeout(() => {
            const certoErrado = true

            if(certoErrado){
                resolve('Deu certo no carregamento')
            } else {
                reject('Deu erro na hora de carregar')
            }
        },2000)
    })
}

carregarDados()
    .then((resposta) => console.log(resposta))
    .catch(console.log(resposta)) 