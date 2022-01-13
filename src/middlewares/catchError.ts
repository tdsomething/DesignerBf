import { Next } from 'koa'

export const catchError = () => async (ctx, next: Next) => {
  try {
    await next()
  } catch (err) {
    //TODO: handle
    ctx.status = err.status || 500
    ctx.type = 'json'
    ctx.body = {
      code: -1,
      msg: err.toString()
    }
  }
}
