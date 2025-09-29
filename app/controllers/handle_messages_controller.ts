import { GeminiApiService } from '#services/gemini_api_service'
import { MessageValidation } from '#validators/message'
import type { HttpContext } from '@adonisjs/core/http'

export default class HandleMessagesController {
  async chat({ request, response }: HttpContext) {
    const inputPayload = await MessageValidation.tryValidate(request.all())
    console.log(inputPayload[1])
    const gpt = new GeminiApiService()
    const gptCrudeResponse = await gpt.sendMessage(inputPayload[1]?.contents)

    return response.ok({ reply: gptCrudeResponse })
  }
}
