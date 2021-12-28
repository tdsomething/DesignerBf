import { request, responsesAll, tagsAll, summary } from 'koa-swagger-decorator'
import { Context } from 'koa'

@responsesAll({ 200: { description: 'success' } })
@tagsAll(['User'])
export default class UserController {
  @request('get', '/api/userInfo')
  @summary('Find user info')
  public static async getUsers(ctx: Context): Promise<void> {
    ctx.body = { user: 'Hello' }
  }
}