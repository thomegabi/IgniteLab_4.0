import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface SendNotificationRequest{
    recipientID: string,
    content: string,
    category: string,
}

interface SendNotificationResponse{
    notification: Notification;
}

@Injectable() // necessário para fazer injeção de dados pelo framework
export class SendNotification{
    constructor(private notificationRepository: NotificationRepository) {}


    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { recipientID, content, category } = request

        const notification = new Notification({
            recipientID,
            content: new Content(content), 
            category,
        });

        await this.notificationRepository.create(notification);

        return{
            notification,
        }
    }
}