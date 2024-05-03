import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationBody{
    @IsNotEmpty()
    @IsUUID()
    recipientID: string

    @IsNotEmpty()
    @Length(5, 240) //Decorator que define nmr min e max de caracteres
    content: string

    @IsNotEmpty()
    category: string
}