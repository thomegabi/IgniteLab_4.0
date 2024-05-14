import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification"

describe ('Send Notification', () => {
    it('should be able to send a notification', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();

        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social', 
            recipientID: 'example-recipient-id',
        });

        expect(notificationsRepository.notifications).toHaveLength(1); // Agora ele faz o teste
        expect(notificationsRepository.notifications[0]).toEqual(notification);

    });
});