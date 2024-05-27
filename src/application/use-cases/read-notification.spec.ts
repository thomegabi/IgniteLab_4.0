import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { ReadNotification } from "./read-notification";

describe ('Read Notification', () => {
    it('should be able to read a notification', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await readNotification.execute({
          notificationID: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toEqual(
          expect.any(Date), // Ele espera que o objeto na primeira posição seja igual a qualquer objeto do tipo date
        )
    });

    it('should not be able to read a non existeing notification', async () => {
      const notificationsRepository = new InMemoryNotificationRepository();
      const readNotification = new ReadNotification(notificationsRepository);
      
      expect(() => {
        return readNotification.execute({
          notificationID: 'fake-notificaiton-id',
        });
      }).rejects.toThrow(NotificationNotFound);  // o rejects é a forma que uma promise/async funciona, caso de resolve deu certo, caso de rejects deu errado ou mandou algum erro

    })
});