import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps> // O Partial serve para poder passar o NotificationProps sem a necessiade de passar todos os atributos

export function makeNotification(override: Override = {}){
  return new Notification({
    content: new Content('Nova Solicitação de amizade!'),
    category: 'social', 
    recipientID: 'recipient-2',
    ...override,
  });
}