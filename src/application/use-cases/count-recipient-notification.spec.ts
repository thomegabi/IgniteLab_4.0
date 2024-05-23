import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { CountRecipientNotification } from "./count-recipient-notifications";

describe ('Count Notifications', () => {
    it('should be able to count notifications', async () =>{
        const notificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(
          new Notification({
            content: new Content('Nova Solicitação de amizade!'),
            category: 'social', 
            recipientID: 'recipient-1',
      })
    );
        await notificationsRepository.create(
          new Notification({
            content: new Content('Nova Solicitação de amizade!'),
            category: 'social', 
            recipientID: 'recipient-1',
      })
    );
        await notificationsRepository.create(
          new Notification({
            content: new Content('Nova Solicitação de amizade!'),
            category: 'social', 
            recipientID: 'recipient-2',
      })
    );

        const {count} = await countRecipientNotifications.execute({
          recipientID: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});