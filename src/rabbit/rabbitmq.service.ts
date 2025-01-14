
import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import 'dotenv/config';

@Injectable()
export class RabbitService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async init() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL);
    //uncomment only for debugging purposes
    // if (!process.env.TEST_ENV) {
    //   console.log('RabbitMQ connection initialized!');
    // }
    this.channel = await this.connection.createChannel();
    await this.channel.assertExchange('user_created', 'fanout');
  }

  async sendMessage(message: any) {
    this.channel.publish(
      'user_created',
      '',
      Buffer.from(JSON.stringify(message)),
    );
  }
}
