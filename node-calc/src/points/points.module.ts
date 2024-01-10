import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Point, PointSchema } from './point.schema';
import { PointsContorller } from './points.controller';
import { PointsRepository } from './points.repository';
import { PointsService } from './points.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Point.name, schema: PointSchema, collection: 'point' },
    ]),
  ],
  controllers: [PointsContorller],
  providers: [PointsRepository, PointsService],
})
export class PointsModule {}
