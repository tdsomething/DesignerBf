import { createConnection } from 'typeorm'
import Koa from 'koa'
import bodeParser from 'koa-bodyparser'
import router from './routers'
import Jwt from 'koa-jwt'
import { JWT_SECRET_KEY } from '@/constants'
import { catchError } from '@/middlewares'

createConnection()
  .then(async () => {
    const app = new Koa()
    app.use(bodeParser())
    app.use(catchError())
    app.use(
      Jwt({ secret: JWT_SECRET_KEY }).unless({
        path: [/^\/swagger/, /^\/api\/login/, /^\/api\/register/]
      })
    )
    app.use(router.routes())
    app.listen(9800)
  })
  .catch((error: string) => {
    console.log('TypeOrm connection error: ' + error)
  })
