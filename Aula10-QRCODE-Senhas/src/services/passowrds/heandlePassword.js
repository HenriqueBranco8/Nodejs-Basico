import permitedCharactres from "./utils/permitedPassowrd.js"

const handlePassowrd = async () => {
    let characters = await permitedCharactres()
    let passowrds = ''

    const passowrdLength = process.env.PASSOWRDLENGTH

    for(let i = 0; i < passowrdLength; i++){
        const index = Math.floor(Math.random() * characters.length)
        passowrds += characters[index]
    }

    console.log(passowrds)
}

export default handlePassowrd