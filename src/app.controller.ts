import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { create } from 'domain';
import { randomUUID } from 'node:crypto'; // Essa biblioteca é responsavel por gerar um ID Unico Universal (UUID)
import { CreateNotificationBody } from './create-notification-body';

@Controller("notifications") // Se for colocado algo dentro desse decorator como "app", vai ser necessário expecificar na URL final, nesse caso seris "localhost:3000/app" 
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get() // Aqui segue a mesma logica, como o get esta dentro do Controller, para chegar na pag agora sera necessário digitar "localhost:3000/app/test"
  list() {
    return this.prisma.notification.findMany();
  }

@Post() // Agora com o post ele vai postar informações, ou seja, enviar notificações e não pegalas a penas cono o @Get
  async create(@Body() body: CreateNotificationBody) {
    const {recipientID, content, category} = body

    await this.prisma.notification.create({
        data: {
        id: randomUUID(),
        content,
        category,
        recipientID,
      },
    });
  }
}
