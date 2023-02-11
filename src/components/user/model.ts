import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "./interface/user.interface";

@Entity({name:'Users'})
export class User extends BaseEntity implements IUser{
    @PrimaryGeneratedColumn()
    id?: string;
    @Column({type:'varchar',length:255})
    username!: string;
    @Column({type:'varchar',length:255})
    password!: string;
    @Column({type:'varchar',length:255})
    fullname!: string;
    @Column({type:'datetime'})
    createdAt!: Date;
    @Column({type:'datetime'})
    updatedAt!: Date;
}