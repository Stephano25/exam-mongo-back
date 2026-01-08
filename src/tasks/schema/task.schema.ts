import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;
@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: 'EN_COURS' })
  status: string;
}

export type TaskDocument = Task & Document;
