import chalk from "chalk"
import handlePassowrd from "./heandlePassword.js"


const createPassowrd = async () => {
    console.log(chalk.green("passowrd"))
    const passowrd = await handlePassowrd()
    console.log(passowrd)
    console.log('sucesso')
}

export default createPassowrd