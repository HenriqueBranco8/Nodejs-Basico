import qr from 'qrcode-terminal'
import chalk from 'chalk'

const handle = async (err, result) => {

    if(err){
        chalk.red('Escolha apenas entre 1 e 2')
        return
    } else {
        const isSmall = result.type == 2

        qr.generate(result.link, {small: isSmall}, (qrcode) => {
            console.log(chalk.green("QR Code gerado com sucesso:\n"))
            console.log(qrcode)
        })
    }
    
}


export default handle