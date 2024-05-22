import { Notification } from "@application/entities/notification";

export class PrismaNotifitionMapper{ // É importante criar esse mapper para evitar que erros futuros aconteçam, caso o nome das variaveis seja alterado ou algo do tipo
  static toPrisma(notification: Notification){
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientID: notification.recipientID,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}