import { createConnection } from 'typeorm'
// const { createConnection } = typeorm

// const options = await createConnection()
console.log('options')
createConnection().then((res) => res)
// await createConnection()
