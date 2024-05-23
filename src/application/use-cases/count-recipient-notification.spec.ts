import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe ('Count Notifications', () => {
    it('should be able to count notifications', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-1'})
    );
        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-1'})
    );
        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-2'})
    );

        const {count} = await countRecipientNotifications.execute({
          recipientID: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});