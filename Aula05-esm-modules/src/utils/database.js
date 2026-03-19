const databaseType = {
    userType: 'Admin',
    typeData: 'datalocal',
}

const connectToDatabase = async(dataName) => {
    //logic of connect
    console.log(`Conectado ao banco ${dataName}`)
}

const desconnectDatabase = async () => {
    console.log('Disconectando do BD')
}

export {connectToDatabase, desconnectDatabase, databaseType};