import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async registerNotification(registerNotificationDto: { device_token: string }) {
    return { message: 'Device registered for notifications.' };
  }

  async sendNotification(sendNotificationDto: { stage_id: string; event_type: string; message: string }) {
    return { message: 'Notification sent successfully.' };
  }
}
