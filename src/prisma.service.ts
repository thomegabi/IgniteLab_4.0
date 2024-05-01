import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit { // Ao adicionar esse OnModuleInit possibilita que ele forçar a coneção com o prisma qd o programa for executado
  async onModuleInit() {
    await this.$connect();
  }
}