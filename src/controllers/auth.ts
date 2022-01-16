import { tagsAll, responsesAll, request, summary, body } from 'koa-swagger-decorator'
import { loginSchema, registerSchema } from '@/models'
import { globalPrefix, ERROR_CODE, SUCCESS_CODE } from '@/constants'
import { IContext, IUser } from '@/types'
import { HttpResponse } from '@/handlers'
import { genJwt } from '@/utils'
import { getManager, Repository } from 'typeorm'
import { User } from '@/entities/mysql/User'
import { validate, ValidationError } from 'class-validator'

@globalPrefix
@responsesAll({ 200: { description: 'Success' } })
@tagsAll(['Auth'])
export default class AuthController {
  @request('post', '/login')
  @summary('login site')
  @body(loginSchema)
  static async login(ctx: IContext): Promise<void> {
    const body = ctx.validatedBody as IUser
    const userRepository: Repository<User> = await getManager().getRepository(User)
    const targetUser = await userRepository.findOne({ email: body.email })
    if (targetUser && targetUser.password === body.password) {
      const payloads = Object.assign({ token: genJwt({ id: targetUser.id }) })
      ctx.body = HttpResponse(SUCCESS_CODE.LOGIN_SUCCESS, payloads)
    } else {
      ctx.body = HttpResponse(ERROR_CODE.LOGIN_FAILURE)
    }
  }

  @request('post', '/register')
  @summary('register user')
  @body(registerSchema)
  static async register(ctx: IContext): Promise<void> {
    const payloads = ctx.validatedBody as IUser
    const saveUser: User = new User()
    saveUser.email = payloads.email
    saveUser.password = payloads.password
    saveUser.nickName = payloads.nickName
    const errors: ValidationError[] = await validate(saveUser)
    if (errors.length) {
      ctx.body = HttpResponse(ERROR_CODE.CREATE_FAILURE, errors)
    } else {
      const userRepository: Repository<User> = getManager().getRepository(User)
      const existed = await userRepository.findOne({
        email: saveUser.email
      })
      if (existed) {
        ctx.body = HttpResponse(ERROR_CODE.CREATE_FAILURE, '该用户已存在')
      } else {
        await userRepository.insert(saveUser)
        ctx.body = HttpResponse(SUCCESS_CODE.CREATE_SUCCESS)
      }
    }
  }
}
