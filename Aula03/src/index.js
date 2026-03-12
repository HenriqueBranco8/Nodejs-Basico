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


//Object Running Track and give away track
const getRandomBlock = () => {
    let random = Math.random()
    let result = ''
    switch(true){
        case random < 0.33:
            result = 'Reta'
            break
        case random < 0.66:
            result = 'Curva'
            break
        default:
            result = 'Confronto'
            break
    }
    return result
}

//function what roll the dice
const rollDice = async () => {
    return Math.floor(Math.random() * 6) + 1
}

//function from the rounds 1 unitill 5
const playRaceEnginer = async (personagem1, personagem2) => {
   for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        //give away track
        let block = await getRandomBlock()
        console.log(`Pista Sorteada: ${block}`)

        //Result roll dice
        let resultDice1 = await rollDice()
        let resultDice2 = await rollDice()
       

        //Test habilits
        let totalTesteSkill1 = 0
        let totalTesteSkill2= 0
        console.log('-----------------------------------------')
        
   }
   
}

(async function main(){
    console.log(`🏁🚦 Corrida entre ${palyer1.nome} e ${palyer2.nome} Começando...\n`)
    await playRaceEnginer(palyer1, palyer2)
})()

//O que é uma await? uma await funciona de uma forma bem simples, ele chega e fala para o JS assim "Ei, JS, espera essa função acabar para continuar o código". O await faz uma pausa no código até que uma função "Async" devolva algo positivo ou negativo (aceito ou não aceito).
