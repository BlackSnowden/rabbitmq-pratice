const { RABBITMQ_AMQP_PORT, RABBITMQ_USER, RABBITMQ_PASSWORD } = process.env

export const rabbitmqConst = {
  port: String(RABBITMQ_AMQP_PORT),
  username: String(RABBITMQ_USER),
  password: String(RABBITMQ_PASSWORD),
}
