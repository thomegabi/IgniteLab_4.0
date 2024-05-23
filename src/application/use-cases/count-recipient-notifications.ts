import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";

interface CountRecipientNotificationRequest{
    recipientID: string;
}

interface CountRecipientNotificationResponse{
  count: number;
}

@Injectable() 
export class CountRecipientNotification{
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { recipientID } = request

        const count = await this.notificationRepository.countManyByRecipientId(
          recipientID,
        );

        return{
          count,
        };
    }
}