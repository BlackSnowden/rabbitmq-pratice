import { Router } from 'express'
import { router as rabbitmqRouter } from './rabbitmq/rabbitmq.route'

const router = Router()

router.use('/rabbitmq', rabbitmqRouter)

export { router }
