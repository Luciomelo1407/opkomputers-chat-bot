import type { HttpContext } from '@adonisjs/core/http'

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
      console.log(formData, '\n\n\n')

      try {
        const ress = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: formData,
        })

        const result = await ress.json()
        return response.ok({ result })
      } catch (error) {
        console.error('Turnstile validation error:', error)
        return response.internalServerError({ 'success': false, 'error-codes': ['internal-error'] })
      }

      return response.ok({})
    } catch (error) {
      throw error
    }
  }
}
