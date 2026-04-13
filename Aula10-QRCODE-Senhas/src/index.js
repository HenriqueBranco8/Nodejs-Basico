import prompt from 'prompt'
import mainPrompt from './prompts/prompts-main.js'
import chalk from 'chalk'
import createQRCode from './services/qr-code/create.js'


async function main() {
    prompt.start()
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1){
            await createQRCode()
        } else if (choose.select == 2){
            console.log(chalk.white('Você escolheu o Password'))
        } 
            
    })
    
}

main()