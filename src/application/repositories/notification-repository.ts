import { Notification } from "../entities/notification";

export abstract class NotificationRepository{
    abstract create (notification: Notification): Promise<void>; // Lembrando que o Primise existe por conta do metodo ser assincrono, e n retorna nada pois a notificação ja foi criada
    abstract findById (notificationID: string): Promise<Notification | null> // Procura a notificação pelo ID, e caso não exista retorna null
    abstract save (notification: Notification): Promise<void>;
}