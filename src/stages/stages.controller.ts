import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { StagesService } from './stages.service';
import { ScheduleStageDto } from './dto/schedule-stage.dto';

@Controller('stages')
export class StagesController {
  constructor(private readonly stagesService: StagesService) {}

  @Post('schedule')
  async scheduleStage(@Body() scheduleStageDto: ScheduleStageDto) {
    return this.stagesService.scheduleStage(scheduleStageDto);
  }

  @Get('upcoming')
  async getScheduledStages(
    @Query('host_user_id') hostUserId: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return this.stagesService.getScheduledStages(hostUserId, limit, offset);
  }
}
