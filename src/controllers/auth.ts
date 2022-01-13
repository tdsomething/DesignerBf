import { tagsAll, responsesAll, request, summary, body } from 'koa-swagger-decorator'
import { loginSchema } from '@/models'
import { globalPrefix, ERROR_CODE } from '@/constants'
import { IContext, IUser } from '@/types'
import { ResponseHandler } from '@/handlers'
import { genJwt } from '@/utils'

@globalPrefix
@responsesAll({ 200: { description: 'Success' } })
@tagsAll(['Auth'])
export default class AuthController {
  @request('post', '/login')
  @summary('submit user')
  @body(loginSchema)
  static async login(ctx: IContext) {
    const body = ctx.validatedBody as IUser
    const payloads = Object.assign(body, { token: genJwt(body) })
    ctx.body = { ...ResponseHandler.getResp(ERROR_CODE.LOGIN_SUCCESS, payloads) }
  }

  @request('post', '/register')
  @summary('register user')
  static async register(ctx: IContext) {
    ctx.body = { register: 'register' }
  }
}
