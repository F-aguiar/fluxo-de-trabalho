// src/areas/areas.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Get()
  findAll(): Promise<Area[]> {
    return this.areasService.findAll();
  }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto): Promise<Area> {
    return this.areasService.create(createAreaDto);
  }

  // Rota PUT para atualizar uma área
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateAreaDto: UpdateAreaDto,
  ): Promise<Area> {
    return this.areasService.update(id, updateAreaDto);
  }
}
