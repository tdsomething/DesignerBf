export const loginSchema = {
  email: { type: 'string', required: false, example: 'email@email.com' },
  password: { type: 'string', required: true, example: 'rootroot' }
}

export const registerSchema = {
  ...loginSchema,
  nickName: { type: 'string', required: false, example: 'nickName' }
}
