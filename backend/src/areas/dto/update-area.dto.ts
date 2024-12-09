import { IsString, IsOptional } from 'class-validator';

export class UpdateAreaDto {
  @IsString()
  @IsOptional() // Campo opcional para atualização
  name?: string;
}
