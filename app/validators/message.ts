import vine from '@vinejs/vine'

export const MessageValidation = vine.compile(
  vine.object({
    contents: vine.array(
      vine.object({
        role: vine.string().in(['tool', 'user', 'model']).trim(),
        parts: vine.array(vine.object({ text: vine.string().trim().minLength(2) })),
      })
    ),
  })
)
