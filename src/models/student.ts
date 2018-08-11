import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";


@Entity("students")
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("character varying")
  name: string;

  @Column("integer")
  age: number;

}