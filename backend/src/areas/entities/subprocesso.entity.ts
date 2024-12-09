import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Processo } from './processo.entity';

@Entity()
export class Subprocesso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Processo, (processo) => processo.subprocessos)
  processo: Processo;
}
