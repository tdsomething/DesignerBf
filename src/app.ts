import { createConnection } from 'typeorm'
import Koa from 'koa'
import bodeParser from 'koa-bodyparser'
import router from './routers'

createConnection()
  .then(async () => {
    const app = new Koa()
    app.use(bodeParser())
    .use(router.routes()).use(router.allowedMethods())
    app.listen(9800)
  })
  .catch((error: string) => {
    console.log('TypeOrm connection error: ' + error)
  })
