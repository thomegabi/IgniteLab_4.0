import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationNotFound } from "./errors/notification-not-found";

describe ('Cancel Notification', () => {
    it('should be able to cancel a notification', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification({
            content: new Content('Nova Solicitação de amizade!'),
            category: 'social', 
            recipientID: 'example-recipient-id',
        });

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
          notificationID: notification.id,
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
          expect.any(Date), // Ele espera que o objeto na primeira posição seja igual a qualquer objeto do tipo date
        )
    });

    it('should not be able to cancel a non existeing notification', async () => {
      const notificationsRepository = new InMemoryNotificationRepository();
      const cancelNotification = new CancelNotification(notificationsRepository);
      
      expect(() => {
        return cancelNotification.execute({
          notificationID: 'fake-notificaiton-id',
        });
      }).rejects.toThrow(NotificationNotFound);  // o rejects é a forma que uma promise/async funciona, caso de resolve deu certo, caso de rejects deu errado ou mandou algum erro

    })
});