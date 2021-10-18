import { Request, Response } from 'express'
import fakeUser from '@app/mocks/users'
import { rabbitmqService } from '@infra/services/rabbitmq'

const sendHelloWorld = async (request: Request, response: Response) => {
  const rabbitInstance = await rabbitmqService.instance()
  const message = 'Hello World!'

  await rabbitInstance.publishInQueue('nest', message)
  response.status(200).send(message)
}

const getFakerUser = async (request: Request, response: Response) => {
  const rabbitInstance = await rabbitmqService.instance()

  await rabbitInstance.publishInQueue('nest', JSON.stringify(fakeUser))
  response.status(200).send(fakeUser)
}

const getRabbitMessages = async (request: Request, response: Response) => {
  const rabbitInstance = await rabbitmqService.instance()
  await rabbitInstance.consume('nest', (message) => console.log(message.content.toString()))

  response.status(200).sendStatus(200)
}

export default { sendHelloWorld, getFakerUser, getRabbitMessages }
