import { request, responsesAll, tagsAll, summary, prefix } from 'koa-swagger-decorator'
import { Context } from 'koa'

@prefix('/api')
@responsesAll({ 200: { description: 'success' } })
@tagsAll(['User'])
export default class UserController {
  @request('get', '/userInfo')
  @summary('Find user info')
  public static async getUsers(ctx: Context): Promise<void> {
    ctx.body = { user: 'Hello' }
  }
}