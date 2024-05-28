import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import {Notification as RawNotification} from "@prisma/client" // Como essas 2 classes possuem o msm nomem, é possivel renomea-la dessa forma com 'as' para evitar conflitos

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

  static toDomain(raw: RawNotification){
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientID: raw.recipientID,
      readAt: raw.readAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt,
    },
    raw.id,
  );
  }
}