import { Router } from 'express'
import rabbitmqController from './rabbitmq.middleware'

const router = Router()

router.get('/helloWorld', rabbitmqController.sendHelloWorld)
router.get('/fakerUser', rabbitmqController.getFakerUser)
router.get('/readMessages', rabbitmqController.getRabbitMessages)

export { router }
