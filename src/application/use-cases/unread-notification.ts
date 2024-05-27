import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface UnreadNotificationRequest{
    notificationID: string;
}

type UnreadNotificationResponse = void;

@Injectable() // necessário para fazer injeção de dados pelo framework
export class UnreadNotification{
    constructor(private notificationRepository: NotificationRepository) {}


    async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { notificationID } = request

        const notification = await this.notificationRepository.findById(
           notificationID,
        );

        if(!notification){
          throw new NotificationNotFound();
        }

        notification.unread();

        await this.notificationRepository.save(notification);
    }
}