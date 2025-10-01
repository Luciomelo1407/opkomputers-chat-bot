import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ApiKeyMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const apiKey = ctx.request.header('X-API-Key')
    if (apiKey === process.env.API_KEY) {
      return next()
    }
    return ctx.response.status(401).send('Unauthorized Access')
  }
}
