import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PointDocument = HydratedDocument<Point>;

@Schema()
export class Point {
  @Prop()
  public readonly x: number;

  @Prop()
  public readonly y: number;
}

export const PointSchema = SchemaFactory.createForClass(Point);
