import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "./interface/user.interface";

@Entity({name:'Users'})
export class User extends BaseEntity implements IUser{
    @PrimaryGeneratedColumn()
    id?: string;
    @Column({type:'varchar',length:255})
    user!: string;
    @Column({type:'varchar',length:255})
    password!: string;
    @Column({type:'varchar',length:255})
    fullName!: string;
    @CreateDateColumn({type:'datetime'})
    createdAt!: Date;
    @UpdateDateColumn({type:'datetime'})
    updatedAt!: Date;

    @BeforeInsert()
    insertCreated(){
        this.createdAt = new Date(Date.now());
        this.updatedAt = new Date(Date.now()); 
    }

    @BeforeUpdate()
    insertUpdated(){
        this.updatedAt = new Date(Date.now()); 
    }
}