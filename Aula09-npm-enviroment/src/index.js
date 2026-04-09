import {connectDatabase} from "./database/data.js"

async function main(){
    await connectDatabase('teste', '123')
}

main()

