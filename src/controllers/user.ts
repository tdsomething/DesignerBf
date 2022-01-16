import { request, responsesAll, tagsAll, summary } from 'koa-swagger-decorator'
import { Context } from 'koa'
import { globalPrefix, SUCCESS_CODE } from '@/constants'
import { getManager, Repository } from 'typeorm'
import { User } from '@/entities/mysql/User'
import { HttpResponse } from '@/handlers'

@globalPrefix
@responsesAll({ 200: { description: 'success' } })
@tagsAll(['User'])
export default class UserController {
  @request('get', '/user')
  @summary('query current user info')
  public static async getUsers(ctx: Context): Promise<void> {
    const user: any = ctx.state.user
    const userRepository: Repository<User> = await getManager().getRepository(User)
    const userTarget = await userRepository.findOne(user.data)
    // const backProps = { id: userTarget.id, email: userTarget.email, nickName: userTarget.nickName }
    ctx.body = HttpResponse(SUCCESS_CODE.QUERY_SUCCESS, userTarget)
  }
}
