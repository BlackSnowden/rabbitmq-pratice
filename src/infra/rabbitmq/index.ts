import { Channel, connect, Connection, Message } from 'amqplib'

export class RabbitMQServer {
  private instance: Connection | null = null
  private channel: Channel | null = null

  async start(uri: string): Promise<Connection> {
    this.instance = await connect(uri)
    this.channel = await this.instance.createChannel()

    return this.instance
  }

  async publishInQueue(queue: string, message: string): Promise<boolean> {
    if (this.channel) {
      return this.channel.sendToQueue(queue, Buffer.from(message))
    }
    return false
  }

  async consume(queue: string, callback: (message: Message) => void): Promise<void> {
    if (!this.channel) return

    this.channel.consume(queue, (message) => {
      if (!message || !this.channel) return
      callback(message)
      this.channel.ack(message)
    })
  }
}
