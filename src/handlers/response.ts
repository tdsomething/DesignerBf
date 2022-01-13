import { ERROR_MSG } from '@/constants'

export class ResponseHandler {
  static getResp <T>(code: number, data: T, msg?: string) {
    if (msg) {
      return { code: code, msg: msg, data: data }
    } else {
      return { code: code, msg: ERROR_MSG[code], data: data }
    }
  }
}