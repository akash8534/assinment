import { Injectable } from '@nestjs/common';

@Injectable()
export class StagesService {
  async scheduleStage(scheduleStageDto: { stage_name: string; time: string }) {
    return {
      stage_id: 'fake-uuid',
      ...scheduleStageDto,
      host_user_id: 'host-uuid',
      status: 'scheduled',
    };
  }

  async getScheduledStages(hostUserId: string, limit: number, offset: number) {
    return {
      count: 1,
      results: [
        {
          stage_id: 'fake-uuid',
          stage_name: 'Sample Stage',
          host_user_id: hostUserId,
          scheduled_time: '2024-12-10T14:30:00Z',
          status: 'scheduled',
        },
      ],
    };
  }
}
