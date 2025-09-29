import { GoogleGenAI } from '@google/genai'

export class GeminiApiService {
  // Your code here
  client
  constructor() {
    this.client = new GoogleGenAI({})
  }

  async sendMessage(message: any) {
    const response = await this.client.models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents: message,
      config: {
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
      },
    })

    return response.text
  }
}
