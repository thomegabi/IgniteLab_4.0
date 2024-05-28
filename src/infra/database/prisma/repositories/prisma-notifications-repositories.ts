import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotifitionMapper } from "../mappers/prisma-notification.mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository{
constructor(private prisma: PrismaService){}
  
  async findManyByRecipientId(recipientID: string): Promise<Notification[]> {
    const notification = await this.prisma.notification.findMany({
      where: {
        recipientID,
      }
    });

    return notification.map(PrismaNotifitionMapper.toDomain); // Isso é necessário pois ele retorna a notification do prisma, oq exige essa converção pelo mapper
  }

  async findById(notificationID: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationID
      },
    });

    if(!notification){
      return null;
    }

    return PrismaNotifitionMapper.toDomain(notification);
  }

  async countManyByRecipientId(recipientID: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientID,
      }
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotifitionMapper.toPrisma(notification)

    await this.prisma.notification.create({
      data: raw,
    });
  }

  
  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotifitionMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
  
}