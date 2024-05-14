import { Module } from "@nestjs/common";
import { NotificationsController } from "./controlers/notifications.controller";
import { SendNotification } from "src/application/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})

export class HttpModule {}

