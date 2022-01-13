import { ERROR_MSG } from '@/constants'

export class ResponseHandler {
  static getResp<T>(code: number, data?: T, msg?: string) {
    return { code: code, msg: msg || ERROR_MSG[code], data: data }
  }
}
