import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { UnreadNotification } from "./unread-notification";

describe ('Unread Notification', () => {
    it('should be able to unread a notification', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(notificationsRepository);

        const notification = makeNotification({
          readAt: new Date(),
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
          notificationID: notification.id,
        });

        expect(notificationsRepository.notifications[0].readAt).toBeNull()
    });

    it('should not be able to unread a non existeing notification', async () => {
      const notificationsRepository = new InMemoryNotificationRepository();
      const unreadNotification = new UnreadNotification(notificationsRepository);
      
      expect(() => {
        return unreadNotification.execute({
          notificationID: 'fake-notificaiton-id',
        });
      }).rejects.toThrow(NotificationNotFound);  // o rejects é a forma que uma promise/async funciona, caso de resolve deu certo, caso de rejects deu errado ou mandou algum erro

    })
});