import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./user";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(_ => User, {
        createForeignKeyConstraints: false,
        persistence: false,
    })
    @JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id',
    })
    user: User;
}