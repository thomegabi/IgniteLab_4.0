import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotifitionMapper } from "../mappers/prisma-notification.mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository{
constructor(private prismaServide: PrismaService){}
  

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotifitionMapper.toPrisma(notification)

    await this.prismaServide.notification.create({
      data: raw,
    });
  }

  findById(notificationID: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }
  save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}