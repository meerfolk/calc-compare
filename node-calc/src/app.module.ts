import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PointsModule } from './points/points.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env['CONNECTION_STRING']),
    PointsModule,
  ],
})
export class AppModule {}
