// src/areas/areas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private areasRepository: Repository<Area>,  // Injetando o repositório da entidade Area
  ) {}

  // Método para retornar todas as áreas
  async findAll(): Promise<Area[]> {
    return this.areasRepository.find();  // Busca todas as áreas do banco
  }

  // Método para criar uma nova área
  async create(createAreaDto: CreateAreaDto): Promise<Area> {
    const area = this.areasRepository.create(createAreaDto);  // Cria uma instância da área com os dados recebidos
    return this.areasRepository.save(area);  // Salva a nova área no banco de dados
  }

  // Método para atualizar uma área existente
  async update(id: number, updateAreaDto: UpdateAreaDto): Promise<Area> {
    const area = await this.areasRepository.findOne({ where: { id } });

    if (!area) {
      throw new NotFoundException(`Área com ID ${id} não encontrada`);
    }

    // Atualiza os dados da área com os novos valores fornecidos no DTO
    Object.assign(area, updateAreaDto);

    // Salva a área atualizada no banco de dados
    return this.areasRepository.save(area);
  }

  // Método para remover uma área
  async remove(id: number): Promise<void> {
    const area = await this.areasRepository.findOne({ where: { id } });

    if (!area) {
      throw new NotFoundException(`Área com ID ${id} não encontrada`);
    }

    await this.areasRepository.delete(id);  // Deleta a área do banco de dados
  }
}
