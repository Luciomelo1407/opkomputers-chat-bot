import { ChatGptApiService } from '#services/chat_gpt_api_service'
import { MessageValidation } from '#validators/message'
import type { HttpContext } from '@adonisjs/core/http'

export default class HandleMessagesController {
  async chat({ request, response }: HttpContext) {
    try {
      const inputPayload = await MessageValidation.validate(request.all())
      const gptService = new ChatGptApiService()
      const gptResponse = await gptService.sendMessage(inputPayload.input)
      return response.ok({ reply: gptResponse })
    } catch (error) {
      throw error
    }
  }
}
