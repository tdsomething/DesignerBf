import { Context } from 'koa'

export interface IContext extends Context {
  validatedBody: unknown
}

export * from './user'