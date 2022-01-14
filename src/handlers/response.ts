import { ERROR_MSG } from '@/constants'

export class ResponseHandler {
  static getResp<T>(code: number, msg?: string, data?: T) {
    return { code: code, msg: msg || ERROR_MSG[code], data: data }
  }
}
