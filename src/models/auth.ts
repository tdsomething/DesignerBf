export const loginSchema = {
  userName: { type: 'string', required: true, example: 'admin' },
  password: { type: 'string', required: true, example: 'rootroot' }
}

export const registerSchema = {
  ...loginSchema,
  nickName: { type: 'string', required: false, example: 'nickName' },
  email: { type: 'string', required: false, example: 'email@email.com' }
}
