const permitedCharactres = async () => {
    let permited = []

    if(process.env.UPPERCASELETTERS === "true"){
        permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    } 
    if(process.env.LOWERCASELETTERS === "true"){
        permited.push(..."abcdefghijklmnopqrstuvwxyz")
    } 
    if(process.env.NUMBERS === "true"){
        permited.push(..."0123456789")
    } 
    if(process.env.SPECIALCHARACTERES === "true"){
        permited.push(..."/*.,-+!@#$%¨¨&*()-_=[}{]=;:?/°|")
    } 

    return permited
}

export default permitedCharactres