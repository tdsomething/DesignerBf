import { tagsAll, responsesAll, request, summary, body } from 'koa-swagger-decorator'
import { loginSchema } from '@/models'
import { globalPrefix } from '@/constants'
import { IContext } from '@/types'


@globalPrefix
@responsesAll({ 200: { description: 'Success'} })
@tagsAll(['Auth'])
export default class AuthController {
  @request('post', '/login')
  @summary('submit user')
  @body(loginSchema)
  static async login (ctx: IContext) {
    const body = ctx.validatedBody as {}
    ctx.body = { ...body }
  }
}