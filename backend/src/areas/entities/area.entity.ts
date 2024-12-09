import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('areas') // Nome da tabela no banco de dados
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // O nome da área
  processos: any;
}