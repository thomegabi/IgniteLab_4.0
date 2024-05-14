import { Notification } from "../../src/application/entities/notification";
import { NotificationRepository } from "../../src/application/repositories/notification-repository";



export class InMemoryNotificationRepository implements NotificationRepository { // Ela implementa o repositorio das notificações
    public notifications: Notification[] = [];

    async create(notification: Notification){
        this.notifications.push(notification);
    }
}