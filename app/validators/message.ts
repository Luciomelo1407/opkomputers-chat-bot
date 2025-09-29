import vine from '@vinejs/vine'

export const MessageValidation = vine.compile(
  vine.object({
    input: vine.array(
      vine.object({
        role: vine.string().in(['developer', 'user', 'assistant']),
        content: vine.string(),
      })
    ),
  })
)
