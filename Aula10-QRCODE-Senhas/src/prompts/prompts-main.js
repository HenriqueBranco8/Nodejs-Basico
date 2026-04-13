import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.white("Escolha a ferramenta (1- QRCode ou 2- Passwords)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolhga apenas entre 1 e 2"),
        require: true
    }
]


export default mainPrompt