import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Point } from './point.schema';

@Injectable()
export class PointsRepository {
  public constructor(
    @InjectModel(Point.name) private readonly pointModel: Model<Point>,
  ) {}

  public async findAll(): Promise<Point[]> {
    const result = await this.pointModel.find().exec();

    return result;
  }
}
