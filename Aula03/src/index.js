const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
}

const player2 = {
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


//function what Writes result rounds track
const logRollResult = async (personagem, Block, diceResult, attribute) => {
    console.log(`${personagem} 🎲 Roulou o dado de ${Block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    
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
        let totalTesteSkill2 = 0


        if(block === 'Reta'){
            totalTesteSkill1 = resultDice1 + player1.velocidade
            totalTesteSkill2 = resultDice2 + player2.velocidade

            await logRollResult(player1.nome, 'Velocidade', resultDice1, player1.velocidade)
            await logRollResult(player2.nome, 'Velocidade', resultDice2, player2.velocidade)
            
        }

        if(block === 'Curva'){
            totalTesteSkill1 = resultDice1 + player1.manobrabilidade
            totalTesteSkill2 = resultDice2 + player2.manobrabilidade

            await logRollResult(player1.nome, 'Manobrabilidade', resultDice1, player1.manobrabilidade)
            await logRollResult(player2.nome, 'Manobrabilidade', resultDice2, player2.manobrabilidade)
            
        }

        
        if(block === 'Confronto'){
            totalTesteSkill1 = resultDice1 + player1.poder
            totalTesteSkill2 = resultDice2 + player2.poder

            await logRollResult(player1.nome, 'power', resultDice1, player1.poder)
            await logRollResult(player2.nome, 'power', resultDice2, player2.poder)

            //if some player have 1 points, loser 1 point
            if(totalTesteSkill1 > totalTesteSkill2 && player2.pontos > 0){
                player2.pontos--
                console.log(`${player1.nome} confontrou com ${player2.nome} 🥊`)
                console.log(`${player1.nome} Saiu vitorioso do Confronto 💪`)
                console.log(`${player2.nome} Perdeu 1 ponto 🐢`)
            } 
            if(totalTesteSkill1 < totalTesteSkill2 && player1.pontos > 0){
                player1.pontos--
                console.log(`${player1.nome} confontrou com ${player2.nome} 🥊`)
                console.log(`${player2.nome} Saiu vitorioso do Confronto 💪`)
                console.log(`${player1.nome} Perdeu 1 ponto 🐢`)
            }

            //if some player have less 0 points, does he winner 1 point
            if(totalTesteSkill1 < totalTesteSkill2 && player1.pontos < 0){
                player1.pontos++
                console.log(`${player1.nome} confontrou com ${player2.nome} 🥊`)
                console.log(`${player2.nome} Saiu vitorioso do Confronto 💪`)
                console.log(`${player1.nome} Perdeu 1 ponto 🐢`)
            }
            if(totalTesteSkill1 > totalTesteSkill2 && player2.pontos < 0){
                player2.pontos++
                console.log(`${player1.nome} confontrou com ${player2.nome} 🥊`)
                console.log(`${player1.nome} Saiu vitorioso do Confronto 💪`)
                console.log(`${player2.nome} Perdeu 1 ponto 🐢`)
            } 

            
            
            console.log(totalTesteSkill1 === totalTesteSkill2 ? 'Confronto ÉÉÉÉPICOOOOO mas deu empate. Ninguém perdeu ponto!' : '')
        }
        
        if(totalTesteSkill1 > totalTesteSkill2){
            console.log(`${player1.nome} marcou um ponto!`)
            player1.pontos++
        } else if(totalTesteSkill1 < totalTesteSkill2){
            console.log(`${player2.nome} marcou um ponto!`)
            player2.pontos++
        }else if(totalTesteSkill1 === totalTesteSkill2){
            console.log(`Rodada a foi acirrada mas deu EMPATE!!!`)
        }
        
        

        console.log('-----------------------------------------')  
        

   }

}

async function declareWinner(personagem1, personagem2) {
    console.log('Resultado final:')
    console.log(`${player1.nome}: ${player1.pontos} ponto(s)`)
    console.log(`${player2.nome}: ${player2.pontos} ponto(s)`)
    if(player1.pontos > player2.pontos){
        console.log(`${player1.nome} Venceu a Corrida!! Parábens! 🥇🏆`)
    } else if(player1.pontos < player2.pontos){
        console.log(`${player2.nome} Venceu a Corrida!! Parábens! 🥇🏆`)
    } else {
        console.log(`EMPATE ÉPICOOOOOOOOOOOO! NÃO HÁ UM VENCEDOR! MARQUEM UMA REVANCHE E VEJAM QUEM GANHARÁ!`)
    }
}

(async function main(){
    console.log(`🏁🚦 Corrida entre ${player1.nome} e ${player2.nome} Começando...\n`)
    await playRaceEnginer(player1, player2)
    await declareWinner(player1.nome, player2.nome)
})()

//O que é uma await? uma await funciona de uma forma bem simples, ele chega e fala para o JS assim "Ei, JS, espera essa função acabar para continuar o código". O await faz uma pausa no código até que uma função "Async" devolva algo positivo ou negativo (aceito ou não aceito).
