export const enum SUCCESS_CODE {
  CREATE_SUCCESS = 2001,
  QUERY_SUCCESS = 2002,
  LOGIN_SUCCESS = 2003,
  USER_NOT_EXIST = 2004
}

export const enum ERROR_CODE {
  CREATE_FAILURE = 5001,
  LOGIN_FAILURE = 5002
}

export const ERROR_MSG = {
  2001: 'createSuccess',
  2002: 'querySuccess',
  2003: 'loginSuccess',
  2004: 'userNotExist',
  5001: 'createFailure',
  5002: 'loginFailure'
}
