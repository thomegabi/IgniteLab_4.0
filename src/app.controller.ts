import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller("notifications") // Se for colocado algo dentro desse decorator como "app", vai ser necessário expecificar na URL final, nesse caso seris "localhost:3000/app" 
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get() // Aqui segue a mesma logica, como o get esta dentro do Controller, para chegar na pag agora sera necessário digitar "localhost:3000/app/test"
  getHello() {
    return this.prisma.notification.findMany();
  }
}
