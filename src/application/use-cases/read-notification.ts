import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ReadNotificationRequest{
    notificationID: string;
}

type ReadNotificationResponse = void;

@Injectable() // necessário para fazer injeção de dados pelo framework
export class ReadNotification{
    constructor(private notificationRepository: NotificationRepository) {}


    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> { // O promisse é necessário pois é uma função asincrona
        const { notificationID } = request

        const notification = await this.notificationRepository.findById(
           notificationID,
        );

        if(!notification){
          throw new NotificationNotFound();
        }

        notification.read();

        await this.notificationRepository.save(notification);
    }
}