import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Item } from "./item"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToMany(
        _ => Item, 
        item => item.user, {
            createForeignKeyConstraints: false,
            persistence: false,
        }
    )
    items?: Item[]
}