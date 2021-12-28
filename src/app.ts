import { createConnection } from 'typeorm'
import Koa from 'koa'
import router from './routers'

createConnection()
  .then(async () => {
    const app = new Koa()
    app.use(router.routes())
    app.listen(9800)
  })
  .catch((error: string) => {
    console.log('TypeOrm connection error: ' + error)
  })
