import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller("notifications") // Se for colocado algo dentro desse decorator como "app", vai ser necessário expecificar na URL final, nesse caso seris "localhost:3000/app" 
export class NotificationsController {

@Post() // Agora com o post ele vai postar informações, ou seja, enviar notificações e não pegalas a penas cono o @Get
  async create(@Body() body: CreateNotificationBody) {
    const {recipientID, content, category} = body
  }
}
