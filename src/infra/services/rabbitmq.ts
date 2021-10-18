import { rabbitmqConst } from '@app/constants'
import { RabbitMQServer } from '@infra/rabbitmq'

const { port, username, password } = rabbitmqConst

export const rabbitmqService = (() => {
  let instance: RabbitMQServer

  return {
    async instance() {
      if (!instance) {
        const rabbitServer = new RabbitMQServer()
        await rabbitServer.start(`amqp://${username}:${password}@localhost:${port}`)
        instance = rabbitServer
      }
      return instance
    },
  }
})()
