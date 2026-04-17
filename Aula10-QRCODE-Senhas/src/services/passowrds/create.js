import chalk from "chalk"
import handlePassowrd from "./heandlePassword.js"


const createPassowrd = async () => {
    console.log(chalk.green("passowrd"))
    const passowrds = await handlePassowrd()
}

export default createPassowrd