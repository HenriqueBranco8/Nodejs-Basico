const loding = (user, cb) => {
    console.log(`${user} a página está carregando...`)
    setTimeout(() => {
        cb(user)
    }, 10000);
}


loding('Henrique', (user) => {
    console.log(`${user}carregou`)
} )