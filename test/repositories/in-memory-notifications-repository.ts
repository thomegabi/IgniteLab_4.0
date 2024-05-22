import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";



export class InMemoryNotificationRepository implements NotificationRepository {
    
    async create(notification: Notification){
        this.notifications.push(notification);
    }

    save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(notificationID: string): Promise<Notification | null> {
        throw new Error("Method not implemented.");
    } // Ela implementa o repositorio das notificações
    public notifications: Notification[] = [];
}