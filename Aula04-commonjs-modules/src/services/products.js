// all function what deal with products

const productType = {
    version: 'digital',
    tax: 'x1.5'
}

const getFullName = async (codeId, productName) => {
    console.log('product: ' + codeId + '--' + productName)
    await doBreakLine()
}


//hiden function
const doBreakLine = async () => {
    console.log('\n')
}

const getProdctLabel = (productName) => {
    console.log(`Product Name: ${productName}`)
}


module.exports = {
    getFullName,
    getProdctLabel,
    productType,
}
