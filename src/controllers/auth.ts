import { tagsAll, responsesAll, request, summary, body } from 'koa-swagger-decorator'
import { loginSchema, registerSchema } from '@/models'
import { globalPrefix, ERROR_CODE, SUCCESS_CODE } from '@/constants'
import { IContext, IUser } from '@/types'
import { ResponseHandler } from '@/handlers'
import { genJwt } from '@/utils'
import { getManager, Repository } from 'typeorm'
import { User } from '@/entities/mysql/User'
import { validate, ValidationError } from 'class-validator'

@globalPrefix
@responsesAll({ 200: { description: 'Success' } })
@tagsAll(['Auth'])
export default class AuthController {
  @request('post', '/login')
  @summary('submit user')
  @body(loginSchema)
  static async login(ctx: IContext): Promise<void> {
    const body = ctx.validatedBody as IUser
    const payloads = Object.assign(body, { token: genJwt(body) })
    ctx.body = { ...ResponseHandler.getResp(SUCCESS_CODE.LOGIN_SUCCESS, payloads) }
  }

  @request('post', '/register')
  @summary('register user')
  @body(registerSchema)
  static async register(ctx: IContext): Promise<void> {
    const payloads: any = ctx.validatedBody
    const saveUser: User = new User()
    saveUser.userName = payloads.userName
    saveUser.password = payloads.password
    saveUser.nickName = payloads.nickName
    saveUser.email = payloads.email
    const errors: ValidationError[] = await validate(saveUser)
    if (errors.length) {
      ctx.body = { ...ResponseHandler.getResp(ERROR_CODE.CREATE_FAILURE, errors) }
    } else {
      const userRepository: Repository<User> = getManager().getRepository(User)
      const existed = await userRepository.findOne({ userName: saveUser.userName })
      if (existed) {
        ctx.body = { ...ResponseHandler.getResp(ERROR_CODE.CREATE_FAILURE, '该用户已存在') }
      } else {
        await userRepository.insert(saveUser)
        ctx.body = { ...ResponseHandler.getResp(SUCCESS_CODE.CREATE_SUCCESS) }
      }
    }
  }
}
