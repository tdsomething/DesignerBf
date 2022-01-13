import { request, responsesAll, tagsAll, summary, path } from 'koa-swagger-decorator'
import { Context } from 'koa'
import { globalPrefix } from '@/constants'

@globalPrefix
@responsesAll({ 200: { description: 'success' } })
@tagsAll(['User'])
export default class UserController {
  @request('get', '/user/{userId}')
  @summary('Find user info')
  @path({ userId: { type: 'string', required: true, description: 'userId' } })
  public static async getUsers(ctx: Context): Promise<void> {
    ctx.body = { user: 'userId' }
  }
}
