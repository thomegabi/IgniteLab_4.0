import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";



export class InMemoryNotificationRepository implements NotificationRepository { // Ela implementa o repositorio das notificações
    

    async findById(notificationID: string): Promise<Notification | null> {
        const notification = this.notifications.find(
            (item) => item.id == notificationID,
        );

        if(!notification){
            return null;
        }

        return notification;
    } 

    async findManyByRecipientId(recipientID: string): Promise<Notification[]> {
        return this.notifications.filter(
            (notification) => notification.recipientID == recipientID,
        );
    } 

    async countManyByRecipientId(recipientID: string): Promise<number> {
        return this.notifications.filter(
            notification => notification.recipientID == recipientID
        ).length;
    }

    async create(notification: Notification){
        this.notifications.push(notification);
    }

    async save(notification: Notification): Promise<void> { // Retorna o indice dentro do array onde o id da notificação é o msm ta notificação que esta tentando salvar
        const notificationIndex = this.notifications.findIndex(
            (item) => item.id == notification.id,
        );

        if (notificationIndex >= 0){
            this.notifications[notificationIndex] = notification; // sobrepõe a notificação existente com a nova
        }
    }

    
    public notifications: Notification[] = [];
}