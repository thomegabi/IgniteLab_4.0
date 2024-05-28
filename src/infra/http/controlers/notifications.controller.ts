import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationViewModel } from '../dtos/view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';

@Controller("notifications") // Se for colocado algo dentro desse decorator como "app", vai ser necessário expecificar na URL final, nesse caso seris "localhost:3000/app" 
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotifcation: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotification,
    private getRecipientNotifications: GetRecipientNotification,
  ){}


@Patch(':id/cancel') // Decorator que atualiza um dado especifico com o caminho expecificado tambem
async cancel(@Param('id') id: string){ // o decorator Param serve para identar uma variavel. passe o nome e a qual variavel ele se dirige
  await this.cancelNotifcation.execute({
    notificationID: id,
  })
}

@Get('count/from/:recipientID')
async countFromRecipient(
  @Param('recipientID')recipientID: string,
): Promise<{count:number}> { // É uma boa pratica declarar o retorno quando o método possuir retorno, para evitar erros
    const {count} = await this.countRecipientNotifications.execute({
     recipientID,
    });

    return{
      count,
    }
}

@Get('from/:recipientID')
async getFromRecipient(
  @Param('recipientID')recipientID: string) { // É uma boa pratica declarar o retorno quando o método possuir retorno, para evitar erros
    const {notifications} = await this.getRecipientNotifications.execute({
     recipientID,
    });

    return{
      notifications: notifications.map(NotificationViewModel.toHTTP),
    }
}

@Patch(':id/read') // Decorator que atualiza um dado especifico com o caminho expecificado tambem
async read(@Param('id') id: string){ // o decorator Param serve para identar uma variavel. passe o nome e a qual variavel ele se dirige
  await this.readNotification.execute({
    notificationID: id,
  })
}

@Patch(':id/unread') // Decorator que atualiza um dado especifico com o caminho expecificado tambem
async unread(@Param('id') id: string){ // o decorator Param serve para identar uma variavel. passe o nome e a qual variavel ele se dirige
  await this.unreadNotification.execute({
    notificationID: id,
  })
}

@Post() // Agora com o post ele vai postar informações, ou seja, enviar notificações e não pegalas a penas cono o @Get
  async create(@Body() body: CreateNotificationBody) {
    const {recipientID, content, category} = body;

    const {notification} = await this.sendNotification.execute({
      recipientID,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
