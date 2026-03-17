const requires = require('./services/products')
const config = require('./services/configs')
const dataBase = require('./services/database')

function main(){
    console.log('Carrinho Compras: ')
    requires.getFullName('088', 'Book')
    requires.getProdctLabel('Noites Brancas')
    console.log(requires.productType)
    console.log(config.devArea)
    console.log(config.client)
    dataBase.connectToDatabase('MySql')
    console.log(dataBase.diconnectDatabase)
}
main()