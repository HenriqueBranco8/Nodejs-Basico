const palyer1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
}

const palyer2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
}


//Função what roll the dice

//Explicação: Por padrão o JavaScript é "Sincrono", que quer dizer que todas as ações vão ser executadas ao mesmo tempo, entretanto tem como inpedir isso. Para dizer para o JS/Node que uma função é asincrona, você tem que dizer para ele. Então, coloque "async" para mostrar que uma função deve ser executada depois da outra
const rollDice = async () => {
    return Math.floor(Math.random() * 6) + 1
}

(async function main(){
    console.log('')
})()


/*Explicação: Existem dois jeitos de chamar uma função 'Main' para você chamar a função main você pode usar o método 1:
    
    async function main(){
        console.log('hello')
    }
    main()

método 2 (mais automático), aqui ela vai mostrar que ela é uma função auto declarável:

    (async function main(){
        console.log('hello')
    })()
*/
