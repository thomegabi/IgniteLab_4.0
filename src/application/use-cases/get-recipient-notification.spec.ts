import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { makeNotification } from "@test/factories/notification-factory";
import { GetRecipientNotification } from "./get-recipient-notifications";

describe ('Count Notifications', () => {
    it('should be able to get notifications', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const getRecipientNotifications = new GetRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-1'})
    );
        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-1'})
    );
        await notificationsRepository.create(
          makeNotification({recipientID: 'recipient-2'})
    );

        const {notifications} = await getRecipientNotifications.execute({
          recipientID: 'recipient-1',
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(
          expect.arrayContaining([
            expect.objectContaining({recipientID: 'recipient-1'}),
            expect.objectContaining({recipientID: 'recipient-1'}),
        ]))
    });
});