import { Request, Response } from 'express'
import fakeUser from '@app/mocks/users'

const sendHelloWorld = (request: Request, response: Response) => {
  response.status(200).send('Hello World!')
}

const getFakerUser = (request: Request, response: Response) => {
  response.status(200).send(fakeUser)
}

export default { sendHelloWorld, getFakerUser }
