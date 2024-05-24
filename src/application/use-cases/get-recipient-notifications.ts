import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { Notification } from "@application/entities/notification";

interface GetRecipientNotificationRequest{
    recipientID: string;
}

interface GetRecipientNotificationResponse{
  notifications: Notification[];
}

@Injectable() 
export class GetRecipientNotification{
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { recipientID } = request

        const notifications = await this.notificationRepository.findManyByRecipientId(
          recipientID,
        );

        return{
          notifications,
        };
    }
}