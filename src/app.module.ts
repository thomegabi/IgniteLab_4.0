import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controlers/app.controller';
import { AppService } from './infra/app.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
