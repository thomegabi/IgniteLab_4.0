import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { NotificationRepository } from "src/application/repositories/notification-repository";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repositories";

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationRepository, // Isso quer dizer que toda vez que uma classe precisar acessar o NotificationRepository
            useClass: PrismaNotificationsRepository, // Ele vai receber acesso a essa classe, serve para evitar erro na hr de rodar o programa
        }
    ],

    exports: [NotificationRepository] // Aqui ele informa oq sera compartilhado sempre que uma classe importar esse modulo
})

export class DatabaseModule{
    
}