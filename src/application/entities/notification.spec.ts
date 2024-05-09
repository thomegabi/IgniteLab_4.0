import { Content } from "./content";
import { Notification } from "./notification";


describe('Notification', () =>{ // Criação de uma categoria de notificações
    it('should be able to create a notification', () => { 
        const notification = new Notification({
            recipientID: 'test-recipient-id',
            content: new Content('Você recebeu uma nova notificação'),
            category: 'social',
        });
    
        expect(notification).toBeTruthy(); 
    }); 
})



