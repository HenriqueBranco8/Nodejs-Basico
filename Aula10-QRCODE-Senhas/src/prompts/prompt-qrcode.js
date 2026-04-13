import chalk from "chalk"
import prompt from "prompt"

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite um link para gerar o QR CODE")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre tipo QRcode(1- Normal ou 2- Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red('Escolha apenas entre 1 e 2'),
        required: true

    }
    
]

export default promptQRCode