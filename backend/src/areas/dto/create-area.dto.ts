// src/areas/dto/create-area.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAreaDto {
  @IsString({ message: 'O nome da área deve ser uma string válida' })
  @IsNotEmpty({ message: 'O nome da área não pode ser vazio' })
  name: string;
}
