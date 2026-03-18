const {getFullName, productType} = require('./services/products')
const product = require('./services/products')
const config = require('./services/configs')
const dataBase = require('./services/database')

function main(){
     
    getFullName('888', 'Book')
    console.log(productType)
    
    /*
    console.log('Carrinho Compras: ')
    product.getFullName('088', 'Book')
    product.getProdctLabel('Noites Brancas')
    console.log(product.productType)
    */

    /*
    console.log(config.devArea)
    console.log(config.client)
    */

    /*
    dataBase.connectToDatabase('MySql')
    dataBase.diconnectDatabase()
    */
}

main()