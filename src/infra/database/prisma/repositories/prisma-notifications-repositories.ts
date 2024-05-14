import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationRepository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository{
constructor(private prismaServide: PrismaService){}

  async create(notification: Notification): Promise<void> {
    await this.prismaServide.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientID: notification.recipientID,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
  
}