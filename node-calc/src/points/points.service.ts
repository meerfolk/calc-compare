import { Injectable } from '@nestjs/common';
import { PointsRepository } from './points.repository';

@Injectable()
export class PointsService {
  public constructor(private readonly repository: PointsRepository) {}

  public async calculate(): Promise<bigint> {
    const points = await this.repository.findAll();
    let result = 0n;

    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points.length; j++) {
        result +=
          BigInt(points[i].x) +
          BigInt(points[i].y) +
          BigInt(points[j].x) +
          BigInt(points[j].y);
      }
    }

    return result;
  }
}
