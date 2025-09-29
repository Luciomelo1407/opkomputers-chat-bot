import { MessageValidation } from '#validators/message'
import type { HttpContext } from '@adonisjs/core/http'

export default class HandleMessagesController {
  async chat({ request, response }: HttpContext) {
    const inputPayload = await MessageValidation.tryValidate(request.all)
    return response.ok(inputPayload)
  }
}
