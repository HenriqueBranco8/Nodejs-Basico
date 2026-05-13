//Reference error
//let x 
//try{
//   x = y + 1
//} catch (error){
 //   console.log("Name:" + error.name)
   // console.log("Msg:" + error.message)
//}


//sintax error
//try{
   //eval('console.log(asteristico)')
//} catch (error){
 //  console.log("Name:" + error.name)
   //console.log("Msg:" + error.message)
//}


//TypeError
//let num = 1 
//try{
//   num.toUpperCase()
//} catch (error){
//   console.log("Name:" + error.name)
//   console.log("Msg:" + error.message)
//}

function UserException(message) {
    this.message = message
    this.name = 'UserException'
}

try{
   let num = -8
   if(num < 0){
    throw new UserException('O número deve ser positivo')
   } else {
    console.log('ok')
   }

} catch (error){
   console.log("Name:" + error.name) //UserException
   console.log("Msg:" + error.message)
}