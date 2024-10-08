import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Character extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  @Column(DataType.DECIMAL(5, 2))
  health: number;

  @Column(DataType.INTEGER)
  strength: number;
}
