import { createConnection } from 'typeorm'
import Koa from 'koa'

createConnection()
  .then(async () => {
    const app = new Koa()
    app.listen(9800)
  })
  .catch((error: string) => {
    console.log('TypeOrm connection error: ' + error)
  })
