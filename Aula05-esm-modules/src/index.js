import {connectToDatabase, databaseType} from './utils/database.js'
import * as api from './utils/api.js'

connectToDatabase('MySql')
console.log(databaseType)
api.getDataFromApi()
