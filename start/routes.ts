/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import HandleMessagesController from '#controllers/handle_messages_controller'

router.post('/api/v1/chat', [HandleMessagesController, 'chat'])
