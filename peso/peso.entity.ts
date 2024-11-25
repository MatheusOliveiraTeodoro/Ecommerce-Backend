import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('pesos')
export class Peso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false, name: 'peso' })
  peso: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false, name: 'multiplicador' })
  multiplicador: number;

}