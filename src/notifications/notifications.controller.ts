import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { RegisterNotificationDto } from './dto/register-notification.dto';
import { SendNotificationDto } from './dto/send-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('register')
  async registerNotification(@Body() registerNotificationDto: RegisterNotificationDto) {
    return this.notificationsService.registerNotification(registerNotificationDto);
  }

  @Post('send')
  async sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }
}
