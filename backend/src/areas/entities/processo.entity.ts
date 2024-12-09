import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Area } from './area.entity';
import { Subprocesso } from './subprocesso.entity';

@Entity()
export class Processo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Area, (area) => area.processos)
  area: Area;

  @OneToMany(() => Subprocesso, (subprocesso) => subprocesso.processo)
  subprocessos: Subprocesso[];
}
