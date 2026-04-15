const permitedCharactres = () => {
    const permited = []

    if(process.env.upperCaseLetters == true) permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(process.env.lowerCaseLetters == true) permited.push(..."abcdefghijklmnopqrstuvwxyz")
    if(process.env.numbers == true) permited.push(..."0123456789")
    if(process.env.specialCharacters == true) permited.push(..."/*.,-+!@#$%¨¨&*()-_=[}{]=;:?/°|")

    return permited
}

const handlePassowrd = async () => {
    let characters = permitedCharactres()
    let passowrds = ''

    const passowrdLength = process.env.passowrdLength

    for(let i = 0; i < passowrdLength; i++){
        const index = Math.floor(Math.random() * characters)
        passowrds += index
    }

    console.log(passowrds)
}

export default handlePassowrd