import { sign } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '@/constants'

export const getWelcome = (params = 'World') => {
  return `Hello, ${params}!!!`
}

type DefineGenJwt = (data: unknown) => string

export const genJwt: DefineGenJwt = (data: unknown) => {
  return sign({ data: data }, JWT_SECRET_KEY)
}