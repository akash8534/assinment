import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stage extends Document {
  @Prop() stage_name: string;
  @Prop() host_user_id: string;
  @Prop() scheduled_time: Date;
  @Prop({ default: 'scheduled' }) status: string;
}

export const StageSchema = SchemaFactory.createForClass(Stage);
