import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CancelNotificationRequest{
    notificationID: string;
}

type CancelNotificationResponse = void;

@Injectable() // necessário para fazer injeção de dados pelo framework
export class CancelNotification{
    constructor(private notificationRepository: NotificationRepository) {}


    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { notificationID } = request

        const notification = await this.notificationRepository.findById(
           notificationID,
        );

        if(!notification){
          throw new NotificationNotFound();
        }

        notification.cancel();

        await this.notificationRepository.save(notification);
    }
}