import { Controller, Get } from '@nestjs/common';
import { PointsService } from './points.service';

@Controller({
  path: 'points',
})
export class PointsContorller {
  public constructor(readonly service: PointsService) {}

  @Get('/calculate')
  public async calculate(): Promise<bigint> {
    return this.service.calculate();
  }
}
