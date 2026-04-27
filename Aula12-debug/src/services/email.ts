const getBaseEmail = async(senderName: String) : Promise<string> => {
    let base:string = `Olá ${senderName}, gostaria de me inscrever para uma vaga`

    base += '\n Estou deixando o meu currículo:'

    return base
}

export {getBaseEmail}