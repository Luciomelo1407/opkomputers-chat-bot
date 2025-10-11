import type { HttpContext } from '@adonisjs/core/http'
import { TurnstileResponse } from '../types/TruenstileResponse.js'

export default class CaptchasController {
  async handleCaptcha({ request, response }: HttpContext) {
    try {
      const token = request.only(['token'])

      if (!token) {
        return response.badRequest({ message: 'token not found', status: false })
      }

      const formData = new FormData()
      formData.append('secret', process.env.SECRET_CAPTCHA_KEY)
      formData.append('response', token.token)
      formData.append('remoteip', request.ip())

      const responseApiCaptcha = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          body: formData,
        }
      )
      const result = (await responseApiCaptcha.json()) as TurnstileResponse

      if (result.success) {
        return response.ok({
          message: 'The CAPTCHA has been completed successfully.',
          status: result.success,
        })
      }

      return response.internalServerError({
        message: result['error-codes'],
        status: result.success,
      })
    } catch (error) {
      throw error
    }
  }
}
