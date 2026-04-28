import { getBaseEmail } from "./services/email";


async function main(): Promise<void>{
    console.log(getBaseEmail('Henrique'))
}


console.log('finalizado')
console.log('...')