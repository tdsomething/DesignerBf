import { createConnection } from 'typeorm'

const options = await createConnection()
console.log('options', options)