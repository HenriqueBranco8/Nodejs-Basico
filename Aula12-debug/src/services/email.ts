const getBaseEmail = async(senderName: String) : Promise<string> => {
    let base:string = await getHeaderText()

    base += `\nOlá ${senderName}, gostaria de me inscrever para uma vaga\n`
    base += '\n Estou deixando o meu currículo:'

    return base
}

const getHeaderText = async(): Promise<string> => {
    return 'EMAIL PARA VOCÊ'
}

export {getBaseEmail}