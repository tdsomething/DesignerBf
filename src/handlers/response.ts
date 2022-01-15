import { ERROR_MSG } from '@/constants'

//TODO: need special deal for errors
// export function HttpResponse<T>(code: number, msg: string, data: T)
export function HttpResponse(code: number)
export function HttpResponse(code: number, msg: string)
export function HttpResponse<T>(code: number, data: T)
export function HttpResponse<T>(code: number, msg: string, data: T)
export function HttpResponse() {
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    return { code: arguments[0], msg: ERROR_MSG[arguments[0]] }
  } else if (
    arguments.length === 2 &&
    typeof arguments[0] === 'number' &&
    typeof arguments[1] === 'string'
  ) {
    return { code: arguments[0], msg: arguments[1] }
  } else if (
    arguments.length === 2 &&
    typeof arguments[0] === 'number' &&
    typeof arguments[1] !== 'string'
  ) {
    return { code: arguments[0], msg: ERROR_MSG[arguments[0]], data: arguments[1] }
  } else {
    return { code: arguments[0], msg: arguments[1] || ERROR_MSG[arguments[0]], data: arguments[2] }
  }
}

/**
 * @deprecated
 */
export class ResponseHandler {
  static getResp<T>(code: number, msg?: string, data?: T) {
    return { code: code, msg: msg || ERROR_MSG[code], data: data }
  }
}
