import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasController } from './areas.controller';
import { AreasService } from './areas.service';
import { Area } from './entities/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Area])], // Faz a injeção da entidade Area
  controllers: [AreasController],
  providers: [AreasService],
})
export class AreasModule {}
