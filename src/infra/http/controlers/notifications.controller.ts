import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller("notifications") // Se for colocado algo dentro desse decorator como "app", vai ser necessário expecificar na URL final, nesse caso seris "localhost:3000/app" 
export class NotificationsController {
  constructor(private sendNotification: SendNotification){}

@Post() // Agora com o post ele vai postar informações, ou seja, enviar notificações e não pegalas a penas cono o @Get
  async create(@Body() body: CreateNotificationBody) {
    const {recipientID, content, category} = body;

    const {notification} = await this.sendNotification.execute({
      recipientID,
      content,
      category,
    });

    return {notification};
  }
}
