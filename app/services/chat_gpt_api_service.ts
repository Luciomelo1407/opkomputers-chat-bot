import OpenAI from 'openai'

export class ChatGptApiService {
  client: OpenAI

  constructor() {
    this.client = new OpenAI()
  }

  async sendMessage(message: any) {
    try {
      const response = await this.client.responses.create({
        model: 'gpt-5-nano',
        input: message,
      })
      return response.output_text
    } catch (error) {
      throw error
    }
  }
}
