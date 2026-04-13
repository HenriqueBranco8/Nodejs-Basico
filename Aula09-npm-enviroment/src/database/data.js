const connectDatabase = async(user, passowrd) => {
    if(user === process.env.userDatabase && passowrd === process.env.passowrdDatabase){
        console.log('Conexão com o banco de dados estabelecida')
    }
    else {
        console.log('Falha de login, não foi possível se conectar ao banco de dados')
    }
}

export {
    connectDatabase,
}

