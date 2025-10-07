// validators/message.ts
import vine from '@vinejs/vine'

export const MessageValidation = vine.compile(
  vine.object({
    input: vine.array(
      vine.object({
        content: vine.string().minLength(1),
        role: vine.enum(['user', 'assistant', 'system', 'developer']),
        type: vine.literal('message').optional(),
      })
    ),
  })
)
