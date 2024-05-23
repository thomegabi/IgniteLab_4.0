export class NotificationNotFound extends Error {
  constructor(){
    super('Notification Not Found.') // super() é o constructor da classe Error
  }
}